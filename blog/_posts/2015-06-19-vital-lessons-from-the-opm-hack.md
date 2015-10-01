---
layout: blog-page
title: Vital Lessons from the OPM Hack
date: 2015-06-19
author: Jon Capus
---

## Vital Lessons From The OPM Hack

![OPM Hack][1]

The Office of Personnel Management (OPM), responsible for keeping the records of civilian federal employees in the US, was hacked in April – but this was only recently revealed by the US government.

The whole thing was said to be simply due to social engineering and bad credential management with contractors – [most of which can be combated by education and training][2].

[You can read more about the hack here.][3]

We thought it would be beneficial to briefly go over some vital lessons from the OPM hack, as they apply to many legacy enterprise file systems.

### Auditing and Access Controls

Once the hackers were in the door (which was apparently a fairly easy process), they were free to run amok. Even worse, though, is that the OPM had a [lack of auditing and data management software to understand the scope of the security failure][4]. Additionally, stealing files and sensitive data was easy considering even the lack of basic file encryption.

Modern cloud solutions like [Box][5] employ numerous encryption techniques, are compliant to a number of government policies, and have expansive [audit capabilities for IT security administrators][6]. This includes detailed logs of where access is coming from and exactly who's doing what once they're in the system.

### Legacy Systems Are, Well… Old

They're also becoming more expensive. Finding people with expertise in legacy systems coded with older languages requires a great deal of financial incentive, as most of the people fluent in those methods are retiring.

[OPM was using COBOL][7] for most of their systems, which is a coding language that has [been around since 1959][8] and isn't getting more popular. For some perspective, here are the job prospects for people fluent in COBOL versus other languages:

![COBOL Job Prospects][9]

Photo credit: [Indeed.com][10]

Newer solutions, whether cloud hosted by third-parties or created by your IT team, have a plethora of resources online for adding extra security, like encryption libraries or open source projects like [OWASP][11], dedicated to providing more hardened security tools.

### Look To The Cloud

Perhaps it's time for a modern change? Cloud software is hardened against attacks, and offers much less strain on IT Security teams than home-baked legacy systems running antiquated code. Many solutions offer multi-factor authentication in case some user credentials are compromised, and offer web and mobile ready tools for keeping up with trends.

With [Box securing files for the US Department of Justice][12] and [Amazon's introduction of GovCloud][13], it's becoming apparent that the cloud is the best option for enterprise file-sharing, collaboration, and large volume data storage – because even the government is doing it.

You should never take information security lightly – **migrate off your legacy systems and into something more secure and cost effective today with Mover**.

Follow us on our [Twitter][14], [LinkedIn][15], [Facebook][16], and [Google+][17] pages for more cloud related news & opinions!

[1]: {{ site.url }}/img/blog/2015-06-19_blog-security.png
[2]: http://www.esecurityplanet.com/network-security/how-to-fight-social-engineering.html
[3]: http://arstechnica.com/security/2015/06/why-the-biggest-government-hack-ever-got-past-opm-dhs-and-nsa/
[4]: http://techcrunch.com/2015/06/17/us-government-begins-outreach-to-office-of-personnel-management-hack-victims/
[5]: https://mover.io/connectors/box
[6]: https://www.box.com/business/it-admin-controls/
[7]: http://www.fedtechmagazine.com/article/2014/06/governments-cobol-conundrum
[8]: https://en.wikipedia.org/wiki/COBOL
[9]: {{ site.url }}/img/blog/2015-06-19_job-trends.png
[10]: http://www.indeed.com/jobanalytics/jobtrends?q=COBOL%2C+Node.js%2C+Python%2C+Ruby%2C+Objective-C&l=
[11]: https://www.owasp.org
[12]: https://www.box.com/blog/announcing-department-of-justice/
[13]: http://aws.amazon.com/federal/
[14]: https://twitter.com/Mover_io
[15]: https://www.linkedin.com/company/mover
[16]: https://www.facebook.com/Mover.io
[17]: https://plus.google.com/+MoverIoUpdates/posts
