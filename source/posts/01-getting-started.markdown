---
title: Getting started
permalink: getting-started
description: Getting started with squido
date: '2021-03-10 01:59:00'
tags: 
  - installation
  - getting-started
---

<img src="https://raw.githubusercontent.com/mrvautin/squido/main/docs/images/squido.svg" width="200px" height="200px">

## What is squido?

`squido` is a dead simple static website builder which can be hosted anywhere for super fast websites and very little effort.

The idea is to be a `no code` setup and have everything you need to run and host a website. You simply do the writing and customization of style and layout. 

## Installation

Simply install the `squido` cli module globally in order to build and manage your static site.

With npm
<pre>
npm install -g squido
</pre>

Or with Yarn
<pre>
yarn global add squido
</pre>

npm from Github
<pre>
npm i -g https://github.com/mrvautin/squido
</pre>

### Start from scratch

Make your `squido` website directory:
<pre>
mkdir my-squido-website
</pre>

Enter your new `squido` website directory:
<pre>
cd my-squido-website
</pre>

Get started building your `squido` website [structure](https://docs.squido.org/structure/).

### Start from template

The example we will use below is our [blog](https://github.com/mrvautin/squido-blog) example. There is also a [documentation](https://github.com/mrvautin/squido-docs) website example you can use. 

<pre>
git clone https://github.com/mrvautin/squido-blog my-squido-website
</pre>

> Replace `my-squido-website` with your new website directory name

Enter your new `squido` website directory:
<pre>
cd my-squido-website
</pre>

Run the following command to build, clean, serve and watch for changes:
<pre>
squido serve -b -w -c
</pre>

You can then visit your website here:
<pre>
http://localhost:4965
</pre>

> `Clean` = removes everything in your `/build` directory.

> `Serve` = starts a web server so you can view your website.

## Demos

Blog style: [https://docs.squido.org](https://docs.squido.org)

Documentation style: This website

Traditional website: [https://squido.org](https://squido.org)