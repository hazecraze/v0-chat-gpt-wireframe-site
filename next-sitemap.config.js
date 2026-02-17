/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://surgecouncil.com',
  generateRobotsTxt: false, // We manage robots.txt manually
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
  ],
  transform: async (config, path) => {
    // Homepage gets highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
