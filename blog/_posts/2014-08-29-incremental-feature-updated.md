---
layout: blog-page
title: Incremental Feature Updated
date: 2014-08-29
author: Jon Capus
---

## We've Updated Our Incremental Feature

At Mover, we're always looking forward.

That's why we've recently made changes to our _Incremental Feature_! It now operates as a differential transfer; checking the destination directory and comparing it to the source directory and moving what's different – while mostly applying to _Scheduled Transfers_, this is also the way our _Resume_ & _Rerun_ functions now work within our app.

## How it used to work

Let's look at how the feature used to work:

![Old Incremental Method][1]

Our app would use the log file from the previous transfer to determine what had already been moved from the source. Because the log file would have record of this, files in the destination could be moved or deleted from their directory at your discretion.

## How it works now

This is how it works now:

![New Incremental Method][2]

Our app now monitors, during the transfer, the destination and determines what files are in the source that aren't in the destination and moves them over (this includes both new and changed files).

The consequence of this change is that if you delete or move something from the destination, our app will end up replacing it from the source.

## Why we did this

Overall, these changes will make our schedules more reliable and improve our higher level functionality in the future!

Tell us what you think of this change – and don't forget to follow us on [Twitter][3], [LinkedIn][4], [Facebook][5], and [Google+][6]!

[1]: {{ site.url }}/img/blog/2014-08-29_old.png
[2]: {{ site.url }}/img/blog/2014-08-29_new.png
[3]: https://twitter.com/Mover_io
[4]: http://www.linkedin.com/company/mover
[5]: https://www.facebook.com/Mover.io
[6]: http://bit.ly/MoverGooglePlus
