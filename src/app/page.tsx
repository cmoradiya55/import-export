import ProductSlider from "@/src/component/HomePageComponent/ProductSlider";
import Services from "@/src/component/HomePageComponent/Services";
import Slider from "@/src/component/HomePageComponent/Slider";
import AboutCompany from "../component/HomePageComponent/AboutCompany";
import Statistics from "../component/HomePageComponent/Statistics";
import IntroducingOurWork from "../component/HomePageComponent/IntroducingOurWork";
import TeamComponent from "../component/HomePageComponent/TeamComponent";
import WhyChooseUs from "../component/HomePageComponent/WhyChooseUs";
import Testimonials from "../component/HomePageComponent/Testimonials";
import BlogAndNews from "../component/HomePageComponent/BlogAndNews";

export default function Home() {
    return (
        <div className="min-h-screen">
            <main className="w-full">

                {/* Slider Section */}
                <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16">
                    <div className="mx-auto">
                        <Slider />
                    </div>
                </section>

                {/* Services Section */}
                <section className="bg-primary-950 py-4 sm:py-8 md:py-10 lg:py-12 xl:py-16">
                    <div className="mx-auto container">
                        <Services />
                    </div>
                </section>

                {/* About Company Section */}
                <section className="bg-primary-50 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20">
                    <div className="mx-auto container">
                        <AboutCompany />
                    </div>
                </section>

                {/* why choose us section */}
                <section className="bg-white py-4 sm:py-8 md:py-10 lg:py-12 xl:py-16">
                    <div className="mx-auto container">
                        <WhyChooseUs />
                    </div>
                </section>

                {/* Statistics Section */}
                <section>
                    <div className="mx-auto">
                        <Statistics />
                    </div>
                </section>

                {/* Introducing Our Work Section */}
                <section className="bg-white py-4 sm:py-8 md:py-12 lg:py-16 xl:py-16">
                    <div className="mx-auto container">
                        <IntroducingOurWork />
                    </div>
                </section>

                {/* Slider Section */}
                <section className="bg-linear-to-r from-primary-100 via-primary-50 to-primary-100 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-16">
                    <div className="mx-auto container">
                        <ProductSlider />
                    </div>
                </section>

                {/* Team Section */}
                <section className="bg-linear-to-r from-primary-950 via-primary-900 to-primary-800 py-4 sm:py-8 md:py-12 lg:py-12 xl:py-14">
                    <div className="mx-auto container">
                        <TeamComponent />
                    </div>
                </section>

                {/* Testimonials */}
                <section className="bg-white py-4 sm:py-8 md:py-12 lg:py-16 xl:py-16">
                    <div className="mx-auto container">
                        <Testimonials />
                    </div>
                </section>

                {/* Slider Section */}
                <section className="bg-linear-to-r from-primary-100 via-primary-50 to-primary-100 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-16">
                    <div className="mx-auto container">
                        <BlogAndNews />
                    </div>
                </section>

            </main>
        </div>
    );
}