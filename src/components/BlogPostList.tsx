import Image from "next/image";
import Link from "next/link";
import type { GetPostsResult } from "@wisp-cms/client";
import { formatFullDate } from "@/lib/date";

export const BlogPostList = ({ posts }: { posts: GetPostsResult["posts"] }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
      {posts.map((post) => (
        <article 
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group" 
          key={post.id}
        >
          <Link href={`/post/${post.slug}`} className="block">
            <div className="aspect-[16/9] relative overflow-hidden">
              {post.image ? (
                <Image
                  alt={post.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  src={post.image}
                  fill
                />
              ) : (
                <Image 
                  src="/placeholder.jpg" 
                  alt="placeholder" 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  fill 
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
          
          <div className="p-6">
            <h2 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h2>
            
            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
              {post.description}
            </p>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.image || "/placeholder.jpg"}
                  alt={post.author.name || "Author"}
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-sm text-gray-900">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatFullDate(post.publishedAt || post.createdAt)}
                  </div>
                </div>
              </div>
              
              <Link 
                href={`/post/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
              >
                Read more →
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
