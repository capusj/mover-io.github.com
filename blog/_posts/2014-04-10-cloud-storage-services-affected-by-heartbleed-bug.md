---
layout: blog-page
title: Cloud Storage Services Affected by Heartbleed Bug
date: 2014-04-10
author: Mack Male
---

## Cloud Storage Services Affected by Heartbleed Bug

You've probably been hearing a lot over the last couple of days about [the Heartbleed bug][1]. Mover was affected by the issue, and took immediate action to patch our systems. We recommend that you login and change your password. It's good practice to change your password regularly!

<img src="{{ site.url }}/img/blog/2014-04-10_heartbleed.png" class="pull-right p-l-md">

If you'd like a really straightforward, accessible explanation, [check out this Vox.com article][3]. Here's the description from the Heartbleed site:

> "The Heartbleed Bug is a serious vulnerability in the popular OpenSSL cryptographic software library. This weakness allows stealing the information protected, under normal conditions, by the SSL/TLS encryption used to secure the Internet. SSL/TLS provides communication security and privacy over the Internet for applications such as web, email, instant messaging (IM) and some virtual private networks (VPNs)."
>
> "The Heartbleed bug allows anyone on the Internet to read the memory of the systems protected by the vulnerable versions of the OpenSSL software. This compromises the secret keys used to identify the service providers and to encrypt the traffic, the names and passwords of the users and the actual content. This allows attackers to eavesdrop on communications, steal data directly from the services and users and to impersonate services and users."

Well-known security researcher [Bruce Schneier said][4], "on a scale of 1 to 10, this is an 11."

Unfortunately, this issue affects a large percentage of the Internet. What about the cloud storage services you might be using?

### Affected & Patched

These services were affected at some time and have since patched their systems:

### Unaffected

These services were not affected:

### Unclear

These services don't appear to be affected currently, but may have been vulnerable in the past:

* Copy
* GreenQloud
* Yandex

Here's [a list of the top 1000 websites][5] that shows whether they were affected as of April 8. If you'd like to test a website, [you can use this tool][6].

For more on the Heartbleed bug, follow the [#heartbleed][7] hashtag on Twitter.

[1]: http://heartbleed.com/
[2]: {{ site.url }}/img/blog/2014-04-10_heartbleed.png
[3]: http://www.vox.com/2014/4/8/5593654/heartbleed-explainer-big-new-web-security-flaw-compromise-privacy
[4]: https://www.schneier.com/blog/archives/2014/04/heartbleed.html
[5]: https://github.com/musalbas/heartbleed-masstest/blob/master/top1000.txt
[6]: http://filippo.io/Heartbleed/
[7]: https://twitter.com/search?src=typd&q=%23heartbleed
