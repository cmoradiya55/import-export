import { Metadata } from "next";
// import { initDB, Product } from "@/lib/db";
import AdminProductComponent from "./AdminProductComponent";
import { AllProductsList } from "@/data/productData";

export const metadata: Metadata = {
  title: "Admin Product - Import Export",
  description: "Learn more about admin product page export business.",
};

const allProducts = AllProductsList.flatMap((category) =>
  category.products.map((product) => ({
    ...product,
    categoryId: category.categoryId,
    categoryName: category.categoryName,
    categoryLabel: category.categoryLabel,
  })),
);

const AdminProductsPage = async () => {
  // let products = [];
  // try {
  //   await initDB();
  //   const fetchedProducts = await Product.findAll();
  //   // Convert Sequelize instances to plain objects
  //   products = JSON.parse(JSON.stringify(fetchedProducts));
  // } catch (error) {
  //   console.error("Database connection failed in AdminProductsPage:", error);
  //   // Continue with empty products array to allow UI to render
  // }

  return <AdminProductComponent initialProducts={allProducts} />;
};

export default AdminProductsPage;
