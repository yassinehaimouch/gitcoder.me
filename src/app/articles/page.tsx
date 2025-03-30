import React from "react";
import { Metadata } from "next";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "../../../.contentlayer/generated";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Articles | Yassine Haimouch",
  description: "Read my thoughts on software development, design, and more.",
};

const ArticleCard = (post: Post) => {
  return (
    <article className="py-5">
      <Link href={post.url} className="group relative block">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div className="flex-1">
            <h2 className="text-secondary font-medium text-lg group-hover:text-secondary/90 transition-all duration-300 ease-in-out">
              {post.title}
            </h2>

            {post.summary && (
              <p className="mt-1.5 text-primary text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 pr-4 line-clamp-1">
                {post.summary}
              </p>
            )}
          </div>

          <time
            dateTime={post.date}
            className="text-xs sm:text-sm text-muted font-mono whitespace-nowrap"
          >
            {format(parseISO(post.date), "MMM d, yyyy")}
          </time>
        </div>

        {/* Animated hover indicator */}
        <span className="absolute left-0 -ml-4 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:h-12 transition-all duration-300 ease-out"></span>
      </Link>

      {/* Elegant separator */}
      <div className="h-px bg-border opacity-40 mt-5"></div>
    </article>
  );
};

const Articles = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="max-w-3xl mx-auto mt-16 mb-32">
      <h1 className="text-xl md:text-2xl font-bold tracking-tight mb-10 text-secondary relative inline-block">
        Articles
        <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent opacity-70"></span>
      </h1>

      {posts.length === 0 ? (
        <p className="text-primary italic">
          No articles published yet. Check back soon!
        </p>
      ) : (
        <div className="space-y-1 pl-4">
          {posts.map((post) => (
            <ArticleCard key={post._id} {...post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Articles;
