---
title: June-Release
path: 2025-06-release
pubDate: 2025-06-11
description: 20,000 accounts, print filters and performance improvements
image: "~/assets/images/20241103-_MMM4523.jpg" # TODO
---

We are proud to announce that over 20,000 accounts have now been created and activated on eCamp v3! Over Pentecost this year, hundreds of camps were held which were planned with eCamp v3, including some parts of [Jublasurium](https://www.jublasurium.ch/), the national Pentecost camp of Jubla. Thank you very much for your trust and your valuable feedback!

The greater rush and the larger amount of data on eCamp v3 was also noticeable behind the scenes. As a result, we spent most of the winter working on various performance improvements, which we continuously implemented without much notice. In spring, we were then able to implement a few new features.

<div class="simple-columns">

![TODO](~/assets/images/2024-11/checklist-create-de.webp)

<div>

The activity filters can now also be used when printing. You can now also filter by day. This allows you to put together your detailed program as you wish, for example with note pages between the individual days of the detailed program. [#7439](https://github.com/ecamp/ecamp3/pull/7439){.issuelink}
</div>
</div>

## Further improvements and bug fixes

- Various performance improvements have been implemented. [#6170](https://github.com/ecamp/ecamp3/pull/6170){.issuelink} [#6535](https://github.com/ecamp/ecamp3/pull/6535){.issuelink} [#6720](https://github.com/ecamp/ecamp3/pull/6720){.issuelink} [#6763](https://github.com/ecamp/ecamp3/pull/6763){.issuelink} [#6820](https://github.com/ecamp/ecamp3/pull/6820){.issuelink} [#6949](https://github.com/ecamp/ecamp3/pull/6949){.issuelink} [#6955](https://github.com/ecamp/ecamp3/pull/6955){.issuelink} [#6956](https://github.com/ecamp/ecamp3/pull/6956){.issuelink} [#7115](https://github.com/ecamp/ecamp3/pull/7115){.issuelink} [#7114](https://github.com/ecamp/ecamp3/pull/7114){.issuelink} [#7051](https://github.com/ecamp/ecamp3/pull/7051){.issuelink} [#7135](https://github.com/ecamp/ecamp3/pull/7135){.issuelink} [#7193](https://github.com/ecamp/ecamp3/pull/7193){.issuelink} [#7194](https://github.com/ecamp/ecamp3/pull/7194){.issuelink} [#7213](https://github.com/ecamp/ecamp3/pull/7213){.issuelink} [#7220](https://github.com/ecamp/ecamp3/pull/7220){.issuelink} [#7221](https://github.com/ecamp/ecamp3/pull/7221){.issuelink} [#7215](https://github.com/ecamp/ecamp3/pull/7215){.issuelink} [#7218](https://github.com/ecamp/ecamp3/pull/7218){.issuelink} [#7222](https://github.com/ecamp/ecamp3/pull/7222){.issuelink} [#7223](https://github.com/ecamp/ecamp3/pull/7223){.issuelink}
- Bugfix: If the activity is changed in the sidebar, the location and status are displayed correctly again [#7048](https://github.com/ecamp/ecamp3/pull/7048){.issuelink}
- Improved date input for the execution time of activities [#6997](https://github.com/ecamp/ecamp3/pull/6997){.issuelink}
- The titles of the open eCamp v3 tabs now adapt depending on which view you have open [#7206](https://github.com/ecamp/ecamp3/pull/7206){.issuelink} [#7219](https://github.com/ecamp/ecamp3/pull/7219){.issuelink}
- For the activity filters in the dashboard and picasso, the number of filter results is now displayed for each option [#7376](https://github.com/ecamp/ecamp3/pull/7376){.issuelink}
- Everyone with the Administration role can now delete the camp instead of just the person who created the camp [#7407](https://github.com/ecamp/ecamp3/pull/7407){.issuelink}
- Bugfix: When navigating to the rough program, the next camp period that is not yet over is now always opened by default [#7427](https://github.com/ecamp/ecamp3/pull/7427){.issuelink}
- Bugfix: When copying activities from old camps, the material is now correctly copied over. If there is no matching material list in the new camp, the material remains unassigned after copying [#7080](https://github.com/ecamp/ecamp3/issues/7080){.issuelink}
- Bugfix: Emoji can be printed again with print layout #2 [#7404](https://github.com/ecamp/ecamp3/pull/7404){.issuelink}
- If an invitation is sent and someone subsequently creates an account with the invited email address, the invitation will be assigned to the new account [#4953](https://github.com/ecamp/ecamp3/pull/4953){.issuelink}

We are still working on performance improvements, the long-awaited [commenting feature](https://github.com/ecamp/ecamp3/issues/828) and feedback that is sent to us via [contact form](https://www.ecamp3.ch/de/kontakt/).

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Go to app</a>
