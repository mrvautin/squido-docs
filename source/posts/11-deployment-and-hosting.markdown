---
title: Deployment and hosting
permalink: deployment-and-hosting
description: Getting started with the squido deploying and hosting your website
date: '2021-02-28 01:52:00'
tags: 
  - deployment
  - hosting
  - netlify
  - github
  - pages
  - aws
  - amplify
---

## Netlify

You can host this website anywhere static websites are supported. Some options are [https://www.netlify.com](https://www.netlify.com) as the deployments are just dead simple.

Simply connect your Git repo and set the `Build settings` settings like below:

![Netlify build](/content/images/netlify-build.png)

And set the Environment variable to align with your `config.js` file:

![Netlify environment](/content/images/netlify-environment.png)

You are done. Now each push to your Git repo will trigger the build and deploy on [Netlify](https://www.netlify.com).

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

## Amazon AWS Amplify

It's very easy to publish your `squido` website to [AWS Amplify](https://aws.amazon.com/amplify/). 

1. Login [here](https://console.aws.amazon.com/amplify/home)
2. Select `New App`
3. Select `Host web app`
4. Select the Git repository and authenticate. Eg: Github
5. Select the Repository name and branch from the populated list(s)
6. Click `Edit` on the build commands and ensure `baseDirectory` is set to `/build`. Eg Yaml file will look like:
``` yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: /build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
7. Click `Save and deploy` and wait for your website to be built!

## Azure Static Web Apps

Publishing your `squido` website to [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/publish-devops?wt.mc_id=azurestaticwebapps_inline_inproduct_general) is quite easy and low cost. 

### Prerequisites:
- [Azure Subscription](https://azure.microsoft.com/en-us/)
- [Azure DevOps](https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/)

1. Visit [portal.azure.com](portal.azure.com), login and create a free Static Web App.
  a. To use Azure DevOps instead of a Github repo, select "Other" under `Deployment details`
  b. Once the resource is provisioned, from the Static Web App Overview page, click `Manage Deployment Token`
  c. Copy this token somewhere safe. It will be used shortly.
![image](https://user-images.githubusercontent.com/8636973/123503632-0f057e00-d609-11eb-816d-50990e122d90.png)
2. Visit [devops.azure.com](devops.azure.com), login and create a New Project
3. Click `Repos` and clone the Azure repo to your local machine
  a. Either move your existing `squido` site into this local repo, or create a new `squido` site
  b. Commit and push code to this Azure DevOps repo
5. Click `Pipelines` and create a new Pipeline for the project
  a. Select `Starter Pipeline` and paste in the yaml template below
```
trigger:
  - main

pool:
  vmImage: ubuntu-latest

steps:
  - checkout: self
    submodules: true
  - task: AzureStaticWebApp@0
    inputs:
      app_location: '/'
      output_location: '/build'
      azure_static_web_apps_api_token: $(deployment_token)
```
6. Click `Variables` then `New Variable`
  a. Name the variable `deployment_token` and paste in the `Deployment Token` from Step 1c. above
7. Save and run the Pipeline
8. Visit the URL shown in Static Web Apps in Azure Portal
