import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { AllBlogData } from "@/data/blogData";
import AnimateOnScroll from "../../../../Component/AnimateOnScroll/AnimateOnScroll";
import Button from "../../../../Component/Button/Button";
import AllIconComponent from "../../../../public/AllIconComponent";

// Get featured post (first blog post)
const featuredPost = AllBlogData[0];

// Get remaining blog posts (excluding featured)
const blogPosts = AllBlogData.slice(1);

// Generate categories dynamically from blog data
const getCategoriesWithCount = () => {
  const categoryCount: { [key: string]: number } = {};

  AllBlogData.forEach((blog) => {
    categoryCount[blog.category] = (categoryCount[blog.category] || 0) + 1;
  });

  const categories = [
    { name: "All", count: AllBlogData.length },
    ...Object.entries(categoryCount).map(([name, count]) => ({ name, count })),
  ];

  return categories;
};

const categories = getCategoriesWithCount();

const BlogComponent = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary-950 text-white py-10">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnScroll
              animation="animate__fadeInUp"
              delay="delay-100ms"
              className="animate__slow-2s"
            >
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 mt-6 leading-tight">
                Export Insights & Knowledge Hub
              </h1>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-6">
                Expert guidance on exporting raw food products, market trends,
                compliance, and sustainable practices
              </p>
            </AnimateOnScroll>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <AnimateOnScroll
                animation="animate__zoomIn"
                delay="delay-1000ms"
                className="animate__slow-2s"
              >
                <div className="relative max-w-md mx-auto sm:mx-0 w-full sm:w-96">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-6 py-2 bg-white rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-800"
                  />
                  <Search className="h-5 w-5 text-gray-900 absolute right-4 top-3.5" />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-6 -mt-22">
        <div className="container mx-auto px-4">
          <AnimateOnScroll
            animation="animate__fadeInUp"
            delay="delay-2000ms"
            className="animate__slow-2s"
          >
            <div className="max-w-4xl mx-auto">
              <Link href={`/blog/${featuredPost.id}`}>
                <div className="bg-white border rounded-2xl overflow-hidden shadow-xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-70 md:h-80 overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 bg-white overflow-hidden z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-primary-600 font-semibold text-xs uppercase tracking-wide">
                          {featuredPost.category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 text-xs">
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredPost.authorImage}
                          alt={featuredPost.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">
                            {featuredPost.author}
                          </p>
                          <p className="text-gray-500 text-">
                            {featuredPost.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto">
        <div className="space-y-8 mb-15">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 justify-center py-8 border-b border-gray-200">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  category.name === "All"
                    ? "bg-primary-700 text-white shadow-md"
                    : "bg-white text-primary-800 hover:bg-primary-100 border border-gray-200"
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-90">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <AnimateOnScroll
            animation="animate__fadeInUp"
            delay="delay-1000ms"
            className="animate__slow-2s"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary-800 backdrop-blur-sm text-white/90 px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-gray-900 font-semibold text-sm">
                            {post.author}
                          </h3>
                          <p className="text-xs text-gray-600 line-clamp-1">
                            {post.authorBio}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Load More Button - Only show if there are more posts */}
          <AnimateOnScroll
            animation="animate__zoomIn"
            delay="delay-1000ms"
            className="animate__slow-2s"
          >
            {AllBlogData.length > 6 && (
              <div className="text-center mt-12">
                <Button variant="primary" size="lg">
                  Load More Articles
                </Button>
              </div>
            )}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-14 bg-linear-to-br from-primary-600 to-primary-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll
              animation="animate__zoomIn"
              delay="delay-500ms"
              className="animate__slow-2s"
            >
              <div className="flex items-center justify-center mb-4">
                <AllIconComponent
                  width={60}
                  height={60}
                  className="text-primary-100"
                  icon="blogEmailIcon"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll
              animation="animate__fadeInUp"
              delay="delay-1500ms"
              className="animate__slow-2s"
            >
              <h2 className="text-3xl font-bold mb-4 font-serif">
                Stay Informed on Export Trends
              </h2>
              <p className="text-lg text-primary-100 mb-6">
                Get expert insights on food export regulations, market
                opportunities, and industry best practices delivered to your
                inbox
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-2 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
                <button
                  type="submit"
                  className="px-8 py-2 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-colors shadow-lg"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-primary-200 mt-4">
                No spam, unsubscribe at any time
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogComponent;
