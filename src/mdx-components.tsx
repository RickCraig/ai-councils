import type { MDXComponents } from "mdx/types";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { LifecycleDiagram } from "@/components/lifecycle-diagram";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    LifecycleDiagram,
    ...components,
  };
}
