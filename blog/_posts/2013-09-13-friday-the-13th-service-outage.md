---
layout: blog-page
title: Friday the 13th Service Outage
date: 2013-09-13
author: Eric Warnke
---

## Friday the 13th Service Outage

This morning we experienced an outage of both our customer facing applications as well as our backend servers which run our users transfers. This outage lasted for approximately 3 hours from ~7:00 am PST to 10:00 am Friday, September 13th 2013.

The outage was caused by one of our critical pieces of infrastructure (our [NAT][1] server) becoming unreachable. We believe this issue was most likely caused by issues [Amazon experienced][2] with their AWS EC2 hosting platform which we use to run our servers. Related problems in our infrastructure management tools delayed our recovery efforts, preventing us from executing our recovery plan as quickly as we would like.

A number of jobs that were running at the time experienced crashes. Automated e-mails will have already notified these users, and we are reaching out to them individually to communicate how we are recovering their transfers.

All schedules that were scheduled to run during the outage period were placed into our queue system, and were run when our services came back online at 10:00 am PST.

If you experienced any form of impact from this outage and haven't received a communication from us, please don't hesitate to contact us at [support@mover.io][3]. If you have any other questions or feedback, please don't hesitate to reach out to us.

We take any outages to our services very seriously, particularly when they impact our users transfers. We are investigating the root causes of the issue, and will be taking appropriate measures to protect our systems against similar outages in the future.

[1]: http://en.wikipedia.org/wiki/Network_address_translation "Wikipedia Network Address Translator"
[2]: http://status.aws.amazon.com/rss/ec2-us-east-1.rss "AWS EC2 Outage Feed"
[3]: mailto:support@mover.io?Subject=Outage%20inquiry
