import React, { Suspense } from "react";
import { Metadata } from "next";
import ProductComponent from "./ProductComponent";

export const metadata: Metadata = {
  title: "Product - Import Export",
  description: "Learn more about our import export business.",
};

const ProductPage = () => {
  return (
    <Suspense
      fallback={
        <div className="text-center py-20 text-lg font-semibold">
          Loading Products...
        </div>
      }
    >
      <ProductComponent />
    </Suspense>
  );
};

export default ProductPage;
