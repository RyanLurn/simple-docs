import createMDX from "@next/mdx";
import type { RehypeShikiOptions } from "@shikijs/rehype";
import type { NextConfig } from "next";

const shikiOptions: RehypeShikiOptions = {
  langs: [
    "html",
    "css",
    "javascript",
    "typescript",
    "tsx",
    "jsx",
    "mdx",
    "md",
    "yaml",
    "json",
    "jsonc",
    "shellscript",
  ],
  themes: { light: "github-light", dark: "github-dark" },
  inline: "tailing-curly-colon",
};

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
    rehypePlugins: [["@shikijs/rehype", shikiOptions]],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
