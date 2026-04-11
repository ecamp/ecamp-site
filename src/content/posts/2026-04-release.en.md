---
title: April Release
path: 2026-04-release
pubDate: 2025-04-11
description: Technical upgrade and minor new features
image: "~/assets/images/2026-april-release.jpg"
---

Spring courses and camp season will be starting soon.

Since last fall, we’ve been working on a major technical upgrade, which was necessary to keep eCamp v3 up to date.
In the process, we had to redesign virtually every screen in the app, and were only able to add a few minor features along the way.
Now we’re finally at the point where all the essential features of eCamp v3 are working again.
Nevertheless, it’s likely that we’ve overlooked a few bugs, and our [collection](https://github.com/ecamp/ecamp3/issues/8271#issuecomment-3954684938){target=_blank} of minor visual glitches is still quite long.
We would therefore greatly appreciate your feedback via the [contact form](https://www.ecamp3.ch/en/contakt/) if you notice anything.

## Improvements to PDFs
When printing PDFs, you can now adjust the font size and spacing for A6 printing in the settings at the bottom [#4650](https://github.com/ecamp/ecamp3/issues/4650){.issuelink}

On the picasso, activity categories from the legend that are not used in the entire period are now hidden. Thanks [@NelsStorch](https://github.com/NelsStorch){target=_blank}! [#8277](https://github.com/ecamp/ecamp3/pull/8277){.issuelink}

Print Layout #2 now supports printing more modern emojis [#8930](https://github.com/ecamp/ecamp3/pull/8930){.issuelink}

Bug fix: When viewing a public camp in which you are not otherwise involved, printing the picasso using print layout #2 is possible again [#8267](https://github.com/ecamp/ecamp3/issues/8267){.issuelink}

## Improvements to Emails Sent
Translations throughout the app have been updated based on [community feedback](https://translate.ecamp3.ch){target=_blank}, and several of the emails sent are now also available in French and Italian. [#8269](https://github.com/ecamp/ecamp3/pull/8269){.issuelink} [#8543](https://github.com/ecamp/ecamp3/pull/8543){.issuelink} [#8753](https://github.com/ecamp/ecamp3/pull/8753){.issuelink} [#8883](https://github.com/ecamp/ecamp3/pull/8883){.issuelink} [#9117](https://github.com/ecamp/ecamp3/issues/9117){.issuelink}

In camp invitation emails, the "Reply-To" address will now be set to the email address of the person who sent the invitation. This allows invitees to contact camp management directly if they need help joining. [#8493](https://github.com/ecamp/ecamp3/issues/8493){.issuelink}

## Additional fixes and improvements
- On the camp list, the "old camps" list now expands automatically if no future camps are found. Thanks again [@NelsStorch](https://github.com/NelsStorch){target=_blank}! [#8276](https://github.com/ecamp/ecamp3/issues/8276){.issuelink}
- On the registration page, the appropriate language is now preselected in more cases [#9387](https://github.com/ecamp/ecamp3/issues/9387){.issuelink}
- When copying course activities with checklist items from an old course to a new one, the corresponding checklist items from the new course are now selected again whenever possible [#8925](https://github.com/ecamp/ecamp3/issues/8925){.issuelink}
- Bug fix: When a checklist is created using a template, the order of the checklist items is now correctly preserved [#9007](https://github.com/ecamp/ecamp3/pull/9007){.issuelink}

Now we can finally get back to the [comment feature](https://github.com/ecamp/ecamp3/issues/828), and we will continue to address any remaining issues from the recent upgrade as they are reported to us via the [contact form](https://www.ecamp3.ch/en/contakt/).

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Go to app</a>
