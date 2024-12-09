import { SitemapStream, streamToPromise } from 'sitemap';

export default async function handler(req, res) {
  try {
    const smStream = new SitemapStream({
      hostname: 'https://shreybhadiyadara.com'
    });

    // List all your dynamic pages here
    const pages = [
      { url: '/', changefreq: 'monthly', priority: 1.0 },
      { url: '/projects', changefreq: 'monthly', priority: 0.8 },
      { url: '/experience', changefreq: 'monthly', priority: 0.8 },
      { url: '/skills', changefreq: 'monthly', priority: 0.7 },
      { url: '/contact', changefreq: 'monthly', priority: 0.6 }
    ];

    // Create each URL in the sitemap
    pages.forEach(page => {
      smStream.write(page);
    });

    smStream.end();

    const sitemap = await streamToPromise(smStream);
    
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
    res.write(sitemap.toString());
    res.end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error generating sitemap' });
  }
}
