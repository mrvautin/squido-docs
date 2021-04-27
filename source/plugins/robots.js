const path = require('path');
const fs = require('fs');

const run = (opts) => {
    const config = process.squido;

    const robots = 
`User-agent: *
Allow: /

Sitemap: ${config.baseUrl}/sitemap.xml`;

    const filePath = path.join(config.buildDir, 'robots.txt');
    fs.writeFileSync(filePath, robots);
};

module.exports = {
    run
};