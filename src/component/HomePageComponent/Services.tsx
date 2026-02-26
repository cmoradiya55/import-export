import { MoveUpRight } from "lucide-react";
import AnimateOnScroll from "../../../Component/AnimateOnScroll/AnimateOnScroll";
import AllIconComponent from "../../../public/AllIconComponent";

const Services = () => {

    const services = [
        {
            title: "Reliable Services",
            description: "We ensure smooth and dependable export operations with timely deliveries and transparent communication.",
            icon: "reliableServiceIcon",
        },
        {
            title: "Quality Assurance",
            description: "Every product undergoes strict quality checks to meet international export standards and compliance.",
            icon: "qualityAssuranceIcon",
        },
        {
            title: "Competitive Prices",
            description: "We offer cost-effective pricing without compromising product quality or service excellence.",
            icon: "competitivePricesIcon",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-6">

            {/* Header */}
            <AnimateOnScroll animation="animate__fadeInUp" delay="delay-1000ms" className="animate__slow-2s">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center mb-2">
                        <AllIconComponent width={60} height={60} className="text-primary-100" icon="headerIcon" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-50 mb-4 font-serif">
                        Why Choose Our Services
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-primary-200 to-primary-300 mx-auto mb-4 rounded-full"></div>
                    <p className="text-lg text-white max-w-2xl mx-auto">
                        We provide comprehensive export solutions tailored to your business needs.
                    </p>
                </div>
            </AnimateOnScroll>

            {/* SERVICES GRID */}
            <AnimateOnScroll animation="animate__fadeInUp" delay="delay-2000ms" className="animate__slow-2s">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((data, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:bg-primary-50 hover:shadow-xl transition-all duration-300"
                        >

                            <div className="w-12 h-12 absolute top-8 right-8 rounded-full border group-hover:bg-white" />
                            <MoveUpRight className="w-8 h-8 text-black absolute top-13 right-13 group-hover:text-primary-950" />

                            {/* ICON */}
                            <AnimateOnScroll animation="animate__zoomIn" delay="delay-3000ms" className="animate__slow-2s">
                                <div className="mb-6">
                                    <AllIconComponent width={60} height={60} className="text-primary-950" icon={data.icon} />
                                </div>
                            </AnimateOnScroll>

                            {/* CONTENT */}
                            <h3 className="text-xl font-semibold text-primary-950 mb-3">
                                {data.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-sm">
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
