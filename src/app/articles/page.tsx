import React from "react";
import { Metadata } from "next";
import { compareDesc } from "date-fns";
import { allPosts } from "../../../.contentlayer/generated";
import ArticleCard from "@/components/articlecard";

export const metadata: Metadata = {
  title: "Articles | Yassine Haimouch",
  description: "Read my thoughts on software development, design, and more.",
};

const Articles = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="max-w-3xl mx-auto mt-16 mb-32">
      <h1 className="text-xl md:text-2xl font-bold tracking-tight mb-10 text-secondary relative inline-block">
        Articles
        <span className="absolute -bottom-2 left-0 w-14 h-1 rounded-full bg-accent"></span>
      </h1>

      {posts.length === 0 ? (
        <p className="text-primary italic">
          No articles published yet. Check back soon!
        </p>
      ) : (
        <div className="space-y-1">
          {posts.map((post) => (
            <ArticleCard key={post._id} {...post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Articles;
