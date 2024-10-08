import React, { FC } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BlurImage from "@/components/BlurImage";
import { TracingBeam } from "@/components/tracing-beam";

interface ArticleProps {
  params: { slug: string };
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: ArticleProps) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  let { title, date: publishedTime, summary: description } = post;
  let ogImage = `/og?title=${title}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/articles/${post._raw.flattenedPath}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `/articles/${post._raw.flattenedPath}`,
      images: [
        {
          url: ogImage,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
};

const page: FC<ArticleProps> = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  return (
    <TracingBeam>
      <MaxWidthWrapper className="max-w-3xl mb-64 mt-8 md:mt-16">
        <div className="flex items-center justify-between">
          <Link className="hover:text-slate-400 duration-300" href="/articles">
            ← Articles
          </Link>
          <time dateTime={post.date} className="mb-1 text-gray-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <h1 className="text-[1.5rem] md:text-5xl font-bold my-5">
          {post.title}
        </h1>
        {post.image && (
          <div className="mb-10">
            <BlurImage
              src={post.image}
              height={1080}
              width={2280}
              alt={post.title}
            />
          </div>
        )}
        <article
          className="invert-svg prose mx-auto w-full max-w-3xl px-5 py-8 dark:prose-invert md:prose-xl prose-code:break-words prose-pre:bg-gray-900 prose-pre:leading-relaxed md:py-16 md:prose-code:break-normal"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </MaxWidthWrapper>
    </TracingBeam>
  );
};

export default page;
