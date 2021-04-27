const config = {
    development: {
        name: 'squido documentation',
        description: 'Squido documentation - A dead simple static website generator',
        twitterHandle: '@squido_app',
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
            },
            {
                name: 'robots',
                options: {}
            }
        ]
    },
    production: {
        name: 'squido documentation',
        description: 'Squido documentation - A dead simple static website generator',
        twitterHandle: '@squido_app',
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
            },
            {
                name: 'robots',
                options: {}
            }
        ]
    }
};

module.exports = config;
