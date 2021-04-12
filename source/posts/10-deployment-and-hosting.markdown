---
title: Deployment and hosting
permalink: deployment-and-hosting
description: Getting started with the squido deploying and hosting your website
date: '2021-03-01 01:52:00'
tags: 
  - deployment
  - hosting
  - netlify
  - github
  - pages
---

## Netlify

You can host this website anywhere static websites are supported. Some options are [https://www.netlify.com](https://www.netlify.com) as the deployments are just dead simple.

Simply connect your Git repo and set the `Build settings` settings like below:

<img src="https://raw.githubusercontent.com/mrvautin/squido/main/docs/images/netlify.png" width="800px" height="auto">

## Github pages

Publishing to Github pages is easy. Simply set your config `buildDir` to `docs` and the correct `baseUrl`. Eg:

``` javascript
production: {
    name: 'squido',
    description: 'This is the blog description',
    twitterHandle: '@mrvautin',
    baseUrl: 'https://<github-username>.github.io',
    sourcesExt: 'markdown',
    sourceDir: 'source',
    buildDir: 'docs',
    summaryLength: 250,
    port: 4965,
    pagination: true,
    postPerPage: 8
}
```

Then simply build your website with `squido build -c` and push to your Github repo.

You then need to set `Source` to `/docs` as shown [here](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) and may need to change the branch.

You can then either access at your Repo URL (`https://<github-username>.github.io`) or a [custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#about-custom-domain-configuration)