---
title: January release
path: 2024-01-release
pubDate: 2024-01-09
description: Improved UI, layouts and copy activity
image: '~/assets/images/wintercamp.png'
---

Many camps have already been carried out in the last year, and over 200 camps have been created for 2024 in eCamp v3. Each week, more than 400 people register on eCamp v3. We are also pleased to have received so much valuable feedback.

In the meantime, several frequently requested features have been implemented. Here are some highlights:

<div class="simple-columns bg-slate-100 dark:bg-slate-800">

![Copy and paste activity](~/assets/images/paste-activity.webp)

<div>

## Copying of Blocks
You can now copy and paste activities, even across different camps. Simply copy the link to the activity and paste it into another camp. You can also forward the link to other people, but they must also have access to the camp for it to work.<br/>
[#3993](https://github.com/ecamp/ecamp3/pull/3993){.issuelink}

</div>
</div>
<div class="simple-columns">

![Responsive layout](/responsivelayout.webp)

<div>

## New default layout
There's a new standard layout for activities, **optimized for both printing and editing** on a computer.<br/>
To preview on large screens as it will appear when printed, you can limit the width of the activity editor to the width of paper. Newly created camps will use the new standard layout from now on.<br/>
[#4071](https://github.com/ecamp/ecamp3/pull/4071){.issuelink} [#4026](https://github.com/ecamp/ecamp3/pull/4026){.issuelink}

</div>
</div>
<div class="simple-columns bg-slate-100 dark:bg-slate-800">

![UI to format text](~/assets/images/formattierung.png)

<div>

## Formatting
It's now possible to **insert lists** in text fields [#4191](https://github.com/ecamp/ecamp3/pull/4191){.issuelink}

**Links in the activity content** are now displayed in the browser<br/> and can be opened with <kbd>Ctrl</kbd>, <kbd>Cmd</kbd>, or double-click [#4397](https://github.com/ecamp/ecamp3/pull/4397){.issuelink}

</div>
</div>
<div class="simple-columns">

![Dropdown to change the day in the sidebar](~/assets/images/day-overview-day-switching.webp)

<div>

## Further Improvements
### User Experience:
**Better explanations** for creating camps and editing categories<br> [#4162](https://github.com/ecamp/ecamp3/pull/4162){.issuelink} [#4362](https://github.com/ecamp/ecamp3/pull/4362){.issuelink} [#4213](https://github.com/ecamp/ecamp3/pull/4213){.issuelink}<br>
In the detailed view of an activity, it's now possible to **switch days in the sidebar**. [#4202](https://github.com/ecamp/ecamp3/pull/4202){.issuelink}

### Design:
**Improved layout** of categories and activities and a clearer LA theme area [#4303](https://github.com/ecamp/ecamp3/pull/4303){.issuelink} [#4264](https://github.com/ecamp/ecamp3/pull/4264){.issuelink}<br>
**Day Responsibles** are now also displayed on the camp's homepage. [#4029](https://github.com/ecamp/ecamp3/pull/4029){.issuelink}

### Printing:
A bug in the printed PDFs when exporting Picasso from a **foreign timezone** has been fixed  [#4329](https://github.com/ecamp/ecamp3/pull/4329){.issuelink}<br>
**Layout #1:** Picasso now has the requested page orientation in the PDF [#4347](https://github.com/ecamp/ecamp3/pull/4347){.issuelink} and is now correctly translated [#4003](https://github.com/ecamp/ecamp3/pull/4003){.issuelink}

</div>
</div>

## Community Contributions
We are happy to have received several contributions from the community.<br>
Thank you very much!

**Rumantsch has been added as a language:**<br>
Initial translations have been done by [@eruedin](https://github.com/eruedin) and Martin Cantieni [#4027](https://github.com/ecamp/ecamp3/pull/4027){.issuelink}

**Improved documentation:**<br> how to contribute has been updated by [@DeNic0la](https://github.com/DeNic0la) [#4204](https://github.com/ecamp/ecamp3/pull/4204){.issuelink}

**Unnecessary period material filter** was removed from the activity material by [@MarcoAllenspach](https://github.com/MarcoAllenspach) [#4366](https://github.com/ecamp/ecamp3/pull/4366){.issuelink}

We can't wait to welcome even more users and camps to our community!

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Go to App</a>