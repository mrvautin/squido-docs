---
title: Usage / Commands
permalink: usage-commands
description: Getting started with the squido commands
date: '2021-04-02 01:57:00'
tags: 
  - usage
  - commands
---

The CLI comes with a few commands. 

``` bash
Usage: cli [options] [command]

Options:
  -V, --version    output the version number
  -h, --help       output usage information

Commands:
  build [options]  Builds your website
  clean            Clean your website build
  serve [options]  Serves website
```

#### Build command

The `build` command has the following options:

``` bash
Usage: build [options]

Builds your website

Options:
  -c --clean  Cleans build directory
  -h, --help  output usage information
```

#### Clean command

The `clean` command has the following options:

``` bash
Usage: clean [options]

Clean your website build

Options:
  -h, --help  output usage information
```

#### Serve command

The `serve` command has the following options:

``` bash
Usage: serve [options]

Serves website

Options:
  -w --watch  Watches for changes
  -b --build  Builds on start
  -c --clean  Cleans build directory
  -h, --help  output usage information
```