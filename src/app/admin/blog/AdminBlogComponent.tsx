"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Pencil,
  Trash2,
  Loader2,
  FileText,
  Calendar,
  User,
  Tag,
} from "lucide-react";
// import type { BlogPostAttributes } from "@/lib/db/types";

interface AdminBlogComponentProps {
  initialPosts: any[];
}

const AdminBlogComponent = ({ initialPosts }: AdminBlogComponentProps) => {
  const [posts, setPosts] = useState<any[]>(
    Array.isArray(initialPosts) ? initialPosts : [],
  );
  const [idToDelete, setIdToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const confirmDelete = async () => {
    if (!idToDelete) return;
    setIsDeleting(true);
    try {
      await fetch(`/api/admin/blog/${idToDelete}`, { method: "DELETE" });
      setPosts(posts.filter((p) => p.id !== idToDelete));
      setIdToDelete(null);
    } catch (error) {
      console.error("Deletion failed:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Delete Modal */}
      {idToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-primary-950/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => !isDeleting && setIdToDelete(null)}
          />
          <div className="relative z-10 bg-white rounded-[2.5rem] p-10 max-w-sm w-full shadow-2xl border border-gray-100 animate-in zoom-in-95 duration-300">
            <div className="absolute top-0 left-12 right-12 h-1.5 bg-red-500 rounded-b-full shadow-lg shadow-red-500/20" />

            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-red-100 transition-transform hover:rotate-12 duration-500">
              <Trash2 className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-3 tracking-tight">
              Delete Post?
            </h3>
            <p className="text-center text-gray-500 font-medium mb-10 leading-relaxed">
              This action is permanent and will remove the blog post from your
              site immediately.
            </p>
            <div className="flex gap-4">
              <button
                disabled={isDeleting}
                onClick={() => setIdToDelete(null)}
                className="flex-1 py-4 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-2xl text-sm font-bold transition-all duration-300 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                disabled={isDeleting}
                onClick={confirmDelete}
                className="flex-1 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-sm font-bold transition-all duration-300 shadow-xl shadow-red-600/20 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 disabled:opacity-50 group"
              >
                {isDeleting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Trash2 className="w-5 h-5 transition-transform group-hover:-rotate-12" />
                    Confirm
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Premium Header Card */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary-600 to-primary-800 p-6 shadow-xl shadow-primary-900/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-400/10 rounded-full -ml-16 -mb-16 blur-2xl" />

        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md border border-white/30">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-bold text-primary-50 tracking-[0.2em] uppercase opacity-80">
                Admin Console / Journal
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Blog Editorial
            </h1>
            <p className="text-primary-50 font-medium text-md opacity-90 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              {posts.length} Professional articles published
            </p>
          </div>

          <Link
            href="/admin/blog/new"
            className="group flex items-center justify-center gap-3 px-6 py-2 bg-white text-primary-700 hover:bg-primary-50 rounded-full text-sm font-black transition-all duration-300 shadow-2xl shadow-black/10 hover:-translate-y-1 active:scale-95 shrink-0"
          >
            <Plus className="w-6 h-6 transition-transform group-hover:rotate-90 duration-500" />
            Create New Article
          </Link>
        </div>
      </div>

      {/* Main Grid Content */}
      {Array.isArray(posts) && posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => {
            return (
              <div
                key={post.id}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-100"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-48 bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-primary-200">
                      <FileText className="w-12 h-12" />
                    </div>
                  )}

                  {/* Actions Overlay */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      href={`/admin/blog/${post.id}`}
                      className="p-2.5 bg-white/90 backdrop-blur-sm text-gray-600 hover:text-primary-600 rounded-xl shadow-lg hover:shadow-primary-100 transition-all"
                      title="Edit Post"
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => setIdToDelete(post.id)}
                      className="p-2.5 bg-white/90 backdrop-blur-sm text-gray-600 hover:text-red-500 rounded-xl shadow-lg hover:shadow-red-100 transition-all"
                      title="Delete Post"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg bg-primary-600 backdrop-blur-sm text-white`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Author & Meta Row */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      {post.authorImage ? (
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                          <User className="w-3 h-3" />
                        </div>
                      )}
                      <span className="text-xs font-medium text-gray-700">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-medium text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                      })}
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.slice(0, 3).map((tag: any) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-[8px] font-medium uppercase tracking-wider group-hover:bg-primary-600/10 group-hover:text-primary-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-[8px] font-medium">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-24 h-24 bg-linear-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center mb-8 border border-primary-600 shadow-xl shadow-primary-500/5 transition-transform hover:scale-110 duration-500">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-black text-primary-900 mb-3 tracking-tight">
            No Editorial Content
          </h2>
          <p className="text-gray-500 font-medium max-w-sm mx-auto leading-relaxed mb-6">
            Your blog is currently waiting for professional insights. Start
            sharing your export-import expertise today.
          </p>
          <Link
            href="/admin/blog/new"
            className="flex items-center gap-3 px-8 py-3 bg-primary-950 text-white hover:bg-primary-900 rounded-2xl text-sm font-black transition-all duration-300 shadow-xl shadow-primary-950/20 hover:-translate-y-1 active:scale-95"
          >
            <Plus className="w-5 h-5" />
            Write First Post
          </Link>
        </div>
      )}
    </div>
  );
};

export default AdminBlogComponent;
