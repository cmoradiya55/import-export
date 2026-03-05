"use client";
import Image from "next/image";
import AnimateOnScroll from "../../../Component/AnimateOnScroll/AnimateOnScroll";
import Counter from "../../../Component/Counter/Counter";

const Statistics = () => {
  return (
    <div>
      <div className="relative w-full py-12 md:py-16 lg:py-24 flex items-center justify-center overflow-hidden shadow-2xl">
        <img
          src="/image/bgCount.webp"
          alt="Statistics Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary-950/60 backdrop-blur-[2px] z-10" />

        {/* Statistics Grid */}
        <div className="relative z-20 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center justify-items-center">
            {/* Consignment Statistics */}
            <AnimateOnScroll
              animation="animate__zoomIn"
              delay="delay-200ms"
              className="animate__slow-2s w-full max-w-[280px]"
            >
              <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 border border-white/20 group">
                <div className="bg-primary-100 p-4 mx-auto rounded-2xl w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-6 transition-transform duration-500 shadow-inner">
                  <Image
                    src="/iconImage/consignment.webp"
                    alt="Consignment"
                    width={56}
                    height={56}
                    className="drop-shadow-md"
                  />
                </div>
                <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-primary-950 mb-2">
                  <Counter target={1500} duration={3000} suffix="+" />
                </h3>
                <p className="text-center text-sm lg:text-base font-bold text-primary-600 uppercase tracking-widest">
                  Consignment Done
                </p>
              </div>
            </AnimateOnScroll>

            {/* Shipping Statistics */}
            <AnimateOnScroll
              animation="animate__zoomIn"
              delay="delay-400ms"
              className="animate__slow-2s w-full max-w-[280px]"
            >
              <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 border border-white/20 group lg:mt-12">
                <div className="bg-primary-100 p-4 mx-auto rounded-2xl w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-4 sm:mb-6 group-hover:-rotate-6 transition-transform duration-500 shadow-inner">
                  <Image
                    src="/iconImage/happyBuyers.webp"
                    alt="Happy Buyers"
                    width={56}
                    height={56}
                    className="drop-shadow-md"
                  />
                </div>
                <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-primary-950 mb-2">
                  <Counter target={150} duration={3000} suffix="+" />
                </h3>
                <p className="text-center text-sm lg:text-base font-bold text-primary-600 uppercase tracking-widest">
                  Happy Buyers
                </p>
              </div>
            </AnimateOnScroll>

            {/* Years Experience Statistics */}
            <AnimateOnScroll
              animation="animate__zoomIn"
              delay="delay-600ms"
              className="animate__slow-2s w-full max-w-[280px] md:col-span-2 lg:col-span-1"
            >
              <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 border border-white/20 group">
                <div className="bg-primary-100 p-4 mx-auto rounded-2xl w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-6 transition-transform duration-500 shadow-inner">
                  <Image
                    src="/iconImage/yearsExperience.webp"
                    alt="Experience"
                    width={56}
                    height={56}
                    className="drop-shadow-md"
                  />
                </div>
                <h3 className="text-center text-2xl sm:text-3xl font-extrabold text-primary-950 mb-2">
                  <Counter target={10} duration={3000} suffix="+" />
                </h3>
                <p className="text-center text-sm lg:text-base font-bold text-primary-600 uppercase tracking-widest">
                  Years Experience
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
