---
title: April release
path: 2024-04-release
pubDate: 2024-04-14
description: Accept invitations directly in the app, filters on the picasso, copy categories, and more
image: '~/assets/images/april-2024-release.png'
---

In the meantime, we have passed two milestones. We now have over 10,000 registered accounts and over 1000 camps this summer are planned using eCamp v3.
On the development side, barely three weeks have passed since the last update of eCamp v3, and already we bring you the next one. This time, the following features are included:


<div class="simple-columns bg-slate-100 dark:bg-slate-800">

![Accept invitations in the UI](~/assets/images/personal-invitations-en.png)

<div>

Invitations to camps can now also be accepted directly in eCamp v3, given the invitation was sent to the email address of your user account. [#4865](https://github.com/ecamp/ecamp3/issues/4865){.issuelink}

</div>

</div>

<div class="simple-columns">

<div>

Activities on the picasso can now be filtered by the same criteria as on the camp's home page. This can be useful to visualize the planning progress of all activities, or to visually check the amount of LS and LA on each day of a J+S camp. [#3886](https://github.com/ecamp/ecamp3/issues/3886){.issuelink}

</div>

![Filter activities on picasso](~/assets/images/picasso-filter-en.png)

</div>

<div class="simple-columns bg-slate-100 dark:bg-slate-800">

![Copy categories](~/assets/images/copy-category-en.png)

<div>

Categories can now also be copied and pasted, even across camps. It's even possible to copy an activity in one camp and paste it as a category into another camp. [#4823](https://github.com/ecamp/ecamp3/pull/4823){.issuelink}

</div>

</div>

## Further improvements

- The numbering of activities can now be disabled for specific categories. This may be useful for e.g. meal times which you never need to refer to using a distinct number. [#4597](https://github.com/ecamp/ecamp3/issues/4597){.issuelink}
- When creating new activities, the title field is no longer pre-filled with "New activity". This way, you are less encouraged to enter meaningless activity titles. However, when opening the dialog box, the contents of the title field are automatically selected, so you can start typing the activity title without an additional click. [#4826](https://github.com/ecamp/ecamp3/pull/4826){.issuelink}
- In print layout #1, the height of the picasso is now adjusted when there is a lot of information in the footer. [#4817](https://github.com/ecamp/ecamp3/pull/4817){.issuelink}
- Print layout #2 now uses month numbers instead of month names in the picasso, to use the available space more responsibly in autumn camps in September. [#4820](https://github.com/ecamp/ecamp3/pull/4820){.issuelink}
- Various performance improvements [#4935](https://github.com/ecamp/ecamp3/pull/4935){.issuelink} [#4934](https://github.com/ecamp/ecamp3/pull/4934){.issuelink} [#4946](https://github.com/ecamp/ecamp3/pull/4946){.issuelink} [#4943](https://github.com/ecamp/ecamp3/pull/4943){.issuelink} and bug fixes [#4821](https://github.com/ecamp/ecamp3/issues/4821){.issuelink} [#4948](https://github.com/ecamp/ecamp3/pull/4948){.issuelink} [#4939](https://github.com/ecamp/ecamp3/pull/4939){.issuelink} [#4947](https://github.com/ecamp/ecamp3/pull/4947){.issuelink}
- Various improved translations from the community were integrated. Thanks a lot to [@aszakacs](https://github.com/aszakacs){target=_blank} and all people who contributed translations on [https://translate.ecamp3.ch](https://translate.ecamp3.ch){target=_blank}! [#4869](https://github.com/ecamp/ecamp3/pull/4869){.issuelink} [#4837](https://github.com/ecamp/ecamp3/pull/4837){.issuelink}

In the coming days, we will start implementing the first course-specific features. We are looking forward to hopefully show you these features soon.

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Go to App</a>
