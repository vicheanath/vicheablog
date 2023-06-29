import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://www.vichea.me/'

function generateSiteMap(posts, tags) {
  // get all key from object tags
  const t = Object.keys(tags)

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
  
  
    <url>
      <loc>https://www.vichea.me/</loc>
      <lastmod>2023-06-29T10:46:46+00:00</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://www.vichea.me/blog</loc>
      <lastmod>2023-06-29T10:46:46+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.vichea.me/tags</loc>
      <lastmod>2023-06-29T10:46:46+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.vichea.me/projects</loc>
      <lastmod>2023-06-29T10:46:46+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.vichea.me/about</loc>
      <lastmod>2023-06-29T10:46:46+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.vichea.me/blog/logarithm</loc>
      <lastmod>2023-06-29T10:46:46+00:00</lastmod>
      <priority>0.80</priority>
    </url>
    <url>
      <loc>https://www.vichea.me/tags/react</loc>
      <lastmod>2023-06-29T10:46:46+00:00</lastmod>
      <priority>0.80</priority>
    </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}blog/${slug}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
            <priority>0.80</priority>
       </url>
     `
       })
       .join('')}
         ${Object.keys(tags)
           .map((tag) => {
             return `
                <url>
                    <loc>${`${EXTERNAL_DATA_URL}tags/${tag}`}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <priority>0.80</priority>
                </url>`
           })
           .join('')}
                
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const posts = await getAllFilesFrontMatter('blog')
  const tags = await getAllTags('blog')

  const sitemap = generateSiteMap(posts, tags)
  res.setHeader('Content-Type', 'text/xml')

  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
