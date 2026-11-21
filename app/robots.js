export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
        ],
        sitemap: 'https://www.bhawanitechnologies.in/sitemap.xml',
        host: 'https://www.bhawanitechnologies.in',
        // Content-Signal directives are added via middleware headers
    }
}
