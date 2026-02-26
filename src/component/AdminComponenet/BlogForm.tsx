import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ArrowLeft,
  BookOpen,
  Save,
  ImageIcon,
  Sparkles,
  Pen,
  Clock,
} from "lucide-react";
import Button from "../../../Component/Button/Button";
import ImageUpload from "../../../Component/ImageUpload/ImageUpload";
import { useRouter } from "next/navigation";

interface BlogPostAttributes {
  id?: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  authorBio: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

interface BlogFormProps {
  initialData?: BlogPostAttributes;
  onSubmit?: (data: BlogPostAttributes) => void;
}

const BlogForm = ({ initialData, onSubmit }: BlogFormProps) => {
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: initialData || {
      title: "",
      excerpt: "",
      content: "",
      author: "",
      authorImage: "",
      authorBio: "",
      date: "",
      readTime: "",
      category: "",
      image: "",
      tags: [],
    },
  });

  const imageUrl = watch("image");
  const isEditing = !!initialData;

  const handleFormSubmit = async (data: any) => {
    setIsSaving(true);

    if (typeof data.tags === "string") {
      data.tags = data.tags
        .split(",")
        .map((t: string) => t.trim())
        .filter(Boolean);
    }

    await new Promise((resolve) => setTimeout(resolve, 800));

    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log("Form data:", data);
    }

    setIsSaving(false);
  };

  const handleImageChange = (url: string) => {
    setValue("image", url);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push("/admin/blog")}
          className="inline-flex items-center gap-2 text-base font-medium text-gray-600 hover:text-primary-800 mb-5 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:text-primary-800 group-hover:-trangray-x-1 transition-transform" />
          Back to Blog
        </button>

        {/* Blog Form */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden">
          {/* Blog Form Header */}
          <div className="border-b border-gray-100 bg-linear-to-br from-primary-600 to-primary-800 p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shrink-0">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white">
                  {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
                </h1>
                <p className="text-primary-50 text-base">
                  {isEditing
                    ? "Update your blog post and publish changes"
                    : "Write a new article for your blog"}
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="p-8 md:p-10"
          >
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Right Side */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Post Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0">
                        <Sparkles className="w-5 h-5 text-primary-600" />
                      </div>
                      <h2 className="text-lg font-semibold text-primary-600">
                        Post Content
                      </h2>
                    </div>

                    <div className="space-y-6">
                      {/* Title */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                            Title
                            <span className="text-red-500">*</span>
                          </label>
                        </div>
                        <input
                          {...register("title")}
                          placeholder="Enter blog post title"
                          required
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-600"
                        />
                      </div>

                      {/* Excerpt */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                            Excerpt
                          </label>
                          <span className="text-xs text-primary-600 italic">
                            Brief summary
                          </span>
                        </div>
                        <textarea
                          {...register("excerpt")}
                          rows={3}
                          placeholder="A brief summary of your blog post..."
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-600"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                            Content
                          </label>
                          <span className="text-xs text-primary-600 italic">
                            Markdown supported
                          </span>
                        </div>
                        <textarea
                          {...register("content")}
                          rows={5}
                          placeholder="Write your blog content here..."
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 font-mono text-sm focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Author Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0">
                        <Pen className="w-5 h-5 text-primary-600" />
                      </div>
                      <h2 className="text-lg font-semibold text-primary-600">
                        Author Information
                      </h2>
                    </div>
                    <div className="space-y-6">
                      {/* Author Name */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                            Author Name
                          </label>
                        </div>
                        <input
                          {...register("author")}
                          placeholder="Author name"
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-600"
                        />
                      </div>

                      {/* Auther Image */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                              Author Image URL
                            </label>
                          </div>
                          <ImageUpload
                            value={imageUrl}
                            onChange={handleImageChange}
                          />
                        </div>
                      </div>

                      {/* Author Bio */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                            Author Bio
                          </label>
                        </div>
                        <textarea
                          {...register("authorBio")}
                          rows={2}
                          placeholder="Brief author biography..."
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 resize-none focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left Side */}
                <div className="space-y-8">
                  {/* Featured Image */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0">
                        <ImageIcon className="w-5 h-5 text-primary-600" />
                      </div>
                      <h2 className="text-lg font-semibold text-primary-600">
                        Blog Post Image
                      </h2>
                    </div>

                    <ImageUpload
                      value={imageUrl}
                      onChange={handleImageChange}
                    />
                  </div>

                  {/* Post Details */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0">
                        <Clock className="w-5 h-5 text-primary-600" />
                      </div>
                      <h2 className="text-lg font-semibold text-primary-600">
                        Post Details
                      </h2>
                    </div>
                    <div className="space-y-6">
                      {/* Publication Date */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                            Publication Date
                          </label>
                        </div>
                        <input
                          {...register("date")}
                          placeholder="Feb 10, 2026"
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-600"
                        />
                      </div>

                      {/* Read Time */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                            Read Time
                          </label>
                        </div>
                        <input
                          {...register("readTime")}
                          placeholder="8 min read"
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-600"
                        />
                      </div>

                      {/* Category */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                            Category
                          </label>
                        </div>
                        <input
                          {...register("category")}
                          placeholder="e.g., Technology"
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-600"
                        />
                      </div>

                      {/* Tags */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                            Tags
                          </label>
                          <span className="text-xs text-primary-600 italic">
                            Comma separated
                          </span>
                        </div>
                        <input
                          {...register("tags")}
                          defaultValue={initialData?.tags?.join(", ")}
                          placeholder="blog, tutorial, guide"
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Form Footer */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between gap-4">
              <Button
                variant="outline"
                type="button"
                size="lg"
                onClick={() => router.push("/admin/blog")}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                type="submit"
                disabled={isSaving}
                className="gap-2"
                size="lg"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Publishing...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    {isEditing ? "Update Post" : "Publish Post"}
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
