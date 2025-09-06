---
title: September-Release
path: 2025-09-release
pubDate: 2025-09-06
description: PDF improvements, searchable checklist templates, material overview and many bug fixes
image: "~/assets/images/2025-juni-release.png"
---

Over the summer we shipped many improvements and new features — with a strong focus on better PDFs, more useful checklists, and improved material overviews. We also delivered performance, security, and stability updates.

## Highlights

- PDF: Page numbers are now supported. [#8003](https://github.com/ecamp/ecamp3/pull/8003){.issuelink}
- PDF: Clearer, consistent file names. [#7996](https://github.com/ecamp/ecamp3/pull/7996){.issuelink}
- PDF: Correct rendering of combined and number emojis (e.g. 🧙‍♂️, 1️⃣). [#7998](https://github.com/ecamp/ecamp3/pull/7998){.issuelink} [#8069](https://github.com/ecamp/ecamp3/pull/8069){.issuelink}
- Material: New overview for orphan (unassigned) material items. [#8053](https://github.com/ecamp/ecamp3/pull/8053){.issuelink}
- Checklists: Templates are now searchable. [#8066](https://github.com/ecamp/ecamp3/pull/8066){.issuelink}
- Collaboration: Edit abbreviation and color; You can leave the camp now by yourself. [#7697](https://github.com/ecamp/ecamp3/pull/7697){.issuelink}
- Copy camps: Copy camps you have access to. [#7528](https://github.com/ecamp/ecamp3/pull/7528){.issuelink}

## Further improvements and bug fixes

- Past camps: Reverse time ordering (newest first). [#7952](https://github.com/ecamp/ecamp3/pull/7952){.issuelink}
- Activities: Reload schedule entries when changing the numbering style. [#8001](https://github.com/ecamp/ecamp3/pull/8001){.issuelink}
- PDF/Print: Prevent empty pages at the beginning/end. [#8027](https://github.com/ecamp/ecamp3/pull/8027){.issuelink}
- XLS export: Trim overly long sheet names. [#7901](https://github.com/ecamp/ecamp3/pull/7901){.issuelink}
- Dates/times: More robust locale handling (dayjs). [#7948](https://github.com/ecamp/ecamp3/pull/7948){.issuelink}
- Performance: Fewer DB queries for activities/categories and faster material list loading. [#7764](https://github.com/ecamp/ecamp3/pull/7764){.issuelink} [#7657](https://github.com/ecamp/ecamp3/pull/7657){.issuelink}
- Security: Guests can no longer elevate their role to member/manager. [#7740](https://github.com/ecamp/ecamp3/pull/7740){.issuelink}
- Many new translations. [#6921](https://github.com/ecamp/ecamp3/pull/6921){.issuelink} [#7826](https://github.com/ecamp/ecamp3/pull/7826){.issuelink}

We’ll continue to work on quality, performance, and improvements that help you plan your camps. Thanks for all your feedback!

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Go to app</a>
