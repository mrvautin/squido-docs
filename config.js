const config = {
    development: {
        name: 'squido docs',
        description: 'TSquido documentation',
        twitterHandle: '@mrvautin',
        baseUrl: 'http://localhost:4965',
        sourcesExt: 'markdown',
        layout: 'layout.hbs',
        sourceDir: 'source',
        buildDir: 'build',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8
    },
    production: {
        name: 'squido docs',
        description: 'Squido documentation',
        twitterHandle: '@mrvautin',
        baseUrl: 'https://squido-docs.netlify.app',
        sourcesExt: 'markdown',
        layout: 'layout.hbs',
        sourceDir: 'source',
        buildDir: 'build',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8
    }
};

module.exports = config;
