import { sequelize, Product, BlogPost } from "../src/lib/db";
import { AllBlogData } from "../src/data/blogData";
import { AllProductsList } from "../src/data/productData";

async function seed() {
  // Connect to DB
  await sequelize.authenticate();
  console.log("Database connected");

  // Force sync (drops tables) – use only in development!
  await sequelize.sync({ force: true });
  console.log("Database synced");

  // Seed products
  for (const category of AllProductsList) {
    for (const product of category.products) {
      await Product.create({
        ...product,
        categoryId: category.categoryId,
        categoryName: category.categoryName,
        categoryLabel: category.categoryLabel,
        productsId: "",
      });
    }
  }
  console.log("Products seeded");

  // Seed blog posts
  for (const post of AllBlogData) {
    await BlogPost.create(post);
  }
  console.log("Blog posts seeded");

  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
