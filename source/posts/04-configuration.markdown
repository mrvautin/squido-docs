---
title: Configuration
permalink: configuration
description: Getting started with the squido configuration
date: '2021-03-07 01:56:00'
tags: 
  - config
  - configuration
---

An example config can be seen below. You can see that you can specify different values for different environments you run. `development` and `production` are examples but they need to match up with whatever `NODE_ENV` is set. If one is not set, the default is `development`.

``` javascript
const config = {
    development: {
        name: 'squido',
        description: 'This is the blog description',
        twitterHandle: '@mrvautin',
        baseUrl: 'http://localhost:4965',
        sourcesExt: 'markdown',
        sourceDir: 'source',
        buildDir: 'build',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8
    },
    production: {
        name: 'squido',
        description: 'This is the blog description',
        twitterHandle: '@mrvautin',
        baseUrl: 'http://example.com',
        sourcesExt: 'markdown',
        sourceDir: 'source',
        buildDir: 'build',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8
    }
};

module.exports = config;
```

The configuration options are self explanatory. You can use any of the config in your template files using `{{config.<option>}}`. Eg: For example `{{config.baseUrl}}`.

This is a static website so the `port` is used for spinning up a Web Server for development. 