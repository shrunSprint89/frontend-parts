import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string(),
        navTitle: z.string(),
        navOrder: z.number().optional(),
        tabTitle: z.string().optional(),
        description: z.string(),
        seo: z.intersection(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            navTitle: z.string().optional(),
            meta: z.array(z.record(z.string(), z.any())).optional(),
            link: z.array(z.record(z.string(), z.any())).optional(),
            date: z.date(),
            image: z.string().optional(),
            alt: z.string().optional(),
            author: z.string().optional(),
            tags: z.array(z.string()),
            keywords: z.string().optional(),
            ogTitle: z.string().optional(),
            ogDescription: z.string().optional(),
            ogImage: z.string().optional(),
            twitterTitle: z.string().optional(),
            twitterDescription: z.string().optional(),
            twitterImage: z.string().optional(),
            twitterCard: z
              .enum(["app", "summary", "summary_large_image", "player"])
              .optional(),
          }),
          z.record(z.string(), z.any())
        ),
        excerpt: z.object({
          type: z.string(),
          children: z.any(),
        }),
      }),
    }),
  },
});
