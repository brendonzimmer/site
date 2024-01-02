import { getMDXComponent } from "mdx-bundler/client";
import { bundleMDX } from "mdx-bundler";
import fs from "fs/promises";

export async function MDX(id: string) {
  const bundle = await bundleMDX<{ authors: string[]; title: string }>({
    source: await fs.readFile(`./src/posts/${id}.mdx`, "utf8"),
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
};
