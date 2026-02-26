import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { AllBlogData } from "@/data/blogData";
import AnimateOnScroll from "../../../Component/AnimateOnScroll/AnimateOnScroll";
import AllIconComponent from "../../../public/AllIconComponent";

const BlogAndNews = () => {
    const latestPosts = AllBlogData.slice(0, 3);

    return (
        <div className="w-full">

            {/* Header */}
            <div className="text-center mb-8">
                <AnimateOnScroll animation="animate__fadeInUp" delay="delay-500ms" className="animate__slow-2s">
                    <div className="flex items-center justify-center mb-2">
                        <AllIconComponent width={60} height={60} className="text-primary-600" icon="headerIcon" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 font-serif">
                        Latest Insights & News
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-primary-500 mx-auto mb-4 rounded-full"></div>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Stay updated with the latest trends, insights, and expert advice in the world of raw food exports
                    </p>
                </AnimateOnScroll>
            </div>

            {/* Blog Cards Grid */}
            <AnimateOnScroll animation="animate__fadeInUp" delay="delay-1500ms" className="animate__slow-2s">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {latestPosts.map((post) => (
                        <div
                            key={post.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform"
                        >
                            <div className="relative w-full h-48 md:h-56 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                                        <Tag size={12} />
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-6 py-4">
                                {/* Meta Information */}
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} />
                                        {post.readTime}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-800 transition-colors">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                                    <img
                                        src={post.authorImage}
                                        alt={post.author}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                                        <p className="text-gray-500 text-xs line-clamp-1">{post.authorBio}</p>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.slice(0, 2).map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Read More Link */}
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center gap-2 text-primary-800 font-semibold text-sm group-hover:gap-3 transition-all group-hover:underline duration-500"
                                >
                                    Read Full Article
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>

                            </div>

                        </div>
                    ))}
                </div>
            </AnimateOnScroll>

            {/* View All Button */}
            <AnimateOnScroll animation="animate__zoomIn" delay="delay-2000ms" className="animate__slow-2s">
                <div className="text-center mt-6 md:mt-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-2 bg-primary-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        View All Articles
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </AnimateOnScroll>

        </div>
    );
};

export default BlogAndNews;