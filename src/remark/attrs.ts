/**
 * Code by Alexander Kozlov
 * https://github.com/arobase-che/remark-attr/issues/22#issuecomment-1013672211
 */

class Cursor {
  pos = 0;

  constructor(private readonly input: string) {}

  isEof() {
    return this.pos >= this.input.length;
  }

  get char() {
    return this.input[this.pos];
  }

  match(char: string | RegExp): boolean {
    const current = this.char;

    if (char instanceof RegExp) {
      return !!current && char.test(current);
    } else {
      return current === char;
    }
  }

  consumeTrivia() {
    while (this.accept(/\s|\n|\r/)) {
      //
    }
  }

  advance() {
    const char = this.char;
    this.pos++;
    return char;
  }

  accept(char: string | RegExp): boolean {
    if (this.match(char)) {
      this.pos++;
      return true;
    }

    return false;
  }
}

function parseKey(cursor: Cursor): string {
  cursor.consumeTrivia();

  if (!cursor.match(/\w/)) {
    return "";
  }

  let key = cursor.advance();

  while (cursor.match(/[\w-]/)) {
    key += cursor.advance();
  }

  cursor.consumeTrivia();

  return key;
}

function parseValue(cursor: Cursor): string {
  let value = "";
  let eos = " ";

  if (cursor.accept('"')) {
    eos = '"';
  } else if (cursor.accept("'")) {
    eos = "'";
  }

  while (!cursor.isEof() && !cursor.accept(eos)) {
    value += cursor.advance();
  }

  cursor.consumeTrivia();

  return value.trim();
}

/**
 * simple recursive decent parser for strings like:
 * something=true
 * target="_blank"
 * hello='there'
 * easy peasy data-value=5
 */
export function parseAttributes(input: string): Record<string, string> | null {
  const result: Record<string, string> = {};
  const cursor = new Cursor(input);

  cursor.consumeTrivia();

  while (!cursor.isEof()) {
    const key = parseKey(cursor);

    if (!key && !cursor.isEof()) {
      // something goes wrong. Parsing failed
      return null;
    }

    if (key) {
      result[key] = cursor.accept("=") ? parseValue(cursor) : "";
    }
  }

  return result;
}

type Iteratee = (node: any, index: number | null, parent: any) => any;
const map = (tree: any, iteratee: Iteratee) => {
  const preorder: Iteratee = (node, index, parent) => {
    const newNode = iteratee(node, index, parent);

    if (Array.isArray(newNode.children)) {
      newNode.children = newNode.children.map((child: any, index: number) => {
        return preorder(child, index, node);
      });
    }

    return newNode;
  };

  return preorder(tree, null, null);
};

export function remarkAttrs(): any {
  return (tree: any) => {
    return map(tree, (node, index, parent) => {
      if (node.type == "text" && node.value[0] == "{" && parent && index) {
        const endof = node.value.indexOf("}");
        const prev = parent.children[index - 1];
        const attrs =
          endof && prev && parseAttributes(node.value.slice(1, endof));

        if (attrs) {
          prev.data = {
            ...prev.data,
            hProperties: attrs,
          };
          return {
            ...node,
            value: node.value.slice(endof + 1),
          };
        }
      }

      return node;
    });
  };
}
