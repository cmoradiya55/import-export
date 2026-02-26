"use client";
import BlogForm from "@/component/AdminComponenet/BlogForm";

const NewBlogPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-black">
        Create New Blog Post
      </h1>
      <BlogForm />
    </div>
  );
};

export default NewBlogPage;
