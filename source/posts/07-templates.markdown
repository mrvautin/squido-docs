---
title: Templates
permalink: templates
description: Getting started with the squido templating
date: '2021-03-04 01:55:00'
tags: 
  - templates
  - themes
---

Templates use [Handlebars](https://handlebarsjs.com) formatting and the `{{}}` syntax, [EJS](https://github.com/mde/ejs) or [pug](https://pugjs.org/). This guide will show `Handlebars` formatting. Documentation on changing the `templateEngine` can be found [here](https://docs.squido.org/configuration/).

<div class="bd-callout bd-callout-squido">
This guide will show examples in <code>Handlebars</code> formatting.
Documentation on changing the <code>templateEngine</code> can be found <a href="https://docs.squido.org/configuration/">here</a>.
</div>

The template files needed by default are:

- `index.hbs`
- `post.hbs`
- `page.hbs`
- `tag.hbs`
- `404.hbs`

Also needed is a layout file called `layout.hbs` located here: `/source/layouts/layout.hbs`. This file drives the main layout of the page including the `<html>`, `<head>`, `<body>` etc tags. 

Accessible on all layout and templates files is your post meta using `{{meta.<property>}}` and your `config.js` object. You can access that using `{{config.<propery>}}`. 

## index.hbs

This is the entry point of your website, the `index.html` in the root of your build directory. 

You will have access to a list of posts which you may want to display if building a blog or you may want to manually create a landing page for your website. The choice is yours. 

If you were to render your posts you may want to do something like where `{{#each posts}}` is looping our list  of posts:

``` handlebars
<div class="row">
  {{#each posts}}
  <div class="article">
    <h2>
      <a href="/{{this.permalink}}/">{{this.title}}</a> 
    </h2>
    {{this.summary}}
  </div>
  {{/each}}
</div>
```

Depending on if you have `pagination` set to `true` in your config, you will either get a full list of articles or a paginated list. See [pagination](#pagination) for more info. 

## post.hbs

This is the rendering of the post or the markdown content at the `permalink` set. Eg: `mydomain.com/permalink-value`.

To render the body of the markdown file you will need to add the following tag to your template: `{{{body}}}`

You will have access to the full meta values of the page but can also access the title using `{{title}}`. Depending on whether you included tags in the meta data of the markdown file, you will also get a `tags` object you can loop through to display tags. See [tags](#tags) for more info.

A simple post page could be:

``` handlebars
<div class="row">
    <div class="col-md-8 offset-md-2 mb-5">
        <div class="mt-5">
            <h1>{{title}}</h1>
            {{{body}}}
        </div>
    </div>
</div>
```

## page.hbs

This is the pagination aspect of your website. This template is used at `/page/x` (where `x` is the page number). If you are creating a blog which will have pagination this could look very similar to the `index.hbs` which shows all your articles/posts. Similar to the `index.hbs` you will get a `post` object with the posts you should render if you are doing pagination. 

A simple template could look like:

``` handlebars
<div class="row">
  {{#each posts}}
  <div class="col-xs-12 col-sm-3 mb-4 d-flex align-items-stretch">
    <div class="card shadow-sm">
      <div class="card-body">
        <p class="card-text">
          <h2>
            <a href="/{{this.permalink}}/">{{this.title}}</a> 
          </h2>
          {{this.summary}}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <a class="btn btn-outline-secondary" href="/{{this.permalink}}/">Read more..</a>
        </div>
      </div>
    </div>
  </div>
  {{/each}}
</div>
```

## tag.hbs

This is the tag page which is generated from the tags set in your post markdown. A page is create for each tag you use in your markdown files and is accessible at: `/tag/<tag-value>`. Keep this in mind when setting tag values where you will want to give permalink type values for pretty URLs.

A simple template could look like:

``` handlebars
<div class="row">
  <h1>Tag: {{tag}}</h1>
  {{#each posts}}
  <div class="col-xs-12 col-sm-3 mb-4 d-flex align-items-stretch">
    <div class="card shadow-sm">
      <div class="card-body">
        <p class="card-text">
          <h2>
            <a href="/{{this.permalink}}">{{this.title}}</a> 
          </h2>
          {{this.summary}}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <a class="btn btn-outline-secondary" href="/{{this.permalink}}/">Read more..</a>
        </div>
      </div>
    </div>
  </div>
  {{/each}}
</div>
```

## 404.hbs

Hopefully this one is obvious. If at any point a page isn't found or a URL is mistyped this 404 page will be rendered.

A simple template:

``` handlebars
<div class="row">
    <div class="col-md-6 offset-md-3 mt-5 mb-3">
        <div class="text-center">
            <img src="/content/images/squido.svg" alt="" width="200" height="200" alt="squido logo" class="img-fluid">
        </div>
        <h1 class="mt-5 text-center">404 - Page not found</h1>
    </div>
</div>
```

## Includes

You can include local Stylesheets and Javascript files in the `layout.hbs` file by using path starting with `/content` and then wherever you have placed the file. Eg: `/content/stylesheets/<myfile>.css`.

The `layout.hbs` also includes a `config` property named `fileEnv` (`{{config.fileEnv}}`) which will return either nothing or `.min` if you have set the `NODE_ENV` to `production`. This is useful if you are wanting to use the un-minified CSS or JS file when troubleshooting/developing your website and using the minified version when in production.

Example usage:

``` handlebars
<link rel="stylesheet" href="/content/stylesheets/style{{config.fileEnv}}.css">
<script src="/content/javascripts/site{{config.fileEnv}}.js"></script>
```

## Tags

Within a post you have access to a `tag` array which contains all the tags for that post. You may want to iterate through that array to link to the `/tag/<tag-value>` URL. For example:

``` handlebars
{{#if tags}}
<div class="row">
    <div class="col-md-8 offset-md-2 mb-5">
        <h5 class="text-muted">Tags:</h5>
        {{#each tags}}
        <a href="/tag/{{this}}/">{{this}}</a> |
        {{/each}}
    </div>
</div>
{{/if}}
```

## Pagination

If `pagination` is set to true in your `config.js` file, the `post` object available on all templates will be paginated to the `postPerPage` value you set in your `config.js`. Eg: 10 posts and `postPerPage` set to 5 will create 2 pages. 1, the index page and `/page/1` as the first paginated page. 

You will also get a `shouldPaginate` variable which will return `true` or `false` depending on whether there is more posts than can be displayed - eg: you should paginate. 

An example displaying the pagination might look like:

``` handlebars
{{!-- Pagination --}}
{{#if config.pagination}}
{{#if shouldPaginate}}
<div class="row">
  <div class="col-xs-12 col-sm-12 mb-4 text-center">
    <p class="text-muted">Page {{page}} of {{pages}}</p>
    <div class="btn-group" role="group">
    {{#if prevPage }}
        <a href="/page/{{prevPage}}/" class="btn btn-outline-secondary">&laquo; Prev Page</a>
    {{/if}}
    {{#if nextPage }}
        <a href="/page/{{nextPage}}/" class="btn btn-outline-secondary">Next Page &raquo;</a>
    {{/if}}
    </div>
  </div>
</div>
{{/if}}
{{/if}}
```

## Custom data

`squido` supports the adding of custom data to your website. This function allows for `yaml`, `json` or `text` formatted files to be parsed and added to the data available in your templates.

Adding custom data is as simple as adding the following Array of Objects to your `config.js` file. You will need to have the following properties:

- `name` = The name which is accessible in your template. Eg: A `name` of `swagger` will mean the contents of the file is accessible at `data.swagger`.
- `type` = Supported types are: `yaml`, `json` or `text`
- `file` = The file path in relation to your `sourceDir`. In the example below the file is located: `source/swagger.yaml`

A full example below:

``` javascript
const config = {
  development: {
    name: 'squido',
    description: 'This is the blog description',
    twitterHandle: '@mrvautin',
    baseUrl: 'http://localhost:4965',
    sourcesExt: 'markdown',
    templateEngine: 'hbs',
    data: [
      {
        name: 'swagger',
        type: 'yaml',
        file: 'swagger.yaml'
      }
    ],
    sourceDir: 'source',
    buildDir: 'build',
    ...
  }
}
```

## Swagger

`squido` supports [Swagger](https://swagger.io/) using our [custom data](/templates/#custom-data) functionality. You can use this to setup super fast static API documentation. Simply grab our demo [swagger.hbs](https://github.com/mrvautin/squido/blob/main/source/swagger.hbs) template and setup a [post](/posts) like the following where `template: swagger.hbs` is the path to the [Swagger](https://swagger.io/) template file in your `sourceDir`:

``` yaml
---
title: Swagger API docs
permalink: api
description: Swagger API Docs
date: '2021-05-11 19:17:00'
template: swagger.hbs
visible: false
hidden: false
---
```

Then setup your `config.js` to include the Swagger data like:

``` javascript
const config = {
  development: {
      name: 'squido',
      description: 'This is the blog description',
      twitterHandle: '@mrvautin',
      baseUrl: 'http://localhost:4965',
      sourcesExt: 'markdown',
      templateEngine: 'hbs',
      data: [
        {
            name: 'swagger',
            type: 'yaml',
            file: 'swagger.yaml'
        }
      ],
      sourceDir: 'source',
      buildDir: 'build',
      ...
    }
}
```

> Where `swaggerFile` is the name of your `swagger.yaml` file in relation to your `sourceDir`. Note: the `type` can also be set to `json` for a JSON formatted Swagger file. 

## Partials

### Handlebars

Partials can be created in `/source/partials` and can be used in layout and other template files. 

Once a file is created you can add it to your template using:

``` handlebars
{{> header}}
```

> Where `header` is the name of the file `header.hbs` located: `/source/partials/header.hbs`

### EJS

`ejs` handling of partials is a little more flexible. You can setup your config using the `templateConfig.views` option with the directory where the partials will exist. Eg:

``` javascript
const config = {
  development: {
      name: 'squido',
      description: 'This is the blog description',
      twitterHandle: '@mrvautin',
      baseUrl: 'http://localhost:4965',
      sourcesExt: 'markdown',
      templateEngine: 'ejs',
      templateConfig: {
        views: ['source/partials']
      },
      sourceDir: 'source',
      buildDir: 'build',
      ...
    }
}
```

> Note: The `templateConfig.views` takes an array of paths 

### Pug

[Pug](https://pugjs.org/) partials is super easy. You need to setup the root by setting the `templateConfig.basedir` to `__dirname`. Eg:

``` javascript
const config = {
  development: {
      name: 'squido',
      description: 'This is the blog description',
      twitterHandle: '@mrvautin',
      baseUrl: 'http://localhost:4965',
      sourcesExt: 'markdown',
      templateEngine: 'pug',
      templateConfig: {
        basedir: __dirname
      },
      sourceDir: 'source',
      buildDir: 'build',
      ...
    }
}
```

Then in a template you can include a partial by adding the following: `include /source/partials/header.pug`
