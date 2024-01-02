import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function If(
  props:
    | {
        this: boolean;
        then: React.ReactNode;
        else?: React.ReactNode;
      }
    | {
        this: boolean;
        children: React.ReactNode;
      },
) {
  if ("then" in props) {
    if (props.this) return props.then;
    return props.else ?? null;
  }

  if (props.this) return props.children;
  return null;
}

import { getMDXComponent } from "mdx-bundler/client";
import { bundleMDX } from "mdx-bundler";
import remarkGFM from "remark-gfm";
import fs from "fs/promises";

export async function MDX(id: string) {
  const bundle = await bundleMDX<{ authors: string[]; title: string }>({
    source: await fs.readFile(`./src/posts/${id}.mdx`, "utf8"),
    mdxOptions: ({ remarkPlugins, rehypePlugins }) => ({
      remarkPlugins: [...(remarkPlugins ?? []), remarkGFM],
      rehypePlugins: [...(rehypePlugins ?? [])],
    }),
  });

  return {
    mdx: getMDXComponent(bundle.code)({ components }),
    data: bundle.frontmatter,
  };
}

import type { MDXContentProps } from "mdx-bundler/client";
import { Section } from "@/components/section";
import { Article } from "@/components/article";

const components: MDXContentProps["components"] = {
  Section,
  Divider: (p) => Article.Divider(p),
  a: (p) => Article.Link(p),
  h1: () => Article.DoNotUse(),
  h2: (p) => Article.H2(p),
  h3: (p) => Article.H3(p),
  h4: (p) => Article.H4(p),
  h5: () => Article.DoNotUse(),
  h6: () => Article.DoNotUse(),
  p: (p) => Article.P(p),
  blockquote: (p) => Article.Blockquote(p),
  pre: (p) => Article.Pre(p),
  code: (p) => Article.Code(p),
  ul: (p) => Article.Ul(p),
  ol: (p) => Article.Ol(p),
  li: (p) => Article.Li(p),
  hr: () => Article.Hr(),
  img: (p) => Article.Img(p),
  sup: (p) => <sup {...p} className="sup group/sup text-sm font-light" />,

  table: () => Article.DoNotUse(),
  section: (p) => (
    <section {...p} className={cn(p.className, "group/sec sec")} />
  ),
};
