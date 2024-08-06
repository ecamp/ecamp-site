---
title: August release
path: 2024-08-release
pubDate: 2024-08-06
description: Avatars and first course-specific features
image: '~/assets/images/sola24.jpg'
---

The big wave of summer camps this year is over! On the record day, July 13, over 700 camps were running simultaneously, which were planned on eCamp v3. Thank you for your trust and we always appreciate your feedback. Behind the scenes we have been working on some features and bug fixes.

<div class="simple-columns bg-slate-100 dark:bg-slate-800">

![Adjust colors and initials for collaborators](~/assets/images/camp-collaboration-color-en.png)

<div>

You can now customize the color and initials of the people who collaborate in the camp. Two letters or one emoji are possible. [#5281](https://github.com/ecamp/ecamp3/pull/5281){.issuelink}

</div>

</div>

<div class="simple-columns">

<div>

As a first simple step towards [course features](https://github.com/ecamp/ecamp3/issues/4936), there are now specific text fields for learning goals and learning topics that can be incorporated into activities. It is planned that in the future it will be possible to export the contents of these text fields, together with other information, as course summary. [#4990](https://github.com/ecamp/ecamp3/pull/4990){.issuelink}

</div>

![Learning goals and learning topics](~/assets/images/learning-objectives-learning-topics-en.png)

</div>

<div class="simple-columns bg-slate-100 dark:bg-slate-800">

![Offline message](~/assets/images/offline-message-en.png)

<div>

If you are offline, this is now indicated at the bottom of the page. [#5026](https://github.com/ecamp/ecamp3/pull/5026){.issuelink}

</div>

</div>

## Bugfixes and small improvements

- The most common bug when adding material with quantity has been fixed. [#5017](https://github.com/ecamp/ecamp3/pull/5017){.issuelink}
- If you insert a long SBB/CFF/FFS link into the program, the user interface no longer breaks. [#5446](https://github.com/ecamp/ecamp3/issues/5446){.issuelink}
- When logging in via MiData, Cevi.DB, JublaDB or Google, you now have 15 instead of just 5 minutes to log in (if you need to reset your password there, for example). [#5382](https://github.com/ecamp/ecamp3/pull/5382){.issuelink}
- When adding several execution times to an activity, more sensible times are now suggested if possible (same time of day on the next day). [#5131](https://github.com/ecamp/ecamp3/pull/5131){.issuelink}
- If you click on the title of an activity in the detailed view and then press ENTER, an error no longer occurs. [#4610](https://github.com/ecamp/ecamp3/pull/4610){.issuelink}
- On the camp start page, you can now click on the name of a camp section to go to the picasso. [#5064](https://github.com/ecamp/ecamp3/issues/5064){.issuelink}
- Errors that occur in print layout #1 are now reliably reported to the eCamp Core Team again. [#5278](https://github.com/ecamp/ecamp3/pull/5278){.issuelink}
- On sufficiently large screens, the input fields for zip code and city are displayed on one line. [#5458](https://github.com/ecamp/ecamp3/pull/5458){.issuelink}
- The rough program uses the full available height again after removing the footer on the desktop. [#5112](https://github.com/ecamp/ecamp3/pull/5112){.issuelink}
- The same Y+S logo is now used in both print layouts. [#5288](https://github.com/ecamp/ecamp3/pull/5288){.issuelink}
- The cursor when pointing to links in the program has been improved. [#5285](https://github.com/ecamp/ecamp3/pull/5285){.issuelink}

## Improvements from the community
- Incorrect line breaks have been removed in some of the German LA thematic areas. Merci [@bb1950328](https://github.com/bb1950328)! [#5167](https://github.com/ecamp/ecamp3/pull/5167){.issuelink}
- An improvement for stability against internal API changes in eCamp v3 has been implemented. Merci also for that [@bb1950328](https://github.com/bb1950328)! [#5168](https://github.com/ecamp/ecamp3/pull/5168){.issuelink}
- The note that at least someone with administration rights must remain in the camp is now only displayed if it is relevant. Merci [@MarcoAllenspach](https://github.com/MarcoAllenspach)! [#4405](https://github.com/ecamp/ecamp3/pull/4405){.issuelink}

We are currently working on the course features and performance improvements - and of course we are constantly working on bug fixes that are sent to us via [contact form](https://www.ecamp3.ch/de/kontakt/).

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Zur App</a>
