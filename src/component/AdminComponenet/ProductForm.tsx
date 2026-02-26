"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ArrowLeft,
  Package,
  Save,
  ImageIcon,
  Sparkles,
  Layers,
} from "lucide-react";
import Button from "../../../Component/Button/Button";
import ImageUpload from "../../../Component/ImageUpload/ImageUpload";
import { useRouter } from "next/navigation";

interface ProductAttributes {
  id?: string;
  name: string;
  description: string;
  image: string;
  packageSizes: string[];
  container: string[];
  categoryId: number;
  categoryName: string;
  categoryLabel: string;
  productsId: string;
}

interface ProductFormValues {
  name: string;
  description: string;
  image: string;
  packageSizes: string;
  container: string;
  categoryId: number;
  categoryName: string;
  categoryLabel: string;
  productsId: string;
}

interface ProductFormProps {
  initialData?: ProductAttributes;
  onSubmit?: (data: ProductAttributes) => void;
}

const ProductForm = ({ initialData, onSubmit }: ProductFormProps) => {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [existingProductIds, setExistingProductIds] = useState<string[]>([]);

  const fetchExistingProductIds = async () => {
    try {
      const response = await fetch("/api/admin/products");
      if (response.ok) {
        const categories = await response.json();
        const ids = categories.flatMap((cat: any) =>
          cat.products.map((p: any) => p.productsId),
        );
        setExistingProductIds(ids);
      }
    } catch (error) {
      console.error("Error fetching existing products:", error);
    }
  };

  useEffect(() => {
    fetchExistingProductIds();
  }, []);

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
    setError,
  } = useForm<ProductFormValues>({
    defaultValues: {
      name: "",
      productsId: "",
      description: "",
      image: "",
      packageSizes: "",
      container: "",
      categoryId: 0,
      categoryName: "",
      categoryLabel: "",
    },
  });

  const isEditing = !!initialData;
  const imageUrl = watch("image");

  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name || "",
        description: initialData.description || "",
        image: initialData.image || "",
        productsId: initialData.productsId || "",
        categoryId: initialData.categoryId || 0,
        categoryName: initialData.categoryName || "",
        categoryLabel: initialData.categoryLabel || "",
        packageSizes: initialData.packageSizes?.join(", ") || "",
        container: initialData.container?.join(", ") || "",
      });
    }
  }, [initialData, reset]);

  const handleFormSubmit = async (values: ProductFormValues) => {
    try {
      setIsSaving(true);

      const data: ProductAttributes = {
        ...values,
        packageSizes: values.packageSizes
          .split(",")
          .map((s: string) => s.trim())
          .filter(Boolean),
        container: values.container
          .split(",")
          .map((s: string) => s.trim())
          .filter(Boolean),
      };

      if (!isEditing) {
        data.id = Date.now().toString();
      } else if (initialData?.id) {
        data.id = initialData.id;
      }

      // data.categoryId = Number(data.categoryId);
      // data.id = Date.now().toString();

      const response = await fetch("/api/admin/products", {
        method: isEditing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error === "Product ID already exists") {
          setError("productsId", {
            type: "manual",
            message: "This Product ID already exists",
          });
          return;
        }
        throw new Error(errorData.error || "Failed to save product");
      }

      alert(
        isEditing
          ? "Product updated successfully!"
          : "Product created successfully!",
      );

      router.push("/admin/products");
      router.refresh();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Something went wrong!");
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageChange = (url: string) => {
    setValue("image", url, { shouldValidate: true });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push("/admin/products")}
          className="inline-flex items-center gap-2 text-base font-medium text-gray-600 hover:text-primary-800 mb-5 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:text-primary-800 group-hover:-trangray-x-1 transition-transform" />
          Back to Products
        </button>

        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden">
          {/* Header */}
          <div className="border-b border-gray-100 bg-linear-to-br from-primary-600 to-primary-800 p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shrink-0">
                <Package className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white">
                  {isEditing ? "Edit Product" : "Create New Product"}
                </h1>
                <p className="text-primary-50 text-base">
                  {isEditing
                    ? "Update product information and save your changes"
                    : "Add a new product to your catalog"}
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="p-8 md:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Side */}
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-6">
                  {/* Product Details */}
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Sparkles className="w-5 h-5 text-primary-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-primary-600">
                      Product Details
                    </h2>
                  </div>

                  {/* Product */}
                  <div className="space-y-6">
                    {/* Product Name */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                          Product Name
                          <span className="text-red-500">*</span>
                        </label>
                      </div>
                      <input
                        {...register("name", { required: true })}
                        placeholder="Enter product name"
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-800"
                      />
                    </div>

                    {/* Products Id */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                          Products Id
                          <span className="text-red-500">*</span>
                        </label>
                      </div>
                      <input
                        {...register("productsId", {
                          required: "Product ID is required",
                          validate: (value) => {
                            if (
                              !isEditing &&
                              existingProductIds.includes(value)
                            ) {
                              return "This Product ID already exists";
                            }
                            if (
                              isEditing &&
                              value !== initialData?.productsId &&
                              existingProductIds.includes(value)
                            ) {
                              return "This Product ID already exists";
                            }
                            return true;
                          },
                        })}
                        placeholder="e.g., C1P1"
                        className={`border uppercase rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring text-gray-800 ${
                          errors.productsId
                            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-300 focus:ring-primary-600 focus:border-primary-600"
                        }`}
                      />
                      {errors.productsId && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.productsId.message}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                          Description
                        </label>
                      </div>
                      <textarea
                        {...register("description")}
                        rows={3}
                        placeholder="Describe your product..."
                        className=" resize-none border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-800"
                      />
                    </div>
                  </div>
                </div>

                {/* Packaging & Shipping */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Package className="w-5 h-5 text-primary-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-primary-600">
                      Packaging & Shipping
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 border border-gray-300 rounded-lg px-3 py-2">
                        <div className="flex items-center justify-between ">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                            Package Sizes
                          </label>
                          <span className="text-xs text-primary-600 italic">
                            Comma separated
                          </span>
                        </div>
                        <input
                          {...register("packageSizes")}
                          placeholder="250g, 500g, 1kg"
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-800"
                        />
                      </div>

                      <div className="space-y-2 border border-gray-300 rounded-lg px-3 py-2">
                        <div className="flex items-center justify-between ">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                            Container Types
                          </label>
                          <span className="text-xs text-primary-600 italic">
                            Comma separated
                          </span>
                        </div>
                        <input
                          {...register("container")}
                          placeholder="Box, Bag, Jar"
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-800"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-8">
                {/* Product Image */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <ImageIcon className="w-5 h-5 text-primary-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-primary-600">
                      Product Image
                    </h2>
                  </div>

                  <ImageUpload value={imageUrl} onChange={handleImageChange} />
                </div>

                {/* Category */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Layers className="w-5 h-5 text-primary-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-primary-600">
                      Category
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {/* Category ID */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                          Category ID
                        </label>
                      </div>
                      <input
                        type="number"
                        {...register("categoryId", { valueAsNumber: true })}
                        placeholder="0"
                        className=" border border-gray-300 text-gray-800 rounded-lg px-3 py-2 w-full placeholder:text-gray-400
                          focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600"
                      />
                    </div>

                    {/* Category Name */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                          Category Name
                        </label>
                      </div>
                      <input
                        {...register("categoryName")}
                        placeholder="e.g., Pulses"
                        className=" border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-800"
                      />
                    </div>

                    {/* Category Label */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                          Category Label
                        </label>
                      </div>
                      <input
                        {...register("categoryLabel")}
                        placeholder="e.g., Pulses"
                        className=" border border-gray-300 rounded-lg px-3 py-2 w-full placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary-600 focus:border-primary-600 text-gray-800"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between gap-4">
              <Button
                variant="outline"
                type="button"
                size="lg"
                onClick={() => router.push("/admin/products")}
              >
                Cancel
              </Button>
              <Button
                // onClick={handleFormSubmit}
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSaving}
                className="gap-2"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    {isEditing ? "Save Changes" : "Create Product"}
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
