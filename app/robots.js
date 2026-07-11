export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://bhawanitechnologies01.com/sitemap.xml',
    }
}
