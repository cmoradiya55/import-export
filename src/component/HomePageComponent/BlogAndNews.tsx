import AllIconComponent from "@/public/AllIconComponent";
import { div } from "framer-motion/client";
import React from "react";

const BlogAndNews = () => {

    const blogPosts = [
        {
            title: "The Future of Global Trade: Trends to Watch in 2024",
            date: "September 15, 2024",
            image: "/image/blog1.webp",
            description: "Explore the latest trends shaping global trade in 2024."
        },
        {
            title: "Navigating Supply Chain Disruptions",
            date: "August 10, 2024",
            image: "/image/blog3.webp",
            description: "Strategies for modern import-export businesses."
        },
        {
            title: "Sustainable Sourcing in 2024",
            date: "August 30, 2024",
            image: "/image/blog2.webp",
            description: "How sustainability benefits global trade."
        },
        {
            title: "Technology in Import-Export",
            date: "July 25, 2024",
            image: "/image/blog4.webp",
            description: "Digital transformation in global logistics."
        },
    ];

    return (
        <div className="mb-30">
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-2">
                    <AllIconComponent width={60} height={60} className="text-primary-900" icon="headerIcon" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary-900 mb-6">
                    Blog & News
                </h2>
                <div className="w-20 h-1 bg-primary-600 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Insights, updates, and trends from the global trade and export industry.
                </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-130">

                {/* LEFT BIG BLOG */}
                <div className="relative rounded-3xl overflow-hidden group shadow-lg">

                    <img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 p-8 text-white">
                        <p className="text-sm opacity-80 mb-2">
                            {blogPosts[0].date}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-3 leading-snug">
                            {blogPosts[0].title}
                        </h3>
                        <p className="text-sm opacity-90 mb-4 max-w-md">
                            {blogPosts[0].description}
                        </p>
                        <button className="text-sm font-semibold hover:underline">
                            Read More →
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="grid grid-rows-2 gap-6">

                    {/* Top Right Blog */}
                    <div className="relative rounded-3xl overflow-hidden group shadow-lg">

                        <img
                            src={blogPosts[1].image}
                            alt={blogPosts[1].title}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                        <div className="absolute bottom-0 p-6 text-white">
                            <p className="text-xs opacity-80 mb-1">
                                {blogPosts[1].date}
                            </p>
                            <h3 className="text-lg font-semibold leading-snug">
                                {blogPosts[1].title}
                            </h3>
                        </div>
                    </div>

                    {/* Bottom Two Blogs */}
                    <div className="grid grid-cols-2 gap-6">

                        {blogPosts.slice(2, 4).map((blog, index) => (
                            <div
                                key={index}
                                className="relative rounded-3xl overflow-hidden group shadow-lg"
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                                <div className="absolute bottom-0 p-4 text-white">
                                    <p className="text-xs opacity-80 mb-1">
                                        {blog.date}
                                    </p>
                                    <h3 className="text-sm font-semibold leading-snug">
                                        {blog.title}
                                    </h3>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>

        </div>
    );
};

export default BlogAndNews;




































// import React from "react";

// const BlogAndNews = () => {

//     const blogPosts = [
//         {
//             title: "The Future of Global Trade: Trends to Watch in 2024",
//             date: "September 15, 2024",
//             image: "/image/blog1.webp",
//             description: "Explore the latest trends shaping global trade in 2024."

//         },
//         {
//             title: "Navigating Supply Chain Disruptions: Strategies for Import-Export Businesses",
//             date: "August 10, 2024",
//             image: "/image/blog3.webp",
//             description: "Learn how to navigate supply chain disruptions effectively."

//         },
//         {
//             title: "Sustainable Sourcing: How Import-Export Companies Can Make a Difference",
//             date: "August 30, 2024",
//             image: "/image/blog2.webp",
//             description: "Discover how sustainable sourcing practices can benefit import-export businesses."

//         },
//         {
//             title: "The Role of Technology in Modern Import-Export Operations",
//             date: "July 25, 2024",
//             image: "/image/blog4.webp",
//             description: "Explore how technology is transforming import-export operations."

//         },
//     ];

//     return (
//         <div>
//             <div className="flex gap-4">

//                 {/* Left side Blog */}
//                 <div className="h-90 w-1/2 bg-white relative">
//                     <img
//                         src={blogPosts[0].image}
//                         alt={blogPosts[0].title}
//                         className="w-full h-full object-cover shadow-md"
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 bg-black/50 bg-opacity-50 text-white p-4">
//                         <p className="text-sm">{blogPosts[0].date}</p>
//                         <h3 className="text-lg font-semibold">{blogPosts[0].title}</h3>
//                         <p>{blogPosts[0].description}</p>
//                     </div>
//                 </div>

//                 {/* Right side Blogs */}
//                 <div className="h-90 w-1/2 space-y-4">
//                     {/* right side upper blog */}
//                     <div className="h-43 w-full bg-white">
//                         <img
//                             src={blogPosts[1].image}
//                             alt={blogPosts[1].title}
//                             className="w-full h-full object-cover shadow-md"
//                         />
//                     </div>

//                     {/* right side lower blogs */}
//                     <div className="h-43 flex gap-4">
//                         <div className="w-1/2 h-full bg-white">
//                             <img
//                                 src={blogPosts[2].image}
//                                 alt={blogPosts[2].title}
//                                 className="w-full h-full object-cover shadow-md"
//                             />
//                         </div>
//                         <div className="w-1/2 h-full bg-white">
//                             <img
//                                 src={blogPosts[3].image}
//                                 alt={blogPosts[3].title}
//                                 className="w-full h-full object-cover shadow-md"
//                             />
//                         </div>
//                     </div>

//                 </div>
//             </div>

//         </div>
//     );
// };

// export default BlogAndNews;