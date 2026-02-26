import React from "react";
import ProductDetailsComponent from "./ProductDetailsComponent";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Products Details - Import Export",
    description: "Learn more about products details our import export business.",
}

const ProductDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return <ProductDetailsComponent productId={id} />;
};

export default ProductDetailsPage;
