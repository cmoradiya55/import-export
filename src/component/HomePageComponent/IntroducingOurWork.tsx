import AllIconComponent from "@/public/AllIconComponent";
import React from "react";

const IntroducingOurWork = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Text Content */}
            <div className="w-1/2">
                <div className="flex items-center justify-center mb-2">
                    <AllIconComponent width={60} height={60} className="text-primary-900" icon="headerIcon" />
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-primary-900 mb-10 flex items-center gap-2">
                    Introducing Our Work
                </h2>
                <h3 className="text-3xl text-black font-bold mb-10">
                    Tailoring services for global exporters with personalized attention.
                </h3>
                <p className="text-lg text-gray-700 mb-5 mr-10">
                    Our creativity is driven by depth study in an effort to give you the best result and position of your product successfully in international market.
                </p>
                <p className="text-lg text-gray-700 mr-10">
                    We're on a mission to start studying the exact marcket for your products worldwide and establish the product in appropriate market.
                </p>
            </div>

            {/* Image */}
            <div className="w-1/2">
                <img
                    src="/image/introducingOurWork.webp"
                    alt="About Company"
                    className="w-full h-full object-cover"
                />
            </div>

        </div>
    );
};

export default IntroducingOurWork;