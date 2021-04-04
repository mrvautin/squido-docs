---
title: Structure
permalink: structure
description: Getting started with the squido structure
date: '2021-04-02 01:58:00'
tags: 
  - structure
---

You can start by grabbing everything in the `/source` directory of [here](https://github.com/mrvautin/squido/tree/main/source).

```
project
│   config.js 
│
└───source
│   index.hbs
│   post.hbs
│   page.hbs
│   tag.hbs
│   package.json
│   │
│   └───posts
│   │   post1.markdown
│   │   post2.markdown
│   │
│   └───layouts
│   │   layout.hbs
│   │
│   └───content
│       └───images
│       │
│       └───javascripts
│       │
│       └───stylesheets
```

The `/<source_dir>` directory is the default directory for all the source files. You can change by adding another directory in the `sourceDir` of the `config.js` file.

The `index.hbs`, `post.hbs`, `page.hbs` and `tag.hbs` files are used to insert into your template. The `index.hbs` is the root of your website, `post.hbs` will render the contents of the `.markdown` files and `page.hbs` and `tag.hbs` are used to build pagination and tag aggregation.

Your posts go in the `/<source_dir>/posts` directory. You will have `.markdown` files for each post/page you want.

The `content` directory contains the files used for your website. Eg: Stylesheets, images, javascript files etc.