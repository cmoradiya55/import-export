import React from "react";
import BlogDetailsComponents from "./BlogDetailsComponent";

const BlogDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return <BlogDetailsComponents blogId={id} />;
};

export default BlogDetailsPage;
