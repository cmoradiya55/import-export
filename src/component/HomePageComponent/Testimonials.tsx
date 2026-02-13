"use client";

import React from "react";
import AllIconComponent from "@/public/AllIconComponent";
import { Quote, Star } from "lucide-react";

const feedbacks = [
    {
        name: "Michael Anderson",
        company: "Global Foods Company",
        rating: "5.0",
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        image: "/image/team1.webp"
    },
    {
        name: "Fatima Al Zahra",
        company: "Al Noor Trading",
        rating: "4.5",
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        image: "/image/team2.webp"
    },
    {
        name: "James Wilson",
        company: "Euro Imports Ltd",
        rating: "4.0",
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        image: "/image/team3.webp"
    }
];

const Testimonials = () => {
    return (
        <div>

            {/* Header */}
            <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-2">
                    <AllIconComponent width={60} height={60} className="text-primary-900" icon="headerIcon" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 font-serif">
                    Global Clients Feedback
                </h2>
                <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-secondary-500 mx-auto mb-4 rounded-full"></div>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Trusted by global partners for quality and reliability.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {feedbacks.map((item, index) => (
                    <div
                        key={index}
                        className="relative bg-primary-50 rounded-xl shadow-sm hover:shadow-md transition duration-300 p-6 border border-gray-100"
                    >
                        {/* Left Green Accent */}
                        <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-primary-500 rounded-r-md"></div>

                        {/* Quote Icon */}
                        <div className="absolute right-3 top-3 text-primary-500flex bg-white p-3 rounded-full opacity-80">
                            <Quote className="h-8 w-8 text-primary-700 rotate-180" />
                        </div>

                        {/* Top Section */}
                        <div className="flex items-center gap-5 mb-6">
                            <div className="h-18 w-18 border-4 border-white rounded-full flex items-center justify-center overflow-hidden bg-primary-50 relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-primary-900">
                                    {item.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    {item.company}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="flex text-primary-500 text-xs">
                                        ⭐⭐⭐⭐⭐
                                    </div>
                                    <span className="text-xs font-semibold text-primary-600">
                                        {item.rating}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Review */}
                        <p className="text-md text-gray-500 leading-relaxed">
                            {item.review}
                        </p>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default Testimonials;
