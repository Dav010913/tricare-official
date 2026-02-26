/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://tricareglobal.com.au',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    // Excluding API routes and potentially other non-page routes if necessary
    exclude: ['/api/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: '*',
                disallow: '/api',
            },
        ],
    },
}
