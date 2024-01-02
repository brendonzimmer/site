import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import { Divider } from "@/components/divider";
import { Section } from "@/components/section";
import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs/promises";
import Image from "next/image";
import { Separator } from "./separator";

const components: MDXComponents = {
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

async function MDX(id: string) {
  return fs
    .readFile(`./src/posts/${id}.mdx`, "utf8")
    .then((s) => <MDXRemote options={{}} components={components} source={s} />)
    .catch(() => notFound());
}

export async function Article({ id }: { id: string }) {
  return (
    <article className="pros flex flex-col gap-2">{await MDX(id)}</article>
  );
}

Article.Link = (p: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link
    href={p.href ?? ""}
    prefetch={false}
    {...p}
    className="font-semibold text-auto+ transition-colors duration-150 ease-linear hover:text-clr focus-visible:text-clr"
  />
);

Article.H2 = (p: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className="text-2xl font-bold leading-[1.33]" {...p} />
);

Article.H3 = (p: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className="text-xl font-semibold leading-[1.6]" {...p} />
);

Article.H4 = (p: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4 className="font-semibold leading-[1.5]" {...p} />
);

Article.DoNotUse = () => (
  <p className="bg-pink-600 font-bold text-auto--">Do not use this!</p>
);

Article.P = (p: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    {...p}
    className="group-[.bq]/bq:before:content-[open-quote] group-[.bq]/bq:after:content-[close-quote]"
  />
);

Article.Blockquote = (p: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote
    {...p}
    className="group/bq bq border-l-[0.25rem] border-clr py-4 pl-4 font-medium italic"
  />
);

Article.Code = (p: React.HTMLAttributes<HTMLElement>) => (
  <code
    {...p}
    className="rounded bg-[#afb8c133] px-1 py-0.5 text-sm font-semibold text-auto+ group-[.pre]/pre:bg-transparent group-[.pre]/pre:p-0 group-[.pre]/pre:font-normal group-[.pre]/pre:text-auto--"
  />
);

Article.Pre = (p: React.HTMLAttributes<HTMLElement>) => (
  <pre
    {...p}
    className="pre group/pre rounded-md bg-[#1f2937] px-[1.15rem] py-[0.85rem] text-sm font-normal"
  />
);

Article.Ul = (p: React.HTMLAttributes<HTMLUListElement>) => (
  <ul {...p} className="list-disc pl-7" />
);

Article.Ol = (p: React.HTMLAttributes<HTMLOListElement>) => (
  <ol {...p} className="list-decimal pl-7" />
);

Article.Li = (p: React.HTMLAttributes<HTMLLIElement>) => (
  <li {...p} className="marker:text-clr" />
);

Article.Img = ({ alt, src }: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <Image
    alt={alt ?? ""}
    src={src ?? ""}
    width={1000}
    height={1000}
    className="w-full rounded"
  />
);

Article.Divider = (p: any) => (
  <Divider {...p} sticky className="py-4 font-mono backdrop-blur" />
);

Article.Hr = () => <Separator className="my-2" />;
