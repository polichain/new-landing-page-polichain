import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { defaultLang } from '../i18n/ui';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Polichain.xyz Blog',
    description: 'Latest updates from the USP Blockchain Club',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/${defaultLang}/blog/${post.slug}/`,
    })),
  });
}