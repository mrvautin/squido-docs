const config = {
    development: {
        name: 'squido documentation',
        description: 'Squido documentation - A dead-simple Node.js static HTML website generator for super fast static websites which are easier to develop, more secure and dirt cheap to host.',
        twitterHandle: '@squido_app',
        facebookApp: '1492953114375539',
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
        description: 'Squido documentation - A dead-simple Node.js static HTML website generator for super fast static websites which are easier to develop, more secure and dirt cheap to host.',
        twitterHandle: '@squido_app',
        facebookApp: '1492953114375539',
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
