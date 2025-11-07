import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  typedRoutes: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      [
        "@shikijs/rehype",
        { theme: { light: "github-light", dark: "github-dark" } },
      ],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
