"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import AnimateOnScroll from "../../../../Component/AnimateOnScroll/AnimateOnScroll";
// import { AllProductsList } from "@/data/productData";

const ProductComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cat = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(cat);
  const [allProductsList, setAllProductsList] = useState<any[]>([]);
  //   const allProducts = AllProductsList.flatMap((cat) => cat.products);
  const allProducts = Array.isArray(allProductsList)
    ? allProductsList.flatMap((cat: any) =>
        (cat.products || []).map((product: any) => ({
          ...product,
          categoryName: cat.categoryName,
          categoryId: cat.categoryId,
        })),
      )
    : [];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = cat
          ? `/api/admin/products?category=${encodeURIComponent(cat)}`
          : "/api/admin/products";
        const res = await fetch(url);
        const data = await res.json();

        console.log("API Data", data);

        if (Array.isArray(data)) {
          setAllProductsList(data);
        } else {
          console.error("API returned non-array data:", data);
          setAllProductsList([]);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [cat]);

  //   const categoriesToShow =
  //     selectedCategory === null
  //       ? [{ categoryId: "all", categoryName: "All", products: allProducts }]
  //       : AllProductsList.filter(
  //           (cat) => String(cat.categoryLabel) === String(selectedCategory),
  //         );

  const categoriesToShow =
    selectedCategory === null
      ? [{ categoryId: "all", categoryName: "All", products: allProducts }]
      : allProductsList.filter(
          (cat) => String(cat.categoryLabel) === String(selectedCategory),
        );

  if (!allProductsList.length) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Loading Products...
      </div>
    );
  }

  return (
    <div className="pb-16 bg-primary-50 min-h-screen">
      {/* Header */}
      <div className="relative w-full h-56 md:h-72 flex items-center justify-center mb-10 overflow-hidden shadow-lg">
        <img
          src="/image/bgHeader.webp"
          alt="Products Header Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <h2 className="z-20 text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg text-center tracking-tight px-4">
          <AnimateOnScroll
            animation="animate__backInUp"
            delay="delay-500ms"
            className="animate__slow-3s"
          >
            Our Products
          </AnimateOnScroll>
        </h2>
      </div>

      <div className="container mx-auto px-4">
        {/* Product Category Filter - Compact with 'All' */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {/* All filter */}
          <button
            type="button"
            onClick={() => {
              setSelectedCategory(null);
              router.push("/product", { scroll: false });
            }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium border transition-all shadow-sm text-xs md:text-sm
              ${
                selectedCategory === null
                  ? "bg-primary-700 text-white border-primary-700 shadow-primary-200"
                  : "bg-white text-primary-700 border-primary-200 hover:bg-primary-100 hover:border-primary-400 hover:text-primary-900 focus:ring-2 focus:ring-primary-400"
              }
            `}
            style={{ boxShadow: "0 1px 4px 0 rgba(216, 70, 239, 0.05)" }}
          >
            <span className="whitespace-nowrap">All</span>
          </button>
          {/* {AllProductsList.map((category, idx) => { */}
          {allProductsList.map((category, idx) => {
            const icons = [
              "🥜", // Nuts & Dried Fruits
              "🌶️", // Spices
              "🌱", // Seeds
              "🫛", // Dehydrated Vegetables
              "🫘", // Pulses
              "🧪", // Food Chemicals
              "🌿", // Herbs
              "🛢️", // Oils
              "🍯", // Peanut Butter
              "🍫", // Other Products
            ];
            return (
              <button
                key={category.categoryId}
                type="button"
                onClick={() => {
                  setSelectedCategory(category.categoryLabel);
                  router.push(
                    `/product?category=${encodeURIComponent(category.categoryLabel)}`,
                    { scroll: false },
                  );
                }}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium border transition-all shadow-sm text-xs md:text-sm
                                    ${
                                      String(selectedCategory) ===
                                      String(category.categoryLabel)
                                        ? "bg-primary-700 text-white border-primary-700 shadow-primary-200"
                                        : "bg-white text-primary-700 border-primary-200 hover:bg-primary-100 hover:border-primary-400 hover:text-primary-900 focus:ring-2 focus:ring-primary-400"
                                    }
                                `}
                style={{ boxShadow: "0 1px 4px 0 rgba(216, 70, 239, 0.05)" }}
              >
                <span className="text-base md:text-lg">
                  {icons[idx % icons.length]}
                </span>
                <span className="whitespace-nowrap">
                  {category.categoryName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Categories and Products (Filtered) */}
        <div className="space-y-14">
          {categoriesToShow.map((category) => (
            <div key={category.categoryId}>
              {category.categoryId !== "all" && (
                <h3 className="text-2xl font-bold text-primary-700 mb-6 border-l-4 border-primary-700 px-4 bg-primary-600/10 inline-block rounded-r-lg shadow-sm">
                  {category.categoryName}
                </h3>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                {/* {category.products.map((product: any) => { */}
                {(category.products || []).map((product: any) => {
                  // Find the actual category for this product
                  //   const productCategory = AllProductsList.find((cat) =>
                  const productCategory = allProductsList.find((cat) =>
                    cat.products.some((p: any) => p.id === product.id),
                  );
                  const categoryName = productCategory
                    ? productCategory.categoryName
                    : "";
                  return (
                    <AnimateOnScroll
                      animation="animate__fadeInUp"
                      delay="delay-1000ms"
                      className="animate__slow-2s"
                    >
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-primary-100 flex flex-col overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400"
                        tabIndex={0}
                      >
                        <div className="h-80 w-full flex items-center justify-center overflow-hidden bg-primary-50 relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-primary-800/50 opacity-0 group-hover:opacity-100 group-focus:opacity-100 flex items-center justify-center transition-opacity duration-200">
                            <p className="text-white text-center text-lg font-bold px-4 py-2 rounded bg-primary-950 shadow-lg flex flex-col items-center gap-1">
                              {product.name}
                              <span className="text-white text-xs font-medium">
                                {categoryName}
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </AnimateOnScroll>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
