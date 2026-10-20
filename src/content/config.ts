import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('René Villegas'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    date: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
