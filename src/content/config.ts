import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content', // v2.5.0+
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()), // This expects a list of tags
    image: z.string().optional(), // Image is optional
    // Body is automatic in Astro
  }),
});

export const collections = {
  'projects': projectsCollection,
};