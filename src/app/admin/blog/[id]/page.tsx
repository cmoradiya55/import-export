'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import type { BlogPostAttributes } from '@/lib/db/types';
import BlogForm from '@/component/AdminComponenet/BlogForm';

const EditBlogPage = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState<BlogPostAttributes | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogPost(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-indigo-400" />
      </div>
    );
  }
  if (!blogPost) return <div className="text-gray-400 text-center py-20">Blog post not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-white">Edit Blog Post</h1>
      <BlogForm initialData={blogPost} />
    </div>
  );
}

export default EditBlogPage;