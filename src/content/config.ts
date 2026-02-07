import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Shared fields
    date: z.date(),
    image: z.string(),
    tags: z.array(z.string()).optional(), // Optional just in case
    video: z.string().optional(),         // Optional because not every game has a video
    
    // English Data
    en: z.object({
      title: z.string(),
      description: z.string(),
      body: z.string().optional(), // The CMS saves the body text here
    }),

    // Italian Data
    it: z.object({
      title: z.string(),
      description: z.string(),
      body: z.string().optional(),
    }),
  }),
});

export const collections = {
  'projects': projectsCollection,
};