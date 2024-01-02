import type { MDXContentProps } from "mdx-bundler/client";
import { getMDXComponent } from "mdx-bundler/client";
import { Divider } from "@/components/divider";
import { Section } from "@/components/section";
import { notFound } from "next/navigation";
import { Separator } from "./separator";
import { bundleMDX } from "mdx-bundler";
import Image from "next/image";
import { cn } from "@/utils";
import Link from "next/link";
import fs from "fs/promises";

export async function MDX(id: string) {
  const bundle = await bundleMDX<{ authors: string[]; title: string }>({
    source: await fs.readFile(`./src/posts/${id}.mdx`, "utf8"),
  }).catch(notFound);

  return {
    mdx: getMDXComponent(bundle.code)({ components: article }),
    data: bundle.frontmatter,
  };
}

const article: MDXContentProps["components"] = {
  Section,
  Divider: (p) => <Divider {...p} sticky className="py-4 font-mono" />,
  a: (p) => (
    <Link
      {...p}
      href={p.href ?? ""}
      prefetch={false}
      ref={undefined}
      className={cn(
        "font-semibold text-auto+ transition-colors duration-150 ease-linear hover:text-clr focus-visible:text-clr",
        "group-[.sup]/sup:font-medium group-[.sup]/sup:text-clr group-[.sup]/sup:hover:underline",
      )}
    />
  ),
  h1: () => DoNotUse(),
  h2: (p) => <h2 className="text-2xl font-bold leading-[1.33]" {...p} />,
  h3: (p) => <h3 className="text-xl font-semibold leading-[1.6]" {...p} />,
  h4: (p) => <h4 className="font-semibold leading-[1.5]" {...p} />,
  h5: () => DoNotUse(),
  h6: () => DoNotUse(),
  p: (p) => (
    <p
      {...p}
      className="group-[.bq]/bq:before:content-[open-quote] group-[.bq]/bq:after:content-[close-quote]"
    />
  ),
  blockquote: (p) => (
    <blockquote
      {...p}
      className="group/bq bq flex flex-col gap-2 border-l-[0.25rem] border-clr py-4 pl-4 font-medium italic"
    />
  ),
  code: (p) => (
    <code
      {...p}
      className="rounded bg-[#afb8c133] px-1 py-0.5 text-sm font-semibold text-auto+ group-[.pre]/pre:bg-transparent group-[.pre]/pre:p-0 group-[.pre]/pre:font-normal group-[.pre]/pre:text-auto--"
    />
  ),
  pre: (p) => (
    <pre
      {...p}
      className="pre group/pre rounded-md bg-[#1f2937] px-[1.15rem] py-[0.85rem] text-sm font-normal"
    />
  ),
  ul: (p) => <ul {...p} className="list-disc pl-7" />,
  ol: (p) => <ol {...p} className="list-decimal pl-7" />,
  li: (p) => <li {...p} className="marker:text-clr" />,
  hr: () => <Separator className="my-2" />,
  img: ({ alt, src }) => (
    <Image
      alt={alt ?? ""}
      src={src ?? ""}
      width={1000}
      height={1000}
      className="w-full rounded"
    />
  ),
};

const DoNotUse = () => (
  <p className="bg-pink-600 font-bold text-auto--">Do not use this!</p>
);
