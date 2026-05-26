import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  return rss({
    title: 'NEXUS // digital futures',
    description: 'Riflessioni su cybersecurity, AI, domotica e tecnologia',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>it-IT</language>`,
  });
}
