import type { RequestHandler } from '@sveltejs/kit'

const site = 'https://mehdikeramati.ir'
const pages = [
  '',
  '/about',
  '/service', 
  '/projects',
  '/contact'
]

export const GET: RequestHandler = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${site}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${site}${page}"/>
    <xhtml:link rel="alternate" hreflang="fa" href="${site}${page}"/>
    <xhtml:link rel="alternate" hreflang="de" href="${site}${page}"/>
  </url>`
    )
    .join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  })
}