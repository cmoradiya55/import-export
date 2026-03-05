"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import AnimateOnScroll from "../../../Component/AnimateOnScroll/AnimateOnScroll";
import AllIconComponent from "../../../public/AllIconComponent";

const products = [
  {
    name: "Nuts & Dried Fruits",
    image: "/image/nutsAndDryfruits.webp",
    link: "NutsAndDriedFruits",
  },
  { name: "Seeds", image: "/image/seeds.webp", link: "Seeds" },
  { name: "Spices", image: "/image/spices.webp", link: "Spices" },
  {
    name: "Dehydrated Vegetable",
    image: "/image/dehydratedVegetable.webp",
    link: "DehydratedVegetables",
  },
  { name: "Pulses", image: "/image/pules.webp", link: "Pulses" },
  {
    name: "Food Chemicals",
    image: "/image/foodChemicals.webp",
    link: "FoodChemicals",
  },
  { name: "Herbs", image: "/image/herbs.webp", link: "Herbs" },
  { name: "Oils", image: "/image/oils.webp", link: "Oils" },
  {
    name: "Peanut Butter",
    image: "/image/peanutButter.webp",
    link: "PeanutButter",
  },
  {
    name: "Other Products",
    image: "/image/otherProducts.webp",
    link: "OtherProducts",
  },
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const maxIndex = Math.max(0, products.length - itemsPerView);

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
        newIndex * (sliderRef.current.scrollWidth / products.length);
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
      <div className="text-center mb-8 lg:mb-12">
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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-primary-950 mb-4 leading-tight tracking-tight px-4">
            Our Product Range
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-primary-600 to-primary-400 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-medium px-6">
            Explore our diverse range of high-quality products, from premium
            spices to industrial food chemicals.
          </p>
        </AnimateOnScroll>
      </div>

      {/* slider */}
      <div className="relative">
        {/* Prev Button */}
        {currentIndex > 0 && (
          <button
            onClick={() => scrollToIndex(currentIndex - 1)}
            className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white hover:bg-white/80 p-1 rounded-full"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-6 h-6 text-primary-950 group-hover/btn:text-white" />
          </button>
        )}
        {/* Next Button */}
        {currentIndex < maxIndex && (
          <button
            onClick={() => scrollToIndex(currentIndex + 1)}
            className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white hover:bg-white/80 p-1 rounded-full"
            aria-label="Next products"
          >
            <ChevronRight className="w-6 h-6 text-primary-950 group-hover/btn:text-white" />
          </button>
        )}

        <div
          ref={sliderRef}
          className="overflow-x-hidden scroll-smooth touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimateOnScroll
            animation="animate__fadeInUp"
            delay="delay-500ms"
            className="animate__slow-2s"
          >
            <div className="flex gap-4 lg:gap-6 px-4">
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={`/product?category=${encodeURIComponent(product.link)}`}
                  className="min-w-full md:min-w-[calc((100%-24px)/2)] lg:min-w-[calc((100%-78px)/4)] bg-white rounded-3xl flex flex-col items-center group border border-primary-100 transition-all duration-500 overflow-hidden"
                >
                  <div className="h-72 w-full overflow-hidden bg-primary-50 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/20 transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-950 py-4 text-center group-hover:text-primary-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
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
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
