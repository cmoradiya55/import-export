import React from "react";
import { Metadata } from "next";
import AboutComponent from "./AboutComponent";

export const metadata: Metadata = {
    title: "About Us - Import Export",
    description: "Learn more about our import export business.",
};

const AboutPage = () => {

    return (
        <AboutComponent />
    );
}

export default AboutPage;