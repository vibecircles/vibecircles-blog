export const revalidate = 60; // 1 minute

import { BlogPostList } from "@/components/BlogPostList";
import { PostPagination } from "@/components/PostPagination";
import { getOgImageUrl } from "@/lib/ogImage";
import { wisp } from "@/lib/wisp";
import { Metadata } from "next";
import { FilterBar } from "../components/FilterBar";
import { config } from "../config";

const { title, description } = config;

export const metadata: Metadata = {
  title: `${title} - Blog`,
  description,
  openGraph: {
    title: `${title} - Blog`,
    description,
    images: [getOgImageUrl(title)],
  },
};

export default async function Page(
  props: {
    searchParams?: Promise<{ query: string; page: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const result = await wisp.getPosts({
    limit: 6,
    query: searchParams?.query,
    page,
  });

  return (
    <>
      <div className="container mx-auto max-w-6xl px-4 pt-8">
        <div className="mb-8">
          <FilterBar active="latest" className="mx-4" />
        </div>
        <div className="mb-16">
          <BlogPostList posts={result.posts} />
        </div>
        <PostPagination
          pagination={result.pagination}
          className="mb-16"
          query={searchParams?.query}
        />
      </div>
    </>
  );
}
