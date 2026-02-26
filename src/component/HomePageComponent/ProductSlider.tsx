"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import AnimateOnScroll from "../../../Component/AnimateOnScroll/AnimateOnScroll";
import AllIconComponent from "../../../public/AllIconComponent";

const products = [
    { name: "Nuts & Dried Fruits", image: "/image/nutsAndDryfruits.webp", link: "NutsAndDriedFruits" },
    { name: "Seeds", image: "/image/seeds.webp", link: "Seeds" },
    { name: "Spices", image: "/image/spices.webp", link: "Spices" },
    { name: "Dehydrated Vegetable", image: "/image/dehydratedVegetable.webp", link: "DehydratedVegetables" },
    { name: "Pulses", image: "/image/pules.webp", link: "Pulses" },
    { name: "Food Chemicals", image: "/image/foodChemicals.webp", link: "FoodChemicals" },
    { name: "Herbs", image: "/image/herbs.webp", link: "Herbs" },
    { name: "Oils", image: "/image/oils.webp", link: "Oils" },
    { name: "Peanut Butter", image: "/image/peanutButter.webp", link: "PeanutButter" },
    { name: "Other Products", image: "/image/otherProducts.webp", link: "OtherProducts" },
];

const ProductSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const itemsPerView = 3;
    const maxIndex = Math.max(0, products.length - itemsPerView);

    const scrollToIndex = (index: number) => {
        const newIndex = Math.max(0, Math.min(index, maxIndex));
        setCurrentIndex(newIndex);
        if (sliderRef.current) {
            const scrollAmount = newIndex * (sliderRef.current.scrollWidth / products.length);
            sliderRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex < maxIndex) {
                    return prevIndex + 1;
                } else {
                    return 0;
                }
            });
        }, 3000);
        return () => clearInterval(interval);
    }, [maxIndex]);

    useEffect(() => {
        scrollToIndex(currentIndex);
    }, [currentIndex]);

    return (
        <div>
            {/* Header */}
            <div className="text-center mb-8">
                <AnimateOnScroll animation="animate__fadeInUp" delay="delay-500ms" className="animate__slow-2s">
                    <div className="flex items-center justify-center mb-2">
                        <AllIconComponent width={60} height={60} className="text-primary-600" icon="headerIcon" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 font-serif">
                        Our Product Range
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-primary-500 mx-auto mb-4 rounded-full"></div>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Explore our diverse range of high-quality products, from coffee and spices to food chemicals and more.
                    </p>
                </AnimateOnScroll>
            </div>

            {/* slider */}
            <div className="relative">
                <AnimateOnScroll animation="animate__fadeInUp" delay="delay-1500ms" className="animate__slow-2s">
                    {currentIndex > 0 && (
                        <button
                            onClick={() => scrollToIndex(currentIndex - 1)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 p-1 rounded-full shadow-lg hover:bg-white transition-all duration-400 group"
                            aria-label="Previous products"
                        >
                            <ChevronLeft className="w-6 h-6 text-primary-700 group-hover:text-primary-900" />
                        </button>
                    )}
                    {currentIndex < maxIndex && (
                        <button
                            onClick={() => scrollToIndex(currentIndex + 1)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 p-1 rounded-full shadow-lg hover:bg-white transition-all duration-400 group"
                            aria-label="Next products"
                        >
                            <ChevronRight className="w-6 h-6 text-primary-700 group-hover:text-primary-900" />
                        </button>
                    )}
                    <div ref={sliderRef} className="overflow-x-auto scrollbar-hide">
                        <div className="flex gap-6 px-2">
                            {products.map((product) => (
                                <Link
                                    key={product.name}
                                    href={`/product?category=${encodeURIComponent(product.link)}`}
                                    className="min-w-75 bg-white rounded-2xl flex flex-col items-center group border border-primary-100 hover:border-primary-400"
                                >
                                    <div className="h-90 w-full flex items-center hover:bg-black/50 justify-center overflow-hidden bg-primary-50 relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full hover:scale-100 object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-primary-600 py-4 text-center">
                                        {product.name}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* Dots */}
                <div className="flex justify-center mt-6 gap-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToIndex(idx)}
                            className={`w-3 h-3 rounded-full border border-primary-300 transition-all duration-300 ${currentIndex === idx ? 'bg-primary-600 scale-110' : 'bg-primary-100'}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProductSlider;