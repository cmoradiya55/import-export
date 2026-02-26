import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

const DATA_PATH = path.join(process.cwd(), "src/data/products.json");

async function getProducts() {
  try {
    const data = await fs.readFile(DATA_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading products.json:", error);
    return [];
  }
}

async function saveProducts(data: any) {
  await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}

// GET API
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const id = searchParams.get("id");

    const grouped = await getProducts();

    if (id) {
      for (const group of grouped) {
        const product = group.products.find(
          (p: any) => p.id === id || p.productsId === id,
        );
        if (product) return NextResponse.json(product);
      }
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    if (category) {
      const filteredGroups = grouped.map((group: any) => ({
        ...group,
        products:
          String(group.categoryLabel) === String(category)
            ? group.products
            : [],
      }));
      return NextResponse.json(filteredGroups);
    }

    return NextResponse.json(grouped);
  } catch (error: any) {
    console.error("GET Products Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}

// POST API
export async function POST(req: Request) {
  try {
    const newProduct = await req.json();
    const grouped = await getProducts();

    // Find category
    const categoryIndex = grouped.findIndex(
      (g: any) => g.categoryId === newProduct.categoryId,
    );

    if (categoryIndex === -1) {
      // Create new category if not exists
      grouped.push({
        categoryId: newProduct.categoryId,
        categoryName: newProduct.categoryName,
        categoryLabel: newProduct.categoryLabel,
        products: [{ ...newProduct, id: Date.now().toString() }],
      });
    } else {
      // Add to existing category
      grouped[categoryIndex].products.push({
        ...newProduct,
        id: Date.now().toString(),
      });
    }

    await saveProducts(grouped);
    return NextResponse.json({
      success: true,
      message: "Product added successfully",
    });
  } catch (error: any) {
    console.error("POST Products Error:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 },
    );
  }
}

// PUT (UPDATE) API
export async function PUT(req: Request) {
  try {
    const updatedProduct = await req.json();
    const grouped = await getProducts();
    let found = false;

    for (let i = 0; i < grouped.length; i++) {
      const productIndex = grouped[i].products.findIndex(
        (p: any) => p.id === updatedProduct.id,
      );
      if (productIndex !== -1) {
        grouped[i].products[productIndex] = { ...updatedProduct };
        found = true;
        break;
      }
    }

    if (!found) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    await saveProducts(grouped);
    return NextResponse.json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error: any) {
    console.error("PUT Products Error:", error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 },
    );
  }
}

// DELETE API
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    const grouped = await getProducts();
    let deleted = false;

    for (let i = 0; i < grouped.length; i++) {
      const initialCount = grouped[i].products.length;
      grouped[i].products = grouped[i].products.filter((p: any) => p.id !== id);
      if (grouped[i].products.length < initialCount) {
        deleted = true;
        break;
      }
    }

    if (!deleted) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    await saveProducts(grouped);
    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error: any) {
    console.error("DELETE Products Error:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 },
    );
  }
}
