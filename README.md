

## Technologies

- [Next.js 15](https://nextjs.org/blog/next-15) using App Router, TypeScript & Turbopack
- [Wisp](https://wisp.blog/?utm_source=github&utm_medium=web&utm_campaign=nextjs-blog-cms-wisp) to manage blog posts
- [Tailwind CSS](https://tailwindcss.com/) for CSS framework
- [Shadcn UI](https://ui.shadcn.com/) for UI components
- [ESLint](https://eslint.org/) for static analysis
- [TypeScript](https://www.typescriptlang.org/) for type safety
- Font optimization with [next/font](https://nextjs.org/docs/app/api-reference/components/font)
## Choose from Different Themes

![Multiple themes](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/cm28hgkdk000wmu7nocgku1dl/61d58c4a-b9e8-438b-bf57-314a4bb350c2.png/public)

The design is flexible, allowing you to choose from multiple themes to suit your brand. Head over to [https://corporate-blog-demo.wisp.blog/theme](https://corporate-blog-demo.wisp.blog/theme) to select preview a wide range of themes or generate your own.

Simply copy the Tailwind Class onto the [FullWidthHeader Component](/src/components/FullWidthHeader.tsx) to apply the theme to the entire blog.


## Quick Start Guide

First, install the dependencies:

```bash
npm i --legacy-peer-deps
```

**IMPORTANT**: There's a dependency (next-themes) that's not upgraded to React 19 so you will need to add the `--legacy-peer-deps` into the install command. Make sure that Vercel's install command is set to use `npm i --legacy-peer-deps` too!

Then, copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Note: You will need to populate the `NEXT_PUBLIC_BLOG_ID` variable with the Blog ID obtained from wisp after you've created an account.

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

