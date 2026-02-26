"use client";
import React, { useEffect, useState } from "react";
import AnimateOnScroll from "../../../../../Component/AnimateOnScroll/AnimateOnScroll";
// import { AllProductsList } from "@/data/productData";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  packageSizes: string[];
  container: string[];
}

const ProductDetailsComponent = ({ productId }: { productId: string }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // const product = AllProductsList.flatMap((cat) => cat.products).find(
  //   (p) => p.id === productId,
  // );

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/admin/products");
        const data = await res.json();

        // Flatten all products from categories
        const allProducts = data.flatMap((cat: any) => cat.products || []);

        const foundProduct = allProducts.find(
          (p: Product) => p.id === productId,
        );

        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-lg font-semibold text-primary-700">
          Loading product...
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[60vh] bg-primary-50 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-primary-700 mb-2">
          Product Not Found
        </h2>
        <p className="text-primary-500">
          The product you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="py-16 bg-primary-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center px-10">
            <AnimateOnScroll
              animation="animate__zoomIn"
              delay="delay-500ms"
              className="animate__slow-3s"
            >
              <div className="h-150 w-full rounded-2xl flex items-center justify-center overflow-hidden bg-primary-50 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <AnimateOnScroll
              animation="animate__backInUp"
              delay="delay-500ms"
              className="animate__slow-3s"
            >
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary-900 mb-2">
                {product.name}
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll
              animation="animate__fadeInUp"
              delay="delay-1000ms"
              className="animate__slow-2s"
            >
              <p className="text-gray-600 text-base md:text-lg mb-4">
                {product.description}
              </p>
            </AnimateOnScroll>
            {/* Table */}
            <AnimateOnScroll
              animation="animate__fadeInUp"
              delay="delay-1000ms"
              className="animate__slow-2s"
            >
              <div className="w-full mt-8">
                <h2 className="text-xl font-bold text-primary-800 mb-4">
                  Product Details
                </h2>
                <div className="overflow-x-auto rounded-lg shadow-md bg-white">
                  <table className="min-w-full text-left text-primary-700 border border-primary-100">
                    <tbody>
                      {product.packageSizes && (
                        <tr className="border-b border-primary-100 hover:bg-primary-50/50">
                          <th className="py-3 px-4 font-semibold border-white border-b bg-primary-100 text-primary-800 w-1/3">
                            Package Sizes
                          </th>
                          <td className="py-3 px-4">
                            {product.packageSizes.join(", ")}
                          </td>
                        </tr>
                      )}
                      {product.container && (
                        <tr className="border-b border-primary-100 hover:bg-primary-50/50">
                          <th className="py-3 px-4 font-semibold border-white border-b bg-primary-100 text-primary-800">
                            Container
                          </th>
                          <td className="py-3 px-4">{product.container}</td>
                        </tr>
                      )}
                      <tr className="border-b border-primary-100 hover:bg-primary-50/50">
                        <th className="py-3 px-4 font-semibold bg-primary-100 text-primary-800">
                          Quality Control
                        </th>
                        <td className="py-3 px-4">100% Checked</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsComponent;
