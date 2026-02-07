import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    image: z.string(),
    tags: z.array(z.string()),
    video: z.string().optional(), // New Video Field
    
    // New Language Objects
    en: z.object({
      title: z.string(),
      description: z.string(),
      // Body is handled differently in object widgets, we might need a workaround or just use the raw string
      // For Decap 'object' widgets with markdown, Astro treats them as strings usually.
    }),
    it: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
});

export const collections = {
  'projects': projectsCollection,
};