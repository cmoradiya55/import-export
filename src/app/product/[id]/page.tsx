import React from "react";
import ProductDetailsComponent from "./ProductDetailsComponent";

const ProductDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return <ProductDetailsComponent productId={id} />;
};

export default ProductDetailsPage;
