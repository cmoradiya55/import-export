import React from "react";
import { Metadata } from "next";
import ProductComponent from "./ProductComponent";

export const metadata: Metadata = {
    title: "Product - Import Export",
    description: "Learn more about our import export business.",
};

const ProductPage = () => {
    return (
        <ProductComponent />
    );
}

export default ProductPage;