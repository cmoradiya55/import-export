"use client";
import Image from "next/image";
import AnimateOnScroll from "../../../Component/AnimateOnScroll/AnimateOnScroll";
import Counter from "../../../Component/Counter/Counter";

const Statistics = () => {

    return (
        <div>
            <div className="relative w-full h-56 md:h-110 flex items-center justify-center overflow-hidden shadow-lg">
                <img
                    src="/image/bgCount.webp"
                    alt="Products Header Background"
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-primary-950/40 z-10" />

                {/* Statistics */}
                <div className="absolute inset-0 -top-25 flex gap-8 items-center justify-center z-20">

                    {/* Consignment Statistics */}
                    <AnimateOnScroll animation="animate__zoomIn" delay="delay-2000ms" className="animate__slow-2s">
                        <div className="bg-white w-50 p-6 rounded-2xl shadow-lg mx-4 my-auto hover:scale-105 transition-transform duration-400">
                            <div className="bg-primary-100 p-2 mx-auto rounded-2xl w-20 h-20 flex items-center justify-center mb-3">
                                <Image
                                    src="/iconImage/consignment.webp"
                                    alt="Consignment Statistics"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <h3 className="text-center text-2xl font-bold text-primary-950">
                                <Counter target={1500} duration={3000} suffix="+" />
                            </h3>
                            <p className="text-center text-md font-semibold text-primary-600">Consignment Done</p>
                        </div>
                    </AnimateOnScroll>

                    {/* Shipping Statistics */}
                    <AnimateOnScroll animation="animate__zoomIn" delay="delay-2000ms" className="animate__slow-2s">
                        <div className="bg-white w-50 p-6 rounded-2xl shadow-lg mx-4 mt-50 hover:scale-105 transition-transform duration-400">
                            <div className="bg-primary-100 p-2 mx-auto rounded-2xl w-20 h-20 flex items-center justify-center mb-3">
                                <Image
                                    src="/iconImage/happyBuyers.webp"
                                    alt="Consignment Statistics"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <h3 className="text-center text-2xl font-bold text-primary-950">
                                <Counter target={150} duration={3000} suffix="+" />
                            </h3>
                            <p className="text-center text-md font-semibold text-primary-600">Happy Buyers</p>
                        </div>
                    </AnimateOnScroll>

                    {/* Customer Satisfaction Statistics */}
                    <AnimateOnScroll animation="animate__zoomIn" delay="delay-2000ms" className="animate__slow-2s">
                        <div className="bg-white w-50 p-6 rounded-2xl shadow-lg mx-4 my-auto hover:scale-105 transition-transform duration-400">
                            <div className="bg-primary-100 p-2 mx-auto rounded-2xl w-20 h-20 flex items-center justify-center mb-3">
                                <Image
                                    src="/iconImage/yearsExperience.webp"
                                    alt="Consignment Statistics"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <h3 className="text-center text-2xl font-bold text-primary-950">
                                <Counter target={10} duration={3000} suffix="+" />
                            </h3>
                            <p className="text-center text-md font-semibold text-primary-600">Years Experience</p>
                        </div>
                    </AnimateOnScroll>

                </div>

            </div>
        </div>
    );
}

export default Statistics;