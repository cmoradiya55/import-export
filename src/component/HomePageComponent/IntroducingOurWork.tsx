import AnimateOnScroll from "../../../Component/AnimateOnScroll/AnimateOnScroll";
import AllIconComponent from "../../../public/AllIconComponent";

const IntroducingOurWork = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      {/* Text Content Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <AnimateOnScroll
          animation="animate__fadeInUp"
          delay="delay-500ms"
          className="animate__slow-2s"
        >
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <AllIconComponent
              width={64}
              height={64}
              className="text-primary-600 drop-shadow-xl"
              icon="headerIcon"
            />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-primary-950 mr-10 mb-4 leading-tight tracking-tight">
            Introducing Our Work
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl text-primary-600 font-bold mb-4 leading-snug">
            Tailoring services for global exporters with personalized attention.
          </h3>
          <div className="space-y-6">
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Our creativity is driven by depth study in an effort to give you
              the best result and position of your product successfully in
              international market.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium italic">
              We're on a mission to start studying the exact market for your
              products worldwide and establish the product in appropriate
              market.
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <AnimateOnScroll
          animation="animate__zoomIn"
          delay="delay-1000ms"
          className="animate__slow-2s"
        >
          <div className="relative group">
            <div className="absolute -inset-4 blur-3xl transition-all duration-500" />
            <img
              src="/image/introducingOurWork.webp"
              alt="Introducing Our Work"
              className="relative w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default IntroducingOurWork;
