import React from "react";
import BlogDetailsComponents from "./BlogDetailsComponent";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Blog Details - Import Export",
    description: "Learn more about blog details our import export business.",
}

const BlogDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return <BlogDetailsComponents blogId={id} />;
};

export default BlogDetailsPage;
