import React from "react";
import { Metadata } from "next";
import ContactComponent from "./ContectComponent";

export const metadata: Metadata = {
    title: "Contact Us - Import Export",
    description: "Learn more about our import export business.",
};

const ContactUsPage = () => {
    return (
       <ContactComponent />
    );
}

export default ContactUsPage;