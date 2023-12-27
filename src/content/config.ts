// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const authorCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    imageUrl: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    description: z.string(),
    urlslug: z.string()
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'author': authorCollection,
};