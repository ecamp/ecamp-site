---
title: Juni-Release
path: 2025-06-release
pubDate: 2025-06-11
description: 20'000 Leitende, Druck-Filter und Performance-Verbesserungen
image: "~/assets/images/2025-juni-release.png"
---

Stolz dürfen wir verkünden, dass inzwischen über 20'000 Accounts auf eCamp v3 erstellt und aktiviert wurden! Über Pfingsten wurden dieses Jahr hunderte von Lagern durchgeführt, welche mit eCamp v3 geplant wurden, darunter auch einige Teile vom [Jublasurium](https://www.jublasurium.ch/), dem nationalen Pfingstlager der Jubla. Vielen Dank für euer Vertrauen und euer wertvolles Feedback!

Der grössere Andrang und die grössere Datenmenge auf eCamp v3 machte sich auch hinter den Kulissen bemerkbar. Daher verbrachten wir den Winter grösstenteils mit diversen Performance-Verbesserungen, welche wir laufend ohne grosse Ankündigung einspielten. Im Frühling konnten wir dann noch einige neue Features umsetzen.

<div class="simple-columns">

![Aktivitätenfilter beim Drucken](~/assets/images/2025-06/print-filter-de.png)

<div>

Beim Drucken können die Aktivitäten-Filter neu auch angewendet werden. Dort kann neu auch nach Tag gefiltert werden. So kannst du dein Detailprogramm ganz individuell zusammenstellen, zum Beispiel indem du alle Essens-Blöcke herausfilterst und so Papier sparst. [#7439](https://github.com/ecamp/ecamp3/pull/7439){.issuelink}
</div>
</div>

## Weitere Verbesserungen und Bugfixes

- Diverse Performance Verbesserungen wurden umgesetzt. [#6170](https://github.com/ecamp/ecamp3/pull/6170){.issuelink} [#6535](https://github.com/ecamp/ecamp3/pull/6535){.issuelink} [#6720](https://github.com/ecamp/ecamp3/pull/6720){.issuelink} [#6763](https://github.com/ecamp/ecamp3/pull/6763){.issuelink} [#6820](https://github.com/ecamp/ecamp3/pull/6820){.issuelink} [#6949](https://github.com/ecamp/ecamp3/pull/6949){.issuelink} [#6955](https://github.com/ecamp/ecamp3/pull/6955){.issuelink} [#6956](https://github.com/ecamp/ecamp3/pull/6956){.issuelink} [#7115](https://github.com/ecamp/ecamp3/pull/7115){.issuelink} [#7114](https://github.com/ecamp/ecamp3/pull/7114){.issuelink} [#7051](https://github.com/ecamp/ecamp3/pull/7051){.issuelink} [#7135](https://github.com/ecamp/ecamp3/pull/7135){.issuelink} [#7193](https://github.com/ecamp/ecamp3/pull/7193){.issuelink} [#7194](https://github.com/ecamp/ecamp3/pull/7194){.issuelink} [#7213](https://github.com/ecamp/ecamp3/pull/7213){.issuelink} [#7220](https://github.com/ecamp/ecamp3/pull/7220){.issuelink} [#7221](https://github.com/ecamp/ecamp3/pull/7221){.issuelink} [#7215](https://github.com/ecamp/ecamp3/pull/7215){.issuelink} [#7218](https://github.com/ecamp/ecamp3/pull/7218){.issuelink} [#7222](https://github.com/ecamp/ecamp3/pull/7222){.issuelink} [#7223](https://github.com/ecamp/ecamp3/pull/7223){.issuelink}
- Bugfix: Wenn in der Sidebar die Aktivität gewechselt wird, werden Ort und Status wieder korrekt angezeigt [#7048](https://github.com/ecamp/ecamp3/pull/7048){.issuelink}
- Verbesserte Datumseingabe bei der Durchführungszeit von Aktivitäten [#6997](https://github.com/ecamp/ecamp3/pull/6997){.issuelink}
- Die Titel der offenen eCamp v3 Tabs passen sich jetzt an, je nach dem welche Ansicht man offen hat [#7206](https://github.com/ecamp/ecamp3/pull/7206){.issuelink} [#7219](https://github.com/ecamp/ecamp3/pull/7219){.issuelink}
- Bei den Aktivitäts-Filtern im Dashboard und Grobprogramm werden neu die Anzahl Filter-Resultate bei jeder Option angezeigt [#7376](https://github.com/ecamp/ecamp3/pull/7376){.issuelink}
- Neu können alle mit der Rolle Administration das Lager löschen, statt nur die Person welche das Lager erstellt hat [#7407](https://github.com/ecamp/ecamp3/pull/7407){.issuelink}
- Bugfix: Wenn man auf das Grobprogramm navigiert wird nun standardmässig immer der nächste Lagerabschnitt der noch nicht vorbei ist geöffnet [#7427](https://github.com/ecamp/ecamp3/pull/7427){.issuelink}
- Bugfix: Beim Kopieren von Aktivitäten aus alten Lagern wird das Material neu korrekt angehängt. Wenn im neuen Lager keine passende Materialliste vorhanden ist, bleibt diese nach dem Kopieren unzugewiesen [#7080](https://github.com/ecamp/ecamp3/issues/7080){.issuelink}
- Bugfix: Emoji können mit Druck-Layout #2 wieder gedruckt werden [#7404](https://github.com/ecamp/ecamp3/pull/7404){.issuelink}
- Wird eine Einladung versendet und jemand erstellt nachträglich einen Account mit der eingeladenen Mailadresse, dann wird die Einladung dem neuen Account zugewiesen [#4953](https://github.com/ecamp/ecamp3/pull/4953){.issuelink}

Wir arbeiten weiterhin an Performance-Verbesserungen, dem langersehnten [Kommentar-Feature](https://github.com/ecamp/ecamp3/issues/828) und an Feedback, welches via [Kontaktformular](https://www.ecamp3.ch/de/kontakt/) an uns herangetragen wird.

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Zur App</a>
