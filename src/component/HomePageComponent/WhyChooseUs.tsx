import AnimateOnScroll from "../../../Component/AnimateOnScroll/AnimateOnScroll";
import AllIconComponent from "../../../public/AllIconComponent";

const WhyChooseUs = () => {

    const reasons = [
        {
            title: "Food Safety Standards",
            icon: "foodSafetyIcon",
            description: "All our products comply with international food safety and quality standards."
        },
        {
            title: "Innovative Packaging",
            icon: "innovativePackagingIcon",
            description: "We offers eco-friendly packaging solutions for fresher, sustainable products."
        },
        {
            title: "Export-Ready Packaging",
            icon: "exportReadyIcon",
            description: "We offer flexible customization in quality, packaging, and labeling."
        },
        {
            title: "Reliable Global Logistics",
            icon: "globalLogisticsIcon",
            description: "Our strong global supplier and logistics network ensures reliable sourcing."
        },
    ]

    return (
        <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-24">

            {/* Header */}
            <AnimateOnScroll animation="animate__fadeInUp" delay="delay-500ms" className="animate__slow-2s">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-2">
                        <AllIconComponent width={60} height={60} className="text-primary-600" icon="headerIcon" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 font-serif">
                        Why Choose Us
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-primary-600 to-primary-500 mx-auto mb-4 rounded-full"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your Trusted Food Products Supplier
                    </p>
                </div>
            </AnimateOnScroll>

            {/* Reasons cards */}
            <AnimateOnScroll animation="animate__fadeInUp" delay="delay-2000ms" className="animate__slow-2s">
                <div className="grid md:grid-cols-4 gap-6 mt-20">
                    {reasons.map((reason, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-primary-50 rounded-2xl p-8 pt-16 transition-all duration-500 ease-out hover:bg-white hover:shadow-2xl hover:-translate-y-3 hover:scale-105"
                        >
                            {/* Floating Icon */}
                            <div className="absolute -top-10 left-6 h-20 w-20 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-6 group-hover:shadow-2xl group-hover:bg-primary-900"
                            >
                                <AllIconComponent
                                    width={40}
                                    height={40}
                                    icon={reason.icon}
                                    className="text-black transition-all duration-200 group-hover:text-white group-hover:scale-110"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-4 transition-colors duration-300 group-hover:text-primary-900">
                                {reason.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-md leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                                {reason.description}
                            </p>

                        </div>
                    ))}
                </div>
            </AnimateOnScroll>

        </div>
    );
};

export default WhyChooseUs;