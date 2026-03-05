"use client";

import React, { useEffect, useRef, useState } from "react";
// import AllIconComponent from "@/public/AllIconComponent";
import { Quote } from "lucide-react";
import AnimateOnScroll from "../../../Component/AnimateOnScroll/AnimateOnScroll";
import AllIconComponent from "../../../public/AllIconComponent";
// import AnimateOnScroll from "@/Component/AnimateOnScroll/AnimateOnScroll";

const feedbacks = [
  {
    name: "Aisha Rahman",
    company: "Global Foods Company",
    rating: "5.0",
    review:
      "Exceptional product quality and timely shipment. Their team ensures every consignment meets international export standards.",
    image: "/image/testimonial1.webp",
  },
  {
    name: "Fatima Al Zahra",
    company: "Al Noor Trading",
    rating: "4.5",
    review:
      "Reliable supplier with consistent quality. Documentation and packaging were handled professionally.",
    image: "/image/testimonial2.webp",
  },
  {
    name: "James Wilson",
    company: "Euro Imports Ltd",
    rating: "4.0",
    review:
      "We’ve been importing spices and dehydrated vegetables from them for over a year. Always satisfied with quality.",
    image: "/image/testimonial3.webp",
  },
  {
    name: "Carlos Martinez",
    company: "Taj Imports",
    rating: "4.0",
    review:
      "Competitive pricing and strong logistics support. Delivery timelines are always respected.",
    image: "/image/testimonial4.webp",
  },
  {
    name: "Michael Anderson",
    company: "Hindustan Trading",
    rating: "4.0",
    review:
      "Premium grade dried fruits and seeds. Packaging quality is export-ready and highly secure.",
    image: "/image/testimonial5.webp",
  },
  {
    name: "Daniel Schmidt",
    company: "Rajhans Trading",
    rating: "4.0",
    review:
      "Very transparent communication and smooth coordination throughout the shipment process.",
    image: "/image/testimonial6.webp",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const maxIndex = Math.max(0, feedbacks.length - itemsPerView);

  // Dynamic items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToIndex = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);
    if (sliderRef.current) {
      const scrollAmount =
        newIndex * (sliderRef.current.scrollWidth / feedbacks.length);
      sliderRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      scrollToIndex(currentIndex + 1);
    }
    if (isRightSwipe) {
      scrollToIndex(currentIndex - 1);
    }
  };

  // Auto Slide
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
      <div className="text-center mb-6 lg:mb-8">
        <AnimateOnScroll
          animation="animate__fadeInUp"
          delay="delay-500ms"
          className="animate__slow-2s"
        >
          <div className="flex items-center justify-center mb-4">
            <AllIconComponent
              width={64}
              height={64}
              className="text-primary-600 drop-shadow-xl"
              icon="headerIcon"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-950 mb-4 leading-tight tracking-tight px-4">
            Global Clients Feedback
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-primary-600 to-primary-400 mx-auto mb-4 rounded-full shadow-lg"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-medium px-6">
            Trusted by global partners for quality, reliability, and export
            excellence.
          </p>
        </AnimateOnScroll>
      </div>

      {/* Cards */}
      <div
        ref={sliderRef}
        className="overflow-x-hidden scroll-smooth touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimateOnScroll
          animation="animate__fadeInUp"
          delay="delay-1000ms"
          className="animate__slow-2s"
        >
          <div className="flex gap-6 lg:gap-8 px-4">
            {feedbacks.map((item, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-[calc((100%-24px)/2)] lg:min-w-[calc((100%-58px)/3)] relative bg-white/50 backdrop-blur-sm rounded-3xl transition-all duration-500 p-8 border-2 border-gray-100 mt-2 hover:-translate-y-2 group"
              >
                {/* Left Accent */}
                <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-primary-700 rounded-r-md"></div>

                {/* Quote */}
                <div className="absolute right-3 top-3 bg-white p-3 rounded-full opacity-80">
                  <Quote className="h-8 w-8 text-primary-900 rotate-180" />
                </div>

                {/* Top Section */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="h-18 w-18 border-4 border-white rounded-full overflow-hidden bg-primary-50">
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
                    <p className="text-sm text-gray-500">{item.company}</p>

                    <div className="flex items-center gap-2 mt-1">
                      <div className="text-xs">⭐⭐⭐⭐⭐</div>
                      <span className="text-xs font-semibold text-primary-600">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`w-3 h-3 rounded-full border border-primary-300 transition-all duration-300 ${
              currentIndex === idx
                ? "bg-primary-800 scale-110"
                : "bg-primary-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
