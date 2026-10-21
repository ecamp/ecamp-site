---
title: September Release
path: 2026-09-release
pubDate: 2026-09-22
description: Stronger password security, and interface improvements
image: "~/assets/images/2026-09-release.png"
---

We have strengthened account security and polished navigation, forms, and several everyday workflows.

## Stronger password security

- Changing your password now requires your **current password**, adding an extra layer of protection to your account. [#10214](https://github.com/ecamp/ecamp3/pull/10214){.issuelink}
- Newly chosen passwords are checked against a local list of commonly compromised passwords. The check happens securely within eCamp and does not send your password to an external service. [#10197](https://github.com/ecamp/ecamp3/pull/10197){.issuelink}

## Smoother navigation and editing

- The back button now returns to the overview you came from, even after switching between activities in the sidebar. Toolbars, action buttons, editable titles, and long period names have also been refined. Pressing Escape now cancels title editing. [#10650](https://github.com/ecamp/ecamp3/pull/10650){.issuelink}
- Retry, cancel, and reload buttons inside selection fields no longer open the dropdown at the same time. [#10736](https://github.com/ecamp/ecamp3/pull/10736){.issuelink}
- Dialog buttons now use consistent translations. [#10383](https://github.com/ecamp/ecamp3/pull/10383){.issuelink}

## Bug fixes and reliability

- Guests now see camp checklists as read-only and can no longer rename lists, reorder entries, or edit their contents. [#10722](https://github.com/ecamp/ecamp3/pull/10722){.issuelink}
- Material checkboxes are disabled when an item is not assigned to a material list. [#10548](https://github.com/ecamp/ecamp3/pull/10548){.issuelink}
- Pasting a camp URL while creating a camp works again in Firefox. [#10519](https://github.com/ecamp/ecamp3/pull/10519){.issuelink}
- PDF generation with long emoji content works reliably in Firefox again. [#10525](https://github.com/ecamp/ecamp3/pull/10525){.issuelink} [#10739](https://github.com/ecamp/ecamp3/pull/10739){.issuelink}
- Under the hood, API access to shared-camp data has been tightened and additional automated tests improve the reliability of navigation, login, and filters. [#10773](https://github.com/ecamp/ecamp3/pull/10773){.issuelink} [#10819](https://github.com/ecamp/ecamp3/pull/10819){.issuelink}

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Go to app</a>
