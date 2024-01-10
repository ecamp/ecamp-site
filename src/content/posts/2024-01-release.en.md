---
title: January release
path: 2024-01-release
pubDate: 2024-01-09
description: Improved UI, layouts and copy activity
image: '~/assets/images/wintercamp.png'
---

Many camps were conducted last year, and over 200 camps for 2024 have already been created in eCamp v3. Every week, over 400 people register on eCamp v3. We are also pleased to receive so much valuable feedback.

In the meantime, several frequently requested features have been implemented. Here are some highlights:

- You can now copy and paste activities, even across camps. You can even send the copied link to someone else who also has access to the activity, and they can paste it into their new camps. [#3993](https://github.com/ecamp/ecamp3/pull/3993)
  ![Paste activity](~/assets/images/paste-activity.webp)
- In text fields, the formatting menu now allows to insert lists into the text [#4191](https://github.com/ecamp/ecamp3/pull/4191) ![UI to change formatting](~/assets/images/popup-list-ui.png)
- On the detail view of an activity, it is now possible to switch to a different day in the sidebar. [#4202](https://github.com/ecamp/ecamp3/pull/4202) ![Dropdown to change the day in the sidebar](~/assets/images/day-overview-day-switching.webp)
- There is a new default layout available for activities, optimized for both printing and editing on the computer. To preview it on large displays the way it will later be printed, you can limit the width of the activity editor to paper width. [#4071](https://github.com/ecamp/ecamp3/pull/4071) & [#4026](https://github.com/ecamp/ecamp3/pull/4026)
  ![Responsive layout](~/assets/images/responsive_layout.png)
- URLs in activity content are now rendered as links in the browser [#4397](https://github.com/ecamp/ecamp3/pull/4397)
- On the camp's start page, the day responsibles are now shown on each day. [#4029](https://github.com/ecamp/ecamp3/pull/4029)
- Improved UX and explanations for creating camps and editing categories [#4162](https://github.com/ecamp/ecamp3/pull/4162), [#4362](https://github.com/ecamp/ecamp3/pull/4362) & [#4213](https://github.com/ecamp/ecamp3/pull/4213)
- Improved design when editing the layout of categories and activities, and in especially for LA thematic area [#4303](https://github.com/ecamp/ecamp3/pull/4303) & [#4264](https://github.com/ecamp/ecamp3/pull/4264)
- Fixed a bug in the printed PDFs when exporting the picasso from a foreign timezone [#4329](https://github.com/ecamp/ecamp3/pull/4329)
- Print layout #1 no longer has a rotated picasso in the PDF [#4347](https://github.com/ecamp/ecamp3/pull/4347)

We also got contributions from the community again:
- Rumantsch was added as a language, with some initial translations by @eruedin [#4027](https://github.com/ecamp/ecamp3/pull/4027)
- The documentation on how to contribute was updated by @DeNic0la [#4204](https://github.com/ecamp/ecamp3/pull/4204)
- Period material filter removed from activity material @MarcoAllenspach [#4366](https://github.com/ecamp/ecamp3/pull/4366)

We can't wait to welcome even more users and camps to our community!

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Go to the App</a>
