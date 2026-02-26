import AnimateOnScroll from "../../../Component/AnimateOnScroll/AnimateOnScroll";
import AllIconComponent from "../../../public/AllIconComponent";

const AboutCompany = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Image */}
            <div className="w-1/2">
                <AnimateOnScroll animation="animate__zoomIn" delay="delay-2000ms" className="animate__slow-2s">
                    <img
                        src="/image/aboutOurCompany.webp"
                        alt="About Company"
                        className="w-full h-full object-cover"
                    />
                </AnimateOnScroll>
            </div>

            {/* Text Content */}
            <div className="w-1/2 px-4">
                <AnimateOnScroll animation="animate__fadeInUp" delay="delay-2000ms" className="animate__slow-2s">
                    <div className="flex items-center justify-start mb-2 ml-12">
                        <AllIconComponent width={60} height={60} className="text-primary-600" icon="headerIcon" />
                    </div>
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-primary-950 mb-1">
                            About
                        </h2>
                        <h2 className="text-3xl md:text-4xl font-extrabold ml-14 text-primary-600">
                            Import-Export Company
                        </h2>
                    </div>
                    <p className="text-3xl text-black font-bold mb-5">
                        Insights and Resources to help drive your Business Forward Faster.
                    </p>
                    <p className="text-lg text-gray-700">
                        We build results-oriented brand strategy and continually refine the campaign for the greatest outcome. From full scale branding strategy, we are reaching to almost desired buyers throughout the world.
                    </p>
                </AnimateOnScroll>
            </div>

        </div>
    );
};

export default AboutCompany;