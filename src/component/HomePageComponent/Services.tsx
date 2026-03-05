import { MoveUpRight } from "lucide-react";
import AnimateOnScroll from "../../../Component/AnimateOnScroll/AnimateOnScroll";
import AllIconComponent from "../../../public/AllIconComponent";

const Services = () => {
  const services = [
    {
      title: "Reliable Services",
      description:
        "We ensure smooth and dependable export operations with timely deliveries and transparent communication.",
      icon: "reliableServiceIcon",
    },
    {
      title: "Quality Assurance",
      description:
        "Every product undergoes strict quality checks to meet international export standards and compliance.",
      icon: "qualityAssuranceIcon",
    },
    {
      title: "Competitive Prices",
      description:
        "We offer cost-effective pricing without compromising product quality or service excellence.",
      icon: "competitivePricesIcon",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-6">
      {/* Header */}
      <AnimateOnScroll
        animation="animate__fadeInUp"
        delay="delay-500ms"
        className="animate__slow-2s"
      >
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center mb-4">
            <AllIconComponent
              width={64}
              height={64}
              className="text-primary-200 drop-shadow-xl"
              icon="headerIcon"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight sm:px-4">
            Why Choose Our Services
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-primary-400 to-primary-200 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-base md:text-md lg:text-lg text-primary-50/80 max-w-2xl mx-auto leading-relaxed sm:px-4">
            We provide comprehensive export solutions tailored to your business
            needs, ensuring global reach and quality excellence.
          </p>
        </div>
      </AnimateOnScroll>

      {/* SERVICES GRID */}
      <AnimateOnScroll
        animation="animate__fadeInUp"
        delay="delay-1000ms"
        className="animate__slow-2s"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((data, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="w-12 h-12 absolute top-8 right-8 rounded-full border border-primary-100/20 transition-all duration-500 flex items-center justify-center shadow-sm" />
              <MoveUpRight className="w-6 h-6 text-white absolute top-11 right-11 transition-all duration-500" />

              {/* ICON */}
              <AnimateOnScroll
                animation="animate__zoomIn"
                delay="delay-1500ms"
                className="animate__slow-2s"
              >
                <div className="mb-8 p-4 bg-primary-100/10 rounded-2xl w-fit transition-colors duration-500 shadow-inner">
                  <AllIconComponent
                    width={55}
                    height={55}
                    className="text-primary-200 drop-shadow-lg transition-colors duration-500"
                    icon={data.icon}
                  />
                </div>
              </AnimateOnScroll>

              {/* CONTENT */}
              <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-500">
                {data.title}
              </h3>

              <p className="text-primary-50/70 leading-relaxed text-sm md:text-base font-medium transition-colors duration-500">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Services;
