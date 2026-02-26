'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {  TrendingUp, Globe, Award, ArrowRight } from 'lucide-react';
import 'animate.css';

interface Slide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    cta: string;
    ctaLink: string;
}

const slides: Slide[] = [
    {
        id: 1,
        title: "Premium Organic Spices",
        subtitle: "Export Quality | Globally Trusted",
        description: "From farm to international markets - delivering the finest organic spices with certifications and quality assurance.",
        image: "/image/slider1.webp",
        cta: "Explore Products",
        ctaLink: "/products"
    },
    {
        id: 2,
        title: "Authentic Basmati Rice",
        subtitle: "Premium Grade | Direct Export",
        description: "Experience the aromatic excellence of authentic Indian Basmati rice, trusted by importers across 50+ countries.",
        image: "/image/slider2.webp",
        cta: "Get Quote",
        ctaLink: "/contact"
    },
    {
        id: 3,
        title: "Fresh Produce Excellence",
        subtitle: "Cold Chain | Quality Assured",
        description: "From farm-fresh fruits to premium vegetables - maintaining quality through advanced cold chain logistics.",
        image: "/image/slider3.webp",
        cta: "View Catalog",
        ctaLink: "/products"
    },
    {
        id: 4,
        title: "Your Trusted Export Partner",
        subtitle: "15+ Years Experience | Global Reach",
        description: "Connecting Indian quality with global markets through sustainable practices and reliable partnerships.",
        image: "/image/slider4.webp",
        cta: "Learn More",
        ctaLink: "/about"
    }
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [animationKey, setAnimationKey] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimationKey(prev => prev + 1);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setAnimationKey(prev => prev + 1);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(nextSlide, 8000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    return (
        <div className="relative w-full h-100 md:h-125 lg:h-150 overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        {/* linear Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>
                    </div>

                    {/* Content */}
                    {index === currentSlide && (
                        <div className="relative h-full flex items-center z-20">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="max-w-3xl">
                                    {/* Animated Badge */}
                                    <div
                                        key={`badge-${animationKey}`}
                                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-4 md:mb-6 border border-white/30 animate__animated animate__fadeInDown"
                                    >
                                        <TrendingUp className="w-4 h-4 text-white" />
                                        <span className="text-white text-sm font-semibold">
                                            {slide.subtitle}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h1
                                        key={`title-${animationKey}`}
                                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight animate__animated animate__fadeInLeft"
                                    >
                                        {slide.title}
                                    </h1>

                                    {/* Description */}
                                    <p
                                        key={`desc-${animationKey}`}
                                        className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl leading-relaxed animate__animated animate__fadeInLeft"
                                    >
                                        {slide.description}
                                    </p>

                                    {/* CTA Buttons */}
                                    <div
                                        key={`cta-${animationKey}`}
                                        className="flex flex-col sm:flex-row gap-4 animate__animated animate__fadeInUp animate__delay-1s"
                                    >
                                        <a
                                            href={slide.ctaLink}
                                            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-2 md:py-2 bg-primary-600 text-white font-bold rounded-full hover:bg-primary-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
                                        >
                                            <span>{slide.cta}</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                        <a
                                            href="/contact"
                                            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-white/20 backdrop-blur-md text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-primary-600 transition-all duration-300"
                                        >
                                            <span>Contact Us</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Trust Badges */}
                    {index === currentSlide && (
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8 animate__animated animate__fadeInUp animate__delay-2s">
                            <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                                <Globe className="w-5 h-5" />
                                <span className="text-sm font-semibold">50+ Countries</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                                <Award className="w-5 h-5" />
                                <span className="text-sm font-semibold">ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                                <TrendingUp className="w-5 h-5" />
                                <span className="text-sm font-semibold">15+ Years</span>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* Mobile Dot Indicators - Bottom Center */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 z-30 lg:hidden">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                            index === currentSlide
                                ? 'w-8 md:w-10 h-2 md:h-2.5 bg-white'
                                : 'w-2 md:w-2.5 h-2 md:h-2.5 bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Desktop Vertical Navigation - Right Side */}
            <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative transition-all duration-300 group ${
                            index === currentSlide ? 'scale-110' : 'scale-100'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {/* Main Button */}
                        <div
                            className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                                index === currentSlide
                                    ? 'bg-linear-to-br from-primary-400 via-primary-500 to-primary-600 text-white shadow-xl'
                                    : 'bg-white/20 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white/30'
                            }`}
                        >
                            {index + 1}
                        </div>
                        
                        {/* Pulse Effect for Active */}
                        {index === currentSlide && (
                            <div className="absolute inset-0 rounded-2xl bg-primary-500/30 animate-ping"></div>
                        )}
                    </button>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
                <div
                    className="h-full bg-primary-500 transition-all duration-300"
                    style={{
                        width: `${((currentSlide + 1) / slides.length) * 100}%`
                    }}
                />
            </div>
        </div>
    );
};

export default Slider;