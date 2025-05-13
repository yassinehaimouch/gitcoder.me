import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allPosts } from "../../../../.contentlayer/generated";
import Image from "next/image";

interface ArticleProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = async ({ params }: ArticleProps) => {
  const { slug } = await params;
  const post = allPosts?.find((post) => post?._raw?.flattenedPath === slug);
  if (!post) notFound();

  const { title, date: publishedTime, summary: description } = post;
  const ogImage = `/og?title=${encodeURIComponent(title)}`;

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
          alt: title,
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

const ArticlePage = async ({ params }: ArticleProps) => {
  const { slug } = await params;
  const post = allPosts.find((post) => post?._raw?.flattenedPath === slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto mb-64 mt-8 md:mt-16 sm:px-6">
      <header className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <Link
            className="text-sm text-accent hover:text-accent/80 transition-colors duration-200 flex items-center gap-1"
            href="/articles"
          >
            <span className="inline-block mr-1">←</span>
            <span>Articles</span>
          </Link>
          <time dateTime={post.date} className="text-sm text-muted italic">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-4 text-secondary">
          {post.title}
        </h1>
      </header>

      {post.image && (
        <div className="relative w-full h-auto aspect-[16/9] rounded-lg overflow-hidden mb-10">
          <Image
            src={post.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover"
            alt={post.title}
          />
        </div>
      )}

      <article
        className="prose prose-sm mx-auto 
                  prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-secondary
                  prose-p:text-primary prose-li:text-primary prose-strong:text-primary
                  prose-a:text-accent prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                  prose-code:text-[#fe9f97] prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-lg
                  prose-img:rounded-lg prose-blockquote:text-[#e1dccc] prose-blockquote:border-border-hover
                  sm:prose-base md:prose-base
                  invert-svg"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  );
};

export default ArticlePage;
