const config = {
    development: {
        name: 'squido docs',
        description: 'Squido documentation - A dead simple static website generator',
        twitterHandle: '@mrvautin',
        baseUrl: 'http://localhost:4965',
        sourcesExt: 'markdown',
        layout: 'layout.hbs',
        sourceDir: 'source',
        buildDir: 'build',
        summaryLength: 250,
        port: 4965,
        pagination: false,
        postPerPage: 8,
        plugins: [
            {
                name: 'search',
                options: {}
            }
        ]
    },
    production: {
        name: 'squido docs',
        description: 'Squido documentation - A dead simple static website generator',
        twitterHandle: '@mrvautin',
        baseUrl: 'https://docs.squido.org',
        sourcesExt: 'markdown',
        layout: 'layout.hbs',
        sourceDir: 'source',
        buildDir: 'build',
        summaryLength: 250,
        port: 4965,
        pagination: false,
        postPerPage: 8,
        plugins: [
            {
                name: 'search',
                options: {}
            }
        ]
    }
};

module.exports = config;
