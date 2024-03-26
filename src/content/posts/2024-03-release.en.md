---
title: Spring cleaning release
path: 2024-03-release
pubDate: 2024-03-26
description: Activation email, help links, stored preferences and bugfixes
image: '~/assets/images/osterwald.png'
---

The number of user accounts and upcoming camps is growing more and more. In the last two and a half months, the number of camps on eCamp v3 has quadrupled.

In the meantime, we have implemented various small features and bug fixes. The following improvements are now available on eCamp v3:

<div class="simple-columns">

![Account activation](~/assets/images/activate-login.png)

If you have not received an activation email, you can now also activate your account via a [password reset](https://app.ecamp3.ch/reset-password), or by logging in with MiData, jubla.db, CeviDB, or Google. [#4670](https://github.com/ecamp/ecamp3/issues/4670){.issuelink}

</div>

- There are now links directly in the app to our FAQ help page and to the most recent blog posts, where we describe what's changed at eCamp v3 recently. [#4618](https://github.com/ecamp/ecamp3/pull/4618){.issuelink}
- The last used print settings, the lock status of Picasso and story overview, and the setting for wide displays are now saved. This way you don't have to set these settings up over and over again. [#4559](https://github.com/ecamp/ecamp3/pull/4559){.issuelink}
- In single-line text fields, auto-saving will no longer cut away a trailing space when you stop and think about what to type next. [#3875](https://github.com/ecamp/ecamp3/issues/3875){.issuelink} [#4712](https://github.com/ecamp/ecamp3/issues/4712){.issuelink}
- Camps now aren't moved to the past camps until the day after the last day of the camp. Previously, they would move there already on the last day of the camp. [#4711](https://github.com/ecamp/ecamp3/issues/4711){.issuelink}
- The planning progress of an activity can now be removed from an activity. [#4535](https://github.com/ecamp/ecamp3/issues/4535){.issuelink}
- Titles of activity content blocks can now also be edited in layout mode. [#4560](https://github.com/ecamp/ecamp3/pull/4560){.issuelink}
- Performance improvements and better stability for many concurrent users.

We continue to work on many small improvements, and we are always happy to get your feedback. While doing this, we are currently discussing which features make the most sense to implement for courses.

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">To the app</a>
