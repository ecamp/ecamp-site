---
title: Fall Release
path: 2024-09-release
pubDate: 2024-09-27
description: Camp overview optimized and camp title simplified
image: '~/assets/images/fall-2024.png'
---
Fall is approaching. We have some improvements and new features for you. Here are some highlights:

<div class="simple-columns bg-slate-100 dark:bg-slate-800">

![Short Camp Name Generation](~/assets/images/campshorttitle-generation-en.webp)

<div>

The camp title has been simplified so that the short title is automatically generated but can still be adjusted if needed. Additionally, the title pages of the two print versions have been aligned. [#5351](https://github.com/ecamp/ecamp3/pull/5351){.issuelink}

</div>

</div>
<div class="simple-columns">

<div>

The time picker now also supports fuzzy time entries like on the [SBB.ch timetable](https://sbb.ch){target=_blank}, allowing for more flexible time input. [#5647](https://github.com/ecamp/ecamp3/pull/5647){.issuelink}

</div>

![Picker completing from 8 to 8:00, 2 to 02:00, 21 to 21:00 and 1234 to 12:34](~/assets/images/timepicker-better-parser-en.webp)

</div>

## Bugfixes and Minor Improvements

- The "Safety Concept" has been renamed to "Safety Considerations" to better align to the function. [#5669](https://github.com/ecamp/ecamp3/pull/5669){.issuelink}
- Safety considerations can now also be summarized, like the history entries. [#5732](https://github.com/ecamp/ecamp3/pull/5732){.issuelink}
- We ensure that the quantity is a positive material amount. [#5579](https://github.com/ecamp/ecamp3/pull/5579){.issuelink}
- Various minor bug fixes [#5746](https://github.com/ecamp/ecamp3/pull/5746){.issuelink} [#5747](https://github.com/ecamp/ecamp3/pull/5747){.issuelink} [#5793](https://github.com/ecamp/ecamp3/pull/5793){.issuelink} [#6012](https://github.com/ecamp/ecamp3/pull/6012){.issuelink}

We are currently working on the course features and, of course, continuously on bug fixes that are reported to us via the [contact form](https://www.ecamp3.ch/en/contact/).

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">To the App</a>
