import { AllBlogData } from "@/src/utils/blogData";
import React from "react";
import Link from "next/link";
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin, Mail, Eye, TrendingUp, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

const BlogDetailsComponents = ({ blogId }: { blogId: string }) => {
    const blog = AllBlogData.find(b => b.id === blogId);

    // Get related blogs (same category, excluding current blog)
    const relatedBlogs = AllBlogData
        .filter(b => b.category === blog?.category && b.id !== blogId)
        .slice(0, 3);

    // If no related blogs in same category, get any other blogs
    const finalRelatedBlogs = relatedBlogs.length > 0
        ? relatedBlogs
        : AllBlogData.filter(b => b.id !== blogId).slice(0, 3);

    if (!blog) {
        return (
            <div className="min-h-screen bg-linear-to-br from-primary-50 via-white to-primary-50 flex flex-col items-center justify-center text-center px-4">
                <div className="max-w-md">
                    <div className="relative">
                        <div className="w-32 h-32 bg-linear-to-br from-primary-100 to-primary-200 rounded-3xl flex items-center justify-center mx-auto mb-6 transform rotate-6 shadow-xl">
                            <div className="transform -rotate-6">
                                <svg className="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Oops! Article Not Found</h2>
                    <p className="text-gray-600 mb-8 text-lg">The article you're looking for doesn't exist or may have been moved.</p>
                    <Link href="/blog">
                        <button className="px-8 py-4 bg-linear-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                            <ArrowLeft className="w-5 h-5" />
                            Back to Blog
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white">

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-linear-to-br from-primary-600 via-primary-700 to-primary-600">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                            }}></div>
                    </div>
                </div>

                <div className="relative container mx-auto px-4 py-12 md:py-30 mb-12">
                    {/* Back Button */}
                    <Link href="/blog">
                        <button className="my-8 inline-flex items-center gap-2 text-white/90 group backdrop-blur-sm px-5 py-2.5 hover:scale-110 transition-transform duration-300">
                            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium text-lg">Back</span>
                        </button>
                    </Link>

                    <div className="max-w-4xl mx-auto text-center text-white">
                        {/* Category Badge */}
                        <div className="mb-4 inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">{blog.category}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight font-serif">
                            {blog.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 mb-4">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm font-medium">{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm font-medium">{blog.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                <Eye className="w-4 h-4" />
                                <span className="text-sm font-medium">2.4k views</span>
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 mb-30">
                            <img
                                src={blog.authorImage}
                                alt={blog.author}
                                className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                            />
                            <div className="text-left">
                                <p className="font-bold text-lg">{blog.author}</p>
                                <p className="text-sm text-white/80">{blog.authorBio}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute -bottom-1 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>


            <section className="container mx-auto space-y-6">

                {/* Featured Image */}
                <div className="max-w-3xl mx-auto mt-12 mb-12">
                    <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                        <div className="relative h-100 md:h-125">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 pb-20">
                    {/* Main Content */}
                    <article className="lg:col-span-8 mt-8">
                        {/* Excerpt Card */}
                        <div className="relative mb-12 overflow-hidden rounded-2xl bg-linear-to-br from-primary-50 to-primary-100/50 border-l-4 border-primary-600 shadow-lg">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full -mr-16 -mt-16"></div>
                            <div className="relative p-4">
                                <svg className="w-8 h-8 text-primary-700 mb-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-md text-gray-800 leading-relaxed font-medium italic">
                                    "{blog.excerpt}"
                                </p>
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none mb-12">
                            <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                                {blog.content.split("\n").map((paragraph, index) => {
                                    if (paragraph.startsWith("# ")) {
                                        return (
                                            <h1
                                                key={index}
                                                className="text-2xl font-bold text-gray-900 mt-8 mb-2"
                                            >
                                                {paragraph.substring(2)}
                                            </h1>
                                        );
                                    }

                                    if (paragraph.startsWith("## ")) {
                                        return (
                                            <h2
                                                key={index}
                                                id={paragraph.substring(3).toLowerCase().replace(/\s+/g, "-")}
                                                className="text-xl font-semibold text-primary-900 mt-4 mb-2 flex items-center gap-2 scroll-mt-20"
                                            >
                                                <span className="w-1 h-8 bg-primary-600"></span>
                                                {paragraph.substring(3)}
                                            </h2>
                                        );
                                    }

                                    if (paragraph.startsWith("### ")) {
                                        return (
                                            <h3
                                                key={index}
                                                className="text-lg font-semibold text-gray-700 mt-1 mb-1"
                                            >
                                                {paragraph.substring(4)}
                                            </h3>
                                        );
                                    }

                                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                                        return (
                                            <p
                                                key={index}
                                                className="font-semibold text-gray-900 mt-1 mb-1"
                                            >
                                                {paragraph.substring(2, paragraph.length - 2)}
                                            </p>
                                        );
                                    }

                                    if (paragraph.startsWith("- ")) {
                                        return (
                                            <li
                                                key={index}
                                                className="ml-5 text-gray-700 flex items-start gap-1 text-sm"
                                            >
                                                <ChevronRight className="w-4 h-4 text-primary-600 shrink-0" />
                                                <span>{paragraph.substring(2)}</span>
                                            </li>
                                        );
                                    }

                                    if (paragraph.startsWith("*") && paragraph.endsWith("*")) {
                                        return (
                                            <p
                                                key={index}
                                                className="italic text-gray-600 ml-4 bg-gray-50 px-4 py-3 rounded-md border-l-2 border-gray-300 text-sm"
                                            >
                                                {paragraph.substring(1, paragraph.length - 1)}
                                            </p>
                                        );
                                    }

                                    if (paragraph.trim()) {
                                        return (
                                            <p
                                                key={index}
                                                className="text-gray-700 leading-relaxed mb-3"
                                            >
                                                {paragraph}
                                            </p>
                                        );
                                    }

                                    return null;
                                })}
                            </div>
                        </div>

                        {/* Tags Section */}
                        <div className="bg-primary-50 border border-primary-200 rounded-2xl p-4 mb-8 shadow-sm">
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="flex items-center gap-2 text-primary-900">
                                    <Tag className="w-5 h-5" />
                                    <span className="text-sm font-semibold">Topics:</span>
                                </div>
                                {blog.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full border border-primary-200 hover:bg-primary-100 hover:text-primary-700 hover:border-primary-300 transition-all duration-300 cursor-pointer shadow-sm shadow-primary-50 hover:shadow-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Share Section */}
                        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary-600 to-primary-700 p-6 mb-8 shadow-xl">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full -ml-16 -mb-16"></div>
                            <div className="relative">
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                    <Share2 className="w-6 h-6" />
                                    Found this helpful? Share it!
                                </h3>
                                <p className="text-primary-100 mb-6">Help others discover this valuable export industry insight</p>

                                <div className="flex flex-wrap gap-4">
                                    {[
                                        { label: "Facebook", link: "/www.facebook.com", icon: Facebook },
                                        { label: "Twittter", link: "/www.x.com", icon: Twitter },
                                        { label: "Linkedin", link: "/www.linkedin.com", icon: Linkedin },
                                        { label: "Email", link: "/www.gmail.com", icon: Mail }
                                    ].map((share) => (
                                        <div key={share.label} className="text-center p-2.5 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                            <Link rel="stylesheet" href={share.link} className="flex gap-2 text-sm">
                                                {React.createElement(share.icon, { className: "w-4 h-4 text-primary-700 group-hover:text-white transition-colors duration-300" })}
                                                {share.label}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Cards */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {parseInt(blogId) > 1 && (
                                <Link href={`/blog/${parseInt(blogId) - 1}`}>
                                    <div className="group bg-white rounded-2xl p-6 border-2 border-gray-500 hover:border-primary-600 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl">
                                        <div className="flex items-center gap-2 text-primary-600 group-hover:text-primary-800 mb-3">
                                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                            <span className="text-sm font-semibold uppercase tracking-wide">Previous</span>
                                        </div>
                                        <p className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                                            {AllBlogData.find(b => b.id === `${parseInt(blogId) - 1}`)?.title}
                                        </p>
                                    </div>
                                </Link>
                            )}
                            {parseInt(blogId) < AllBlogData.length && (
                                <Link href={`/blog/${parseInt(blogId) + 1}`}>
                                    <div className="group bg-white rounded-2xl p-6 border-2 border-gray-500 hover:border-primary-600 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl md:text-right">
                                        <div className="flex items-center justify-end gap-2 text-primary-600 mb-3">
                                            <span className="text-sm font-semibold uppercase tracking-wide">Next</span>
                                            <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                        <p className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                                            {AllBlogData.find(b => b.id === `${parseInt(blogId) + 1}`)?.title}
                                        </p>
                                    </div>
                                </Link>
                            )}
                        </div>

                    </article>

                    {/* Enhanced Sidebar */}
                    <aside className="lg:col-span-4 mt-8">
                        <div className="sticky top-8 space-y-6">
                            {/* Table of Contents */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                                    <div className="p-2 bg-primary-100 rounded-lg">
                                        <Bookmark className="w-5 h-5 text-primary-700" />
                                    </div>
                                    Quick Navigation
                                </h3>
                                <ul className="space-y-3">
                                    {blog.content
                                        .split('\n')
                                        .filter(line => line.startsWith('## '))
                                        .slice(0, 8)
                                        .map((heading, index) => (
                                            <li key={index}>
                                                <a
                                                    href={`#${heading.substring(3).toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-all duration-300 hover:translate-x-2 group p-1 rounded-lg hover:bg-primary-50"
                                                >
                                                    <ChevronRight className="w-4 h-4 shrink-0 group-hover:text-primary-600" />
                                                    <span className="line-clamp-2">{heading.substring(3)}</span>
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>

                            {/* Newsletter Signup */}
                            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary-600 via-primary-700 to-primary-800 shadow-2xl p-6 text-white">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full -ml-12 -mb-12"></div>
                                <div className="relative">
                                    <div className="inline-flex p-3 bg-white/20 rounded-xl mb-4">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Stay Ahead</h3>
                                    <p className="text-primary-100 mb-5 text-sm">
                                        Get weekly export insights, compliance updates, and market trends.
                                    </p>
                                    <form className="space-y-3">
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 bg-white/20 rounded-xl text-white/80 placeholder-white/80 focus:outline-none focus:ring-1 focus:ring-white/80 shadow-lg"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full px-4 py-3 bg-white text-primary-600 font-bold rounded-xl hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                        >
                                            Subscribe Free
                                        </button>
                                    </form>
                                    <p className="text-xs text-primary-200 mt-3 flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        100% spam-free, unsubscribe anytime
                                    </p>
                                </div>
                            </div>

                            {/* Related Articles */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                                    <div className="p-2 bg-primary-100 rounded-lg">
                                        <TrendingUp className="w-5 h-5 text-primary-600" />
                                    </div>
                                    Related Reading
                                </h3>
                                <div className="space-y-5">
                                    {finalRelatedBlogs.map((relatedBlog) => (
                                        <Link key={relatedBlog.id} href={`/blog/${relatedBlog.id}`}>
                                            <div className="group cursor-pointer">
                                                <div className="relative h-36 rounded-xl overflow-hidden mb-3 shadow-md">
                                                    <img
                                                        src={relatedBlog.image}
                                                        alt={relatedBlog.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                                    <span className="absolute bottom-2 left-2 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-900 rounded-full">
                                                        {relatedBlog.category}
                                                    </span>
                                                </div>
                                                <h4 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors text-sm line-clamp-2 mb-2">
                                                    {relatedBlog.title}
                                                </h4>
                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                    <Clock className="w-3 h-3" />
                                                    <span>{relatedBlog.readTime}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-5">Explore Topics</h3>
                                <div className="space-y-2">
                                    {['Market Insights', 'Export Guide', 'Sustainability', 'Documentation', 'Logistics', 'Food Safety'].map((category, index) => (
                                        <button
                                            key={index}
                                            className="w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-primary-600 hover:text-white transition-all duration-500 text-sm font-medium flex items-center justify-between group"
                                        >
                                            <span>{category}</span>
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

            </section>

            {/* Enhanced CTA Section */}
            <section className="relative py-14 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>
                    </div>
                </div>
                <div className="relative container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                            <TrendingUp className="w-5 h-5" />
                            <span className="font-semibold">Ready to Take Action?</span>
                        </div>
                        <h2 className="text-4xl md:text-4xl font-bold mb-4 font-serif">
                            Start Your Export Journey Today
                        </h2>
                        <p className="text-lg text-primary-100 mb-6 max-w-xl mx-auto">
                            Join hundreds of successful exporters who trust us for expert guidance on international food trade
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact">
                                <button className="px-8 py-3 bg-white text-primary-600 font-bold rounded-full hover:bg-primary-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 text-md">
                                    Get Expert Consultation
                                </button>
                            </Link>
                            <Link href="/blog">
                                <button className="px-8 py-2.5 bg-transparent text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 border-2 border-white text-md backdrop-blur-sm">
                                    Explore More Insights
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BlogDetailsComponents;