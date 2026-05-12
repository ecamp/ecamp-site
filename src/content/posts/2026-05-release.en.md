---
title: May Release
path: 2026-05-release
pubDate: 2026-05-12
description: Material table checkbox, performance improvements, and more
image: "~/assets/images/2026-05-materiallist.png"
---

The May release brings a set of improvements that make eCamp feel faster and more reliable.
Alongside the performance work, there are also a few small but very practical interface improvements.

## Tick off material list items
Material list items can now be checked off directly in the table.
This is especially useful when you are packing, shopping, checking, or returning material step by step. [#9697](https://github.com/ecamp/ecamp3/pull/9697){.issuelink}

## Faster filters, print views, and program pages
We reworked loading and filtering in the dashboard, program, and print views.
Pages can now render earlier, filter states stay more consistent, and print previews are only loaded once they are actually needed.

This also removes a few awkward loading states, stabilizes result counts, and fixes a possible crash caused by invalid labels. [#9690](https://github.com/ecamp/ecamp3/pull/9690){.issuelink}

The app bundle was optimized as well: better tree-shaking means less unused code is shipped to the browser. [#9734](https://github.com/ecamp/ecamp3/pull/9734){.issuelink}

## Better display for camps with many periods
The camp list is now easier to read when a camp has many periods.
The view takes up less space and is more comfortable to scan. [#9634](https://github.com/ecamp/ecamp3/pull/9634){.issuelink}

The toolbar in the program view was also adjusted as part of the ongoing UI migration. [#9733](https://github.com/ecamp/ecamp3/pull/9733){.issuelink}

## More caching
Additional API responses are now cached, including individual activities and the days of a camp period.
This means eCamp has to reload less data and responds faster in many situations.
The cache lifetime was also increased to 12 hours. [#9678](https://github.com/ecamp/ecamp3/pull/9678){.issuelink} [#9679](https://github.com/ecamp/ecamp3/pull/9679){.issuelink} [#9680](https://github.com/ecamp/ecamp3/pull/9680){.issuelink}

## Bug fixes
- When editing camp collaborators, roles can be changed again even if the invited person has not accepted the invitation yet. [#9726](https://github.com/ecamp/ecamp3/pull/9726){.issuelink}
- Empty fields are handled correctly again in our custom validators and are no longer accidentally treated as required. [#9669](https://github.com/ecamp/ecamp3/pull/9669){.issuelink}
- A performance issue was fixed when saving checklist items, avoiding unnecessary database queries for larger lists. [#9632](https://github.com/ecamp/ecamp3/pull/9632){.issuelink}
- A typo in the material list route was fixed and covered with additional tests. [#9633](https://github.com/ecamp/ecamp3/pull/9633){.issuelink}

## Technical updates
Under the hood, dependencies were updated, the test structure was improved, and parts of the API Platform setup were synchronized with upstream.
This helps us keep eCamp up to date and makes future changes easier to verify. [#9642](https://github.com/ecamp/ecamp3/pull/9642){.issuelink} [#9674](https://github.com/ecamp/ecamp3/pull/9674){.issuelink} [#9675](https://github.com/ecamp/ecamp3/pull/9675){.issuelink}

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Go to app</a>
