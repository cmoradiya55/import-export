import React from "react";
import { Metadata } from "next";
import BlogComponent from "./BlogComponent";

export const metadata: Metadata = {
    title: "Blog - Import Export",
    description: "Learn more about our import export business.",
};

const BlogPage = () => {
    return (
        <BlogComponent />
    );
}

export default BlogPage;