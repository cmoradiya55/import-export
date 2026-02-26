"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2, Loader2, Package, Grid3X3 } from "lucide-react";
import type { ProductAttributes } from "@/lib/db/types";

// interface AdminProductComponentProps {
//   initialProducts: ProductAttributes[];
// }

const AdminProductComponent = () => {
  const [products, setProducts] = useState<ProductAttributes[]>([]);
  const [loading, setLoading] = useState(true);
  const [idToDelete, setIdToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch products from API (GET)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/admin/products");
        const data = await res.json();

        // Flatten category-based structure
        const allProducts = data.flatMap((cat: any) =>
          (cat.products || []).map((product: any) => ({
            ...product,
            categoryName: cat.categoryName,
            categoryId: cat.categoryId,
            categoryLabel: cat.categoryLabel,
            productsId: product.productsId || product.id,
          })),
        );

        setProducts(allProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (idToDelete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [idToDelete]);

  // Delete product from API (DELETE)
  const confirmDelete = async () => {
    if (!idToDelete) return;

    try {
      setIsDeleting(true);

      const res = await fetch("/api/admin/products", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: idToDelete }),
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      setProducts((prev) => prev.filter((p) => p.id !== idToDelete));

      setIdToDelete(null);
    } catch (error) {
      console.error("Deletion failed:", error);
      alert("Failed to delete product.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary-700" />
      </div>
    );
  }

  // Generate a deterministic hue from a string
  const getHue = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++)
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    return Math.abs(hash) % 360;
  };

  return (
    <div>
      {/* Delete Modal */}
      {idToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => !isDeleting && setIdToDelete(null)}
          />
          <div className="relative z-10 bg-white rounded-[2.5rem] p-10 max-w-sm w-full shadow-2xl border border-gray-100 animate-in zoom-in-95 duration-300">
            {/* Red accent bar */}
            <div className="absolute top-0 left-12 right-12 h-1.5 bg-red-500 rounded-b-full shadow-lg shadow-red-500/20" />

            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-red-100 transition-transform hover:rotate-12 duration-500">
              <Trash2 className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-3 tracking-tight">
              Delete Product?
            </h3>
            <p className="text-center text-gray-500 font-medium mb-10 leading-relaxed">
              This action is permanent and will remove the premium item from
              your catalog immediately.
            </p>
            <div className="flex gap-4">
              <button
                disabled={isDeleting}
                onClick={() => setIdToDelete(null)}
                className="flex-1 py-3 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-2xl text-sm font-bold transition-all duration-300 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                disabled={isDeleting}
                onClick={confirmDelete}
                className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white rounded-2xl text-sm font-bold transition-all duration-300 shadow-xl shadow-red-600/20 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 disabled:opacity-50 group"
              >
                {isDeleting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Trash2 className="w-5 h-5 transition-transform group-hover:-rotate-12" />
                    Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-10 mb-10">
        {/* Premium Header Card */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary-600 to-primary-800 p-6 shadow-xl shadow-primary-900/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-400/10 rounded-full -ml-16 -mb-16 blur-2xl" />

          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md border border-white/30">
                  <Grid3X3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold text-primary-50 tracking-[0.2em] uppercase opacity-80">
                  Admin Console / Inventory
                </span>
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tight">
                Product Catalog
              </h1>
              <p className="text-primary-50 font-medium text-md opacity-90 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                {products.length} Premium assets successfully cataloged
              </p>
            </div>

            <Link
              href="/admin/products/new"
              className="group flex items-center justify-center gap-3 px-6 py-2 bg-white text-primary-700 hover:bg-primary-50 rounded-full text-sm font-black transition-all duration-300 shadow-2xl shadow-black/10 hover:-translate-y-1 active:scale-95 shrink-0"
            >
              <Plus className="w-6 h-6 transition-transform group-hover:rotate-90 duration-500" />
              Create Premium Item
            </Link>
          </div>
        </div>

        {/* Main Grid Content */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-1">
            {products.map((product) => {
              const hue = getHue(product.name);
              const initial = product.name.charAt(0).toUpperCase();

              return (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-100"
                >
                  {/* Image Container */}
                  <div className="relative h-48 bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-4xl font-bold"
                        style={{
                          background: `linear-gradient(135deg, hsl(${hue}, 60%, 95%), hsl(${hue}, 60%, 85%))`,
                          color: `hsl(${hue}, 70%, 40%)`,
                        }}
                      >
                        {initial}
                      </div>
                    )}
                    {/* Actions Overlay */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link
                        href={`/admin/products/${product.id}`}
                        className="p-2.5 bg-white/90 backdrop-blur-sm text-gray-600 hover:text-primary-600 rounded-xl shadow-lg hover:shadow-primary-100 transition-all"
                        title="Edit Item"
                      >
                        <Pencil className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => setIdToDelete(product.id)}
                        className="p-2.5 bg-white/90 backdrop-blur-sm text-gray-600 hover:text-red-500 rounded-xl shadow-lg hover:shadow-red-100 transition-all"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-700 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {product.description || "No description provided."}
                    </p>

                    {/* Category and ID Row */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
                        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                          {product.categoryName}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded-md group-hover:bg-primary-600/10 group-hover:text-primary-600">
                        {(product.productsId || "")
                          .toString()
                          .substring(0, 8)
                          .toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State with Premium Styling */
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-24 h-24 bg-linear-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center mb-8 border border-primary-600 shadow-xl shadow-primary-500/5 transition-transform hover:scale-110 duration-500">
              <Package className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-black text-primary-900 mb-3 tracking-tight">
              Inventory is Pristine
            </h2>
            <p className="text-gray-500 font-medium max-w-sm mx-auto leading-relaxed mb-6">
              Your stock management system is currently waiting for premium
              items. Start building your portfolio today.
            </p>
            <Link
              href="/admin/products/new"
              className="flex items-center gap-3 px-8 py-3 bg-primary-950 text-white hover:bg-primary-900 rounded-2xl text-sm font-black transition-all duration-300 shadow-xl shadow-primary-950/20 hover:-translate-y-1 active:scale-95"
            >
              <Plus className="w-5 h-5" />
              Add First Asset
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProductComponent;
