import type { MDXComponents } from "mdx/types";

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
};

export function useMDXComponents(): MDXComponents {
  return components;
}
