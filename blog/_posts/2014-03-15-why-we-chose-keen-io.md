---
layout: blog-page
title: Why We Chose Keen IO
date: 2014-03-15
author: Eric Warnke
---

## Why We Chose Keen IO

Here at Mover we process a lot of files. A lot. About 1.5 billion per month.

I can easily grab these kind of stats because of Keen IO, an awesome data analysis tool that we feed our file processing data.

### Getting Information

When I pulled that 1.5 billion files per month number, I simply hit Keen's dashboard, selected our _transfer_log_ event collection, and summed up the number of files we processed _last_month_.

The _transaction_log_ event collections contains anonymous details such as the number and total bytes for files moved. We also have a nested structure that further segregates these counts into success, failure, and skipped bins.

![][1]

### Sample Data

      
    {
        "files_in":  {
            "success": 500,
            "failure": 1
        },
        "files_out":  {
            "success": 499,
            "failure": 0
        }
    }

You can push this data straight to Keen as json. To obtain our monthly processing numbers, I simply asked Keen to sum up the _fout_ field across a 30-day window. The tool is clever enough to identify all of the distinct fields within your data – including nested ones such as _fout_bins.s_ – and make them available via drop-downs when forming queries.

How does that look on a daily basis? Easy, I just set the interval to _daily_ and Keen spits out this nice chart.

![Daily Files Processed in February 2014][2]

What if I want see where those files were headed? I just group by our destination label.

![Line graph of files process by destination.][3]

And if I remove the interval setting Keen spits out a lovely pie chart.

![Files Processed Pie Chart February 2014][4]

Each graph is actually interactive, but for archiving sake I've captured them as images.

Of course, this is just scratching the surface. Keen actually allows you to embed their charts into your own products, with a JavaScript snippet. Of course the JSON for each graph is also available so you can easily customize your own interface to include their data. This is something that I'm extremely excited about Mover adding to each user account.

### Importing Data

Getting our logs into Keen required a small import script to be written against Keen's effectively documented and simple REST API. The script simply iterated over the historical data we had in our Mongo database (which exports nicely to JSON) in batches of 1000. After that we added a simple processing tidbit to our log processor that shunts a copy of each new transfer summary off to Keen.

With real-time data, there is no lead time before we can start analyzing data. Keen's powerful Tornado servers easily handle the data we send them.

### Summary (tldr)

For the relatively low-overhead of getting started with Keen, it's provided us with an interesting view into our data. At Mover, we're already using tools such as KISSMetrics and Google Analytics which can provide similar insight but with much higher overhead. One of Keen's strengths is the ease with which it can help visualize ad-hoc queries on real-time or archival data.

Keen is a great analytics tool if you have event data that requires technical and non-technical users to analyze. I highly recommend that you check out their great documentation and send a few events over. I doubt you'll be disappointed.

#### Links

* [Keen.io](http://keen.io/)

[1]: {{ site.url }}/img/blog/2014-03-15_keen1.png
[2]: {{ site.url }}/img/blog/2014-03-15_keen2.png
[3]: {{ site.url }}/img/blog/2014-03-15_keen3.png
[4]: {{ site.url }}/img/blog/2014-03-15_keen4.png
