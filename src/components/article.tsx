import { Divider } from "@/components/divider";
import { notFound } from "next/navigation";
import { Separator } from "./separator";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils";
import { MDX } from "@/mdx";

export async function Article({ id }: { id: string }) {
  const { mdx, data } = await MDX(id).catch(notFound);
  return (
    <article className="pros flex flex-col gap-2">
      <h2 className="text-5xl">{data.title}</h2>
      <address className="text-xl font-medium not-italic">
        By {data.authors.join(", ")}
      </address>
      {mdx}
    </article>
  );
}

Article.Link = (p: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link
    href={p.href ?? ""}
    prefetch={false}
    {...p}
    className={cn(
      "font-semibold text-auto+ transition-colors duration-150 ease-linear hover:text-clr focus-visible:text-clr",
      "group-[.sup]/sup:font-medium group-[.sup]/sup:text-clr group-[.sup]/sup:hover:underline",
    )}
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
    className={cn(
      "group-[.bq]/bq:before:content-[open-quote] group-[.bq]/bq:after:content-[close-quote]",
    )}
  />
);

Article.Blockquote = (p: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote
    {...p}
    className="group/bq bq flex flex-col gap-2 border-l-[0.25rem] border-clr py-4 pl-4 font-medium italic"
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
  <Divider {...p} sticky className="py-4 font-mono" />
);

Article.Hr = () => <Separator className="my-2" />;
