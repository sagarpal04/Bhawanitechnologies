import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl.clone();

    // Redirect non-www to www
    if (url.hostname === 'bhawanitechnologies.in') {
        url.hostname = 'www.bhawanitechnologies.in';
        return NextResponse.redirect(url, 308);
    }

    const response = NextResponse.next();

    // Link headers (RFC 8288) — help AI agents discover structured resources
    response.headers.set(
        'Link',
        [
            '</llms.txt>; rel="service-doc"; type="text/plain"',
            '</.well-known/agent-skills/index.json>; rel="agent-skills"; type="application/json"',
            '</sitemap.xml>; rel="sitemap"; type="application/xml"',
        ].join(', ')
    );

    return response;
}

export const config = {
    matcher: '/:path*',
};
