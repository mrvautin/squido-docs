---
title: Plugins
permalink: plugins
description: Getting started with the squido plugins
date: '2021-03-02 01:53:00'
tags: 
  - plugins
  - environment variable
---

Plugins can be created if core functionality is not included or customization is required. Plugins run at the final step of the build so you can override any of the existing steps if needed.

Plugins are Javascript files within `/<source dir>/plugins/<plugin name>.js`. 

The plugin file needs to export a function named `run`. For example:

``` javascript
const run = (opts) => {
  /* code in here */
  console.log('opts', opts);
};

module.exports = {
  run
};
```

## Configuration

Adding plugins to your `/config.js` file is simple by adding the plugin to the plugins array:

``` javascript
const config = {
  development: {
    ...
    plugins: [
      {
        name: 'search',
        options: {}
      }
    ]
  }
}
```

`name`: the name of the plugin. This also needs to match the name of the file. Eg: `/source/plugins/search.js`

`options`: An arg object passed into the plugin. 

## Environment variables

You can access environment variables in your plugins using the `process.squido.envVars` object. 

You might want to do something different in your plugin based on a environment variable you've set with you [hosting](/deployment-and-hosting/) provider.

An example plugin:

``` javascript
const run = (opts) => {
    const config = process.squido;

    let toPrint = 'Hello squido';

    if(config.envVars.helloMessage){
      toPrint = config.envVars.helloMessage;
    }

    console.log(`Hello ${toPrint}`);
};

module.exports = {
    run
};
```

Eg: For [Netlify](https://netlify.com) you would set a variable named `helloMessage` to `World` (for example above) and the plugin would then console.log `Hello World` if the environment variable is set and `Hello squido` when nothing is set.