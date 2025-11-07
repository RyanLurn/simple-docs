import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  // headings
  h1: ({ children }) => (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-extrabold tracking-tight first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="scroll-m-20 text-xl font-bold tracking-tight">{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="scroll-m-20 text-base font-semibold tracking-tight">
      {children}
    </h6>
  ),
  // Paragraph
  p: ({ children }) => <p className="leading-7 not-first:mt-6">{children}</p>,
  // Blockquote
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  ),
  // List
  ul: ({ children }) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
  ),
  // Emphasis
  em: ({ children }) => <em className="italic">{children}</em>,
  // Strong
  strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  // Link
  a: ({ children, href }) => (
    <Link className="underline cursor-pointer" href={href}>
      {children}
    </Link>
  ),
  // Strikethrough
  del: ({ children }) => <del className="line-through">{children}</del>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
