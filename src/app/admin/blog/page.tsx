import { Metadata } from "next";
import AdminBlogComponent from "./AdminBlogComponent";
// import { BlogPost, initDB } from "@/lib/db";
import { AllBlogData } from "@/data/blogData";

export const metadata: Metadata = {
  title: "Admin Blog - Import Export",
  description: "Learn more about admin blog page export business.",
};

const BlogPage = async () => {
  let initialPosts = AllBlogData;
  // try {
  //   await initDB();
  //   const data = await BlogPost.findAll();
  //   initialPosts = JSON.parse(JSON.stringify(data));
  // } catch (error) {
  //   console.error("Failed to fetch blog posts:", error);
  // }

  return <AdminBlogComponent initialPosts={initialPosts} />;
};

export default BlogPage;
