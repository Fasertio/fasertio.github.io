import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.enum(['tech', 'cybersecurity', 'ai', 'domotica']),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
    image: z.string().optional(),
  })
});

export const collections = {
  posts: postsCollection,
};
