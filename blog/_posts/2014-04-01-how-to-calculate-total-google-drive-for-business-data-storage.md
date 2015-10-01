---
layout: blog-page
title: How to Calculate Total Google Drive for Work Data Storage
date: 2014-04-01
author: Eric Warnke
---

## How to Calculate Total Google Drive for Work Data Storage

This is a question I get a lot. Whether you're trying to migrate from Google Drive to something else, or simply calculate how much backups are going to cost, you need to know how much storage your entire company is using in Google Drive.

Google Apps has some nice reports, but they don't actually provide a sum total amount of data your employees have in their Drive's.

![Google Drive Admin Reports][1]

Here is how you calculate the total amount of data your company is using in Google Drive:

1. Visit the Users section in Google Apps admin at **https://admin.google.com/**** domain="">**/
2. Click **Download Users** and select **Download the filtered list of users**.

   A CSV (Comma Separated Value document) will be downloaded to your computer. Mine was named **OrgData-mover.io-221f24z17cukhl-20140401**.

3. Create a new Google Spreadsheet in Google Drive.

   Once you're inside, click **File** and then **Import**.

   ![][2]

   Select the CSV that was previously downloaded.

   I left **Replace spreadsheet** selected so it imported the data in place.

   Leave **Automatic** selected under the Separator character heading.

   Click **Import**.

   ![][3]

   You will now see all your users, and a column named **Drive usage**.

4. My sheet only had rows A through I. My **Drive usage** column is in column **H**. In a blank cell, anywhere other than column H (or your Drive usage column), copy and paste this formula:

   Note: ArrayFormula and RegexExtract are Google Spreadsheets specific and don't exist in Excel.

   Remember to replace the **H:H** part if your **Drive usage** column is somewhere else, or if you want to sum up a different column.

   ![][4]

5. You should now see a sum of the total GB used in Google Drive for your organization.

   Now you know how much data your entire company uses in Google Drive!

If this was helpful feel free to let us know in the comments, [follow us on Twitter][5], [like us on Facebook][6], or [add us on Google+][7].

* * *

[1]: {{ site.url }}/img/blog/2014-04-01_reports.png
[2]: {{ site.url }}/img/blog/2014-04-01_menu.png
[3]: {{ site.url }}/img/blog/2014-04-01_import.png
[4]: {{ site.url }}/img/blog/2014-04-01_sum.png
[5]: https://twitter.com/Mover_io
[6]: https://facebook.com/Mover.io
[7]: https://google.com/+MoverIoUpdates
