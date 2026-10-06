import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },

    sitemap:
      'https://enzuvia.com.br/sitemap.xml',
  }
}