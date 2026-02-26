import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "products.json");

function readFile() {
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
}

function writeFile(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// GET API
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const categories = readFile();

    if (category) {
      // Return all categories to keep filter buttons visible,
      // but only include products for the selected category.
      const filteredCategories = categories.map((cat: any) => ({
        ...cat,
        products:
          String(cat.categoryLabel) === String(category) ? cat.products : [],
      }));
      return NextResponse.json(filteredCategories);
    }

    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

// POST API
export async function POST(req: Request) {
  const newProduct = await req.json();
  const categories = readFile();

  // Check for duplicate productsId across all categories
  for (const cat of categories) {
    if (cat.products.some((p: any) => p.productsId === newProduct.productsId)) {
      return NextResponse.json(
        { error: "Product ID already exists" },
        { status: 400 },
      );
    }
  }

  const category = categories.find(
    (cat: any) => cat.categoryId === newProduct.categoryId,
  );

  if (category) {
    category.products.push(newProduct);
  } else {
    // If category does not exist, create it
    categories.push({
      categoryId: newProduct.categoryId,
      categoryName: newProduct.categoryName,
      categoryLabel: newProduct.categoryLabel,
      products: [newProduct],
    });
  }

  writeFile(categories);

  return NextResponse.json({ success: true });
}

// PUT (UPDATE) API
export async function PUT(req: Request) {
  const updatedProduct = await req.json();
  const categories = readFile();

  // Check for duplicate productsId across all categories (excluding current product)
  for (const cat of categories) {
    if (
      cat.products.some(
        (p: any) =>
          p.productsId === updatedProduct.productsId &&
          p.id !== updatedProduct.id,
      )
    ) {
      return NextResponse.json(
        { error: "Product ID already exists" },
        { status: 400 },
      );
    }
  }

  for (const category of categories) {
    const productIndex = category.products.findIndex(
      (p: any) => p.id === updatedProduct.id,
    );

    if (productIndex !== -1) {
      category.products[productIndex] = updatedProduct;
      writeFile(categories);
      return NextResponse.json({ success: true });
    }
  }

  return NextResponse.json({ error: "Product not found" }, { status: 404 });
}

// DELETE API
export async function DELETE(req: Request) {
  const { id } = await req.json();
  const categories = readFile();

  for (const category of categories) {
    const originalLength = category.products.length;

    category.products = category.products.filter((p: any) => p.id !== id);

    if (category.products.length !== originalLength) {
      writeFile(categories);
      return NextResponse.json({ success: true });
    }
  }

  return NextResponse.json({ error: "Product not found" }, { status: 404 });
}
