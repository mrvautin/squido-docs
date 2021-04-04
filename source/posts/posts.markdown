---
title: Posts
permalink: posts
description: Getting started with the squido post structure
date: '2021-04-02 01:55:00'
tags: 
  - posts
---

Posts have a meta data component at the top of the file which directs how the file is built. The meta data is `yaml` formatted and sits between two `---` tags. Eg:

``` yaml
---
title: Caede virides oculos armentis
permalink: caede-virides-oculos-armentis
description: Caede virides oculos armentis
date: '2021-03-11 19:17:00'
ignore: true
hidden: false
tags: 
  - alter
  - tradere
---
```

You can add any data values your like but the example layouts uses the `title` and `description` for SEO for page title. 

New meta data values can be access in the layouts using `{{meta.<new value>}}`.

The permalink is required. Its used to build the URL for your website: Eg. The above will output a post at: `https://example.com/caede-virides-oculos-armentis`

The `ignore` and `hidden` are optional tags for controlling the visibility of posts.

- `ignore`: If set to `true`, the post will not be in the pagination and won't show on the index page.
- `hidden`: If set to `true`, the post will not be in the sitemap and RSS feeds.