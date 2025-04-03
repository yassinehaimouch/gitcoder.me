import React from "react";
import { format, parseISO } from "date-fns";
import { Post } from "../../.contentlayer/generated";
import Link from "next/link";

const ArticleCard = (post: Post) => {
  return (
    <article className="py-5">
      <Link href={post.url} className="group relative block">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div className="flex-1">
            <h2 className="text-secondary font-bold text-lg group-hover:text-secondary/90 transition-all duration-300 ease-in-out">
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
export default ArticleCard;
