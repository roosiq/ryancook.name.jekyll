---
layout: post
title: I'm Learning Data Management.
group: thought
tags:
    - mgmt
description:
    - Everyone's doing it right?
image: ../assets/images/sql-blog.jpg
---
## The Goal: More Truthful Data, Faster

With the latest updates to Google and Facebook's advertising platforms, I've noticed what seems to be a shift to a focus on metrics that can be distracting in standard dashboards.  Frequently tooltips and 'best practices' are presented that lead to increased costs for advertisers.  I get it - they are trying to increase profit but at the cost of advertisers trust (if they figure it out).

A major part of my role as Director of Analytics is to provide actionable insights and report on KPIs.  I also perform a lot of original research based on data aggregated from third parties.  Some of these datasets can be unmanageable in Excel due to size.  

**Here's what I want to do:**
- Send raw data into Google BigQuery table, transform it into a useful dataset, and load it into another table.
- Be able to query, combine, manipulate and analyze massive datasets using Google BigQuery.
- Create a Data Pipeline to bring in Facebook Ads performance into a reporting interface and append user experience metrics into the same table.
- Create kickass original research that is game changing and can be refreshed in one click.

This is definitely more in the realm of Data Science, and I'll probably follow the rabbit hole into the Python and R world.  For now,  I just want to learn and use the above.  I've started learning with [Codecademy's course on SQL](https://www.codecademy.com/courses/learn-sql/), then I'll move on to Data Science.

**Here's the planned data stack so far:**
- StitchData: pull
- Google BigQuery: store, transform, store
- Google DataStudio / PowerBI: data visualization

Thanks for the inspiration: [Coding Is For Losers](https://codingisforlosers.com/agency-data-pipeline/).

**This will slow down some of the development I want to do here, but it's worth it. I'll still save links and post them here.**

## I finished SQL on Codecademy, here are my notes:


`CREATE TABLE` creates a new table.  
`INSERT INTO` adds a new row to a table.  
`SELECT` queries data from a table.  
`UPDATE` edits a row in a table.  
`ALTER TABLE` changes an existing table.  
`DELETE FROM` deletes rows from a table.  
`AS` renames a column or table.  
`DISTINCT` return unique values.  
`WHERE` is a command that lets you filter the results of the query.  
`LIKE` filter based on special characters; _ selects any single.   character, % is a wildcard for any sequence of characters.  
`BETWEEN` as the name states.  
`AND` and `OR` combines multiple conditions.  
`ORDER BY` sorts the result. ASC & DESC sort by ascending and descending respectively.  
`LIMIT` specifies the maximum number of rows that the query will return.  
`CASE` if / else of SQL using when, else, end.  
`COUNT()`: counts the number of rows.  
`SUM()`: sums of the values in a column.  
`MAX() / MIN()`: returns the largest/smallest value.  
`AVG()`: returns the average of the values in a column.  
`ROUND()`: rounds the values in the column, where the second input is the number of decimal places).


<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@_healthymond?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from _HealthyMond ."><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">_HealthyMond .</span></a>
