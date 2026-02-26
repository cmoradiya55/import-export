"use client";
import ProductForm from "@/component/AdminComponenet/ProductForm";

const NewProductPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Create New Product
      </h1>
      <ProductForm />
    </div>
  );
};

export default NewProductPage;
