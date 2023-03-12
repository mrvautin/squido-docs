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
        templateEngine: 'hbs',
        templateConfig: {},
        sourceDir: 'source',
        contentDir: 'content',
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
        templateEngine: 'hbs',
        templateConfig: {},
        sourceDir: 'source',
        contentDir: 'content',
        buildDir: 'build',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8,
        postBuild: [
            {
                name: 'zip',
                options: {}
            }
        ]
    }
};

module.exports = config;
```


Config                         | Usage                        
------------------------------ | ----------
`name`                  | Used in default templates for `<title>` and meta tags for homepage 
`description`           | Used in default templates for meta tags for homepage 
`baseUrl`               | Used for URL building purposes. Would set this to `https://example.com`
`sourcesExt`            | The file extension for your markdown posts
`templateEngine`        | The template engine to use. Possible values are: `hbs`, `ejs` or `pug`
`sourceDir`             | The directory where your markdown posts reside
`contentDir`            | The directory where your Javascript, CSS, images and other assets reside
`buildDir`              | The directory where the static HTML files and assets are placed after building
`summaryLength`         | The length of the post summary which is available in the meta data of the post
`port`                  | The port used when running `squido serve`
`pagination`            | This controls whether you want `squido` to paginate your posts
`postPerPage`           | This controls how many posts appear per page
`postBuild`             | Controls any post build tasks you wish to run. See [here](https://squido-docs.markmoffat.com/post-build-tasks/)

{.table .table-bordered}


You can use any of the config values in your template files using `{{config.<option>}}`. Eg: For example `{{config.baseUrl}}`.

The `templateEngine` config allows for the setting of which template engine to use - either: `hbs`, `ejs` or `pug` is allowed. The `templateConfig` object allows for the passing of configurations and is used when `ejs` or `pug` is set for the `templateEngine`. See [here](https://github.com/mde/ejs#options) for available `ejs` options and [here](https://pugjs.org/api/reference.html#options) or `pug`.