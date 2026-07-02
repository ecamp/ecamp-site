---
title: July Release
path: 2026-07-release
pubDate: 2026-07-02
description: A3 printing, day overview for printing, and UI improvements
image: '~/assets/images/2026-07-july-release.png'
---

The July release brings several exciting improvements for printing, as well as a series of bugfixes and performance enhancements to make planning your camps even smoother.

## Last chance to download your pdfs from the old eCamp v2
The old eCamp v2 has aged so much that it will soon be turned off. Starting in September 2026, no data can be changed anymore. In spring 2027, eCamp v2 will be sunset completely. If you still have data you want to keep on the old eCamp v2, please make sure to download pdfs of your old camps soon.

## Better Printing: A3 Support & Day Overview
We've significantly improved the printing capabilities. eCamp now supports **A3 printing**, giving you more space and flexibility when generating PDFs for your camp programs. 

Additionally, we added a **day overview to print**, so you can get a concise look at your daily schedules directly on paper. 
We've also fixed an issue where bullets or numbers were sometimes lost in the generated PDF if a list item started with a line break. [#9939](https://github.com/ecamp/ecamp3/pull/9939){.issuelink} [#10000](https://github.com/ecamp/ecamp3/pull/10000){.issuelink} [#10045](https://github.com/ecamp/ecamp3/pull/10045){.issuelink}

## Usability & UI Tweaks
- A **show/hide password toggle** has been added to all password inputs, making it easier to verify your credentials. [#10196](https://github.com/ecamp/ecamp3/pull/10196){.issuelink}
- The **"My Activities" filter label** now adapts based on the active filters, providing a clearer overview of what you're currently looking at. [#10035](https://github.com/ecamp/ecamp3/pull/10035){.issuelink}
- The **nickname field** has been re-added to the registration form. [#10113](https://github.com/ecamp/ecamp3/pull/10113){.issuelink}
- Added a browser update notice for outdated browsers that lack support for modern web features. [#9975](https://github.com/ecamp/ecamp3/pull/9975){.issuelink}

## Performance and Bug fixes
- We significantly **improved the performance of checklist items**, leading to a snappier experience. [#9849](https://github.com/ecamp/ecamp3/pull/9849){.issuelink}
- Fixed the loading state for the material table so the UI is more consistent when fetching data. [#9999](https://github.com/ecamp/ecamp3/pull/9999){.issuelink}
- Resolved a caching issue where stale `index.html` files were served after a deployment, preventing old code from lingering in the browser. [#10088](https://github.com/ecamp/ecamp3/pull/10088){.issuelink}
- Fixed navigation issues where the periods list and schedule entries wouldn't correctly reload when navigating between views. [#10051](https://github.com/ecamp/ecamp3/pull/10051){.issuelink} [#10052](https://github.com/ecamp/ecamp3/pull/10052){.issuelink} [#10053](https://github.com/ecamp/ecamp3/pull/10053){.issuelink}
- Made sure personal invitations properly reload after being accepted or rejected. [#10036](https://github.com/ecamp/ecamp3/pull/10036){.issuelink}

We're continuing to work on the [comment feature](https://github.com/ecamp/ecamp3/issues/828), further performance improvements, and bug fixes reported to us via the [contact form](https://www.ecamp3.ch/en/contact/).

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Go to app</a>
