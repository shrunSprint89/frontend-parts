---
navTitle: Technical stack & decisions
navOrder: 1
title: Technical stack and decisions
description: A summary of technical decisions made for this website.
seo:
  title: Technical stack and decisions
  description: A summary of technical decisions made for this website.
  date: 2025-02-18
  image:
  alt: A summary of technical decisions made for this website.
  author: Sharan Selvaraj
  creator: Sharan Selvaraj
  keywords: "frontend-engineering, javascript-frameworks, web-development, technical-skills, framework-lifecycle, core-competencies, hiring-practices, software-engineering, react, angular, vue, web-standards, frontend-architecture, framework-agnostic"
  ogTitle: Technical stack and decisions
  ogDescription: A summary of technical decisions made for this website.
  ogImage:
  twitterTitle: Technical stack and decisions
  twitterImage:
  twitterCard: "summary_large_image"
  robots: "index, follow"
---

# Technical stack and decisions

Its always interesting to read engineering blogs and see how applications and websites are built based on the requirements. I thought it would be nice to start off this blog with a summary of technical decisions made for this website.

## Here are the requirements for this site roughly ordered by priority:

1. A **simple** content-driven website.
2. Responsive, mobile and low bandwidth friendly.
3. Ability to quickly add, modify and remove content.
4. SEO friendly and fast.
5. Extensively customizable if needed and easy to maintain and debug.
6. Font and colors suited for great reading experience, but nothing too fancy.
7. Can be deployed wherever needed, even on the edge if needed to reduce latency
8. Packageable, so the site skeleton can be reused.
9. Reasonably good community support and documentation.
10. Should be able to add a blog and more pages later.
11. Should be able to add authentication and other features like human-verification later.

### Content driven, SEO-friendly and fast:

The first three requirements usually bring Content Management Systems (CMS) to mind. But CMSs are usually heavy and pack in a lot of features that are not needed for this site. I was looking at deploying on something like Cloudflare Pages which is a serverless platform and wanted to have point 4 in the requirements. So I dropped the usual CMSs and looked at others.

### Customizable and easy to maintain, with good community support:

If you consider points 5 and 8, I could think of React and Vue ecosystems (leaving out Angular due to the extensive customization requirement).

### Responsive, mobile and low bandwidth friendly:

This is a must-have for any website. To have responsive and customizable components, I would need a lightweight CSS framework. Tailwind CSS is the most popular one. But I didn't want to build everything from scratch. So I looked at [DaisyUI](https://daisyui.com/){target="\_blank"} which is a Tailwind CSS component library.

### Font and colors suited for great reading experience:

DaisyUI provided inbuilt themes which I could use to help the user customize the colors. As for the fonts, I used Google Fonts, but did some reading on [font pairing](https://webflow.com/blog/font-pairing){target="\_blank"} to make sure the fonts are suited for great reading experience. Another thing to note here is that this being a technical content website, I would need to be able to display code snippets. So the stack should support code highlighting as well.

## Tech Stack and Tools

### Frontend

- [Nuxt 3](https://nuxt.com/){target="\_blank"}
- [DaisyUI](https://daisyui.com/){target="\_blank"}
- [Google Fonts](https://fonts.google.com/){target="\_blank"}
- [Shiki](https://shiki.matsu.io/){target="\_blank"}
- [Icones](https://icones.js.org/){target="\_blank"}

### Backend

- [Nuxt Content](https://content.nuxt.com/){target="\_blank"}
- [Cloudflare D1](https://developers.cloudflare.com/d1/){target="\_blank"}

### Repository, CI/CD, Hosting and Deployment

- [Cloudflare Pages](https://pages.cloudflare.com/){target="\_blank"}
- [GitHub](https://github.com/){target="\_blank"}

### Development tools

- [VS Code](https://code.visualstudio.com/){target="\_blank"} with the following extensions (relevant ones):
  - [Vue support for VS Code](https://marketplace.visualstudio.com/items?itemName=Vue.volar){target="\_blank"}
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss){target="\_blank"}
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode){target="\_blank"}
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint){target="\_blank"}
  - [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss){target="\_blank"}
  - [MDC - Syntax highlighting and colon matching for MDC](https://open-vsx.org/vscode/item?itemName=Nuxt.mdc){target="\_blank"}
  - [Markdown Editor](https://open-vsx.org/vscode/item?itemName=zaaack.markdown-editor){target="\_blank"}
  - [Continue](https://open-vsx.org/vscode/item?itemName=Continue.continue){target="\_blank"}
- [Git](https://git-scm.com/){target="\_blank"}
- [GitHub CLI](https://cli.github.com/){target="\_blank"}
- [Continue](https://continue.dev/){target="\_blank"}
