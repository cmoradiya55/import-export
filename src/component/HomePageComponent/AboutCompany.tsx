import AnimateOnScroll from "../../../Component/AnimateOnScroll/AnimateOnScroll";
import AllIconComponent from "../../../public/AllIconComponent";

const AboutCompany = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <AnimateOnScroll
          animation="animate__zoomIn"
          delay="delay-500ms"
          className="animate__slow-2s"
        >
          <div className="relative group">
            <div className="absolute -inset-4 blur-2xl transition-all duration-500" />
            <img
              src="/image/aboutOurCompany.webp"
              alt="About Company"
              className="relative w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </AnimateOnScroll>
      </div>

      {/* Text Content Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <AnimateOnScroll
          animation="animate__fadeInUp"
          delay="delay-1000ms"
          className="animate__slow-2s"
        >
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <AllIconComponent
              width={64}
              height={64}
              className="text-primary-600 drop-shadow-lg"
              icon="headerIcon"
            />
          </div>
          <div className="mb-8 overflow-hidden">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-950 mb-2 leading-tight tracking-tight">
              About
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-600 leading-tight">
              Import-Export Company
            </h2>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-bold mb-6 leading-snug">
            Insights and Resources to help drive your Business Forward Faster.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
            We build results-oriented brand strategy and continually refine the
            campaign for the greatest outcome. From full scale branding
            strategy, we are reaching to almost desired buyers throughout the
            world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/about"
              className="px-8 py-4 w-auto mx-auto bg-primary-950 text-white font-bold rounded-2xl hover:bg-primary-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              Read More Our Story
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default AboutCompany;
