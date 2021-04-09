const path = require('path');
const fs = require('fs');

const htmlRegex = /<.+?>/g;

const run = (opts) => {
    const config = process.squido;
    const postData = [];
    for(const index in process.postList){
        const post = process.postList[index];
        postData.push({
            title: post.title,
            permalink: post.permalink,
            body: post.body.replace(htmlRegex, '')
        })
    }

    const filePath = path.join(config.buildDir, 'content', 'javascripts', 'searchdata.js');
    fs.writeFileSync(filePath, `var data = ${JSON.stringify(postData)};`);
};

module.exports = {
    run
};