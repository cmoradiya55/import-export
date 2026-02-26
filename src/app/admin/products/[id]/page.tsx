"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";
// import type { ProductAttributes } from "@/lib/db/types";
import ProductForm from "@/component/AdminComponenet/ProductForm";

const EditProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/admin/products`)
      .then((res) => res.json())
      .then((data) => {
        const allProducts = data.flatMap((cat: any) =>
          (cat.products || []).map((product: any) => ({
            ...product,
            categoryName: cat.categoryName,
            categoryId: cat.categoryId,
            categoryLabel: cat.categoryLabel,
            productsId: product.productsId || product.id,
          })),
        );
        setProduct(allProducts.find((p: any) => p.id === id));
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-indigo-400" />
      </div>
    );
  }

  if (!product)
    return (
      <div className="text-gray-400 text-center py-20">Product not found</div>
    );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Edit Product</h1>
      <ProductForm initialData={product} />
    </div>
  );
};

export default EditProductPage;
