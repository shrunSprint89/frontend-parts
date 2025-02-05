import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        seo: z.intersection(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
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
            twitterImage: z.string().optional(),
            twitterCard: z
              .enum(["app", "summary", "summary_large_image", "player"])
              .optional(),
          }),
          z.record(z.string(), z.any())
        ),
      }),
    }),
  },
});

/*

        title: Frontend.Parts - Comparitive overview of parts of frontend apps
description: Educational site that gives a comparitive overview of parts of frontend applications, and frontend engineering challenges and commonly used solutions.
date: 2023-03-20
image: https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60
alt: my first blog post
author:
  name: Peter
  bio: All about Peter and what he does and where he works
  img: https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80
tags:
  - nuxtjs
  - javascript
keywords: "nuxt, seo, optimization"
ogTitle: "My Amazing Site"
ogDescription: "This is my amazing site, let me tell you all about it."
ogImage: "https://example.com/image.png"
twitterTitle: "My Amazing Site"
twitterImage: "https://example.com/image.png"
twitterCard: "summary_large_image"
*/
