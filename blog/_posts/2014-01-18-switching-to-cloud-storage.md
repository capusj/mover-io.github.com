---
layout: blog-page
title: Switching to Cloud Storage
date: 2014-01-18
author: Eric Warnke
---

## Switching to Cloud Storage - Mover Blog

![][1]

It's the nightmare of any IT professional when the powers-that-be come knocking and announce that they've purchased the latest and greatest thing. And it's your job to migrate everyone. The entire organization's productivity is in your hands and downtime is a huge no-no. There are several categories of migration nightmare: company email, the sales CRM, and company files. The advent of cloud storage has made things amazing, but only once you've managed to cross the chasm.

Don't despair, you have options!

### 1. Just let it sync

Migrating every file your company has isn't that bad. If you're a small organization of 2-10 people you can easily teach everyone how simple it is to install the latest sync client for Dropbox, Box, Google Drive, Egnyte, or whoever you're working with. Dragging and dropping files is a totally legit solution when you're a small company.

##### Pros

You can set this up quickly. There aren't that many people so you can literally just go talk to everyone, or even work after hours and install the client on their desktop and drag their files to sync.

It's cheap. Only costs you some time, no big deal.

##### Cons

It can end up being a bunch of work. If you have a ton of data it might take a very long time for the sync clients to do their thing. If you have many users this isn't practical. Do you really want to educate another 50, 500, or 5000 employees on the new "thing" that IT is making them learn?

### 2. Seed a master account yourself

Sometimes you just need to get a ton of data into your new storage provider and then you'll figure it out from there. Sounds easy, which it can be. Many providers like Egnyte and Box offer classic protocols like FTP. With these you could set up a transfer from something like the office NAS, and just let it run. If you're really up for a challenge you might even break out the ol' IDE and write some code by hooking up with a cloud storage API or two.

##### Pros

Doesn't bother any other employees until you're ready to teach them about their new storage. You can babysit the transfer.

If you're familiar with old school technologies like WebDAV, FTP, SFTP, or you like writing code, this isn't that bad.

##### Cons

You have to babysit the transfer. FTP is a well defined but ancient protocol and doesn't generally offer the ability to do many files at once. If something goes wrong you'll be fighting to resume the transfer from where it left off. Coding something yourself is even worse than FTP. You'll be dealing with file naming errors and exceptions until you're pulling out your hair.

(Edit from PR: Mover loves its cloud storage partners!)

### 3. Third-party downloaded software

You're already the smartest one in the office because you know the best tools of the trade. There's a bunch of different software options to help you with a data migration. Any they're pretty effective if you have a small number of users or data.

##### Pros

You're in command. Just you, you're three massive monitors, and a bag of cheetos. Install, connect everyone's accounts, and watch the files move.

##### Cons

Until your computer crashes, or the next business day rolls around and everyone is wondering why the internet is so slow because you're hogging all the bandwidth, or you're only able to move a few files at a time, or you hit API restrictions with your provider. Really any possible problem that keeps you and your awesome desktop the bottleneck for the entire migration is a bad problem to have.

### 4\. Managed solution (recommended, of course!)

If you made it this far, you know what's coming next. Why are things so hard? Cloud migrations should be simple! You're moving to greener pastures, it shouldn't be a massive headache to map all your user data into this awesome new system. Good news: there is a way. Hosted migration tools, like Mover, take care of all the above mentioned problems. Most of them offer some sort of freemium model where you can test a small amount of data, or move a few users, but they come packed with the computing power of "the cloud" to deftly handle any nightmare scenario.

##### Pros

Managed solutions are hosted and run by professionals. They use their own server infrastructure, which is far greater than the tools you have available. They take care of your files for you. Capabilities such as moving files faster, resuming failures, scheduling, incremental passes, detailed logging, and expert knowledge of this space make a managed solution a no-brainer.

##### Cons

If you're moving into the cloud for the first time you'll still be at the mercy of your internet connection, but a manged solution can alleviate the strain with scheduling migrations for off hours.

As you can see, you have many options. You might need to experiment a bit before you settle on the right option. Of course, here at Mover, where we provide managed solutions, we're a bit biased. If you ever want our opinion, or some friendly advice, don't hesitate to call or email us.

If you liked this post then don't forget to check us out on [Facebook][2], [LinkedIn][3], [Google+][4], and [Twitter][5].

[1]: {{ site.url }}/img/blog/2014-01-18_header.jpg
[2]: https://facebook.com/Mover.io
[3]: http://linkedin.com/company/mover
[4]: https://plus.google.com/+MoverIoUpdates/
[5]: https://twitter.com/Mover_io
