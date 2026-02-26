import { NextResponse } from "next/server";
import { Product } from "@/lib/db";
import { Op } from "sequelize";

// Helper function to group products by category as expected by the frontend
function groupProductsByCategory(products: any[]) {
  const groups: any[] = [];
  products.forEach((p) => {
    const productData = p.get ? p.get({ plain: true }) : p;
    let group = groups.find((g) => g.categoryId === productData.categoryId);
    if (!group) {
      group = {
        categoryId: productData.categoryId,
        categoryName: productData.categoryName,
        categoryLabel: productData.categoryLabel,
        products: [],
      };
      groups.push(group);
    }
    group.products.push(productData);
  });
  return groups;
}

// GET API
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const allProducts = await Product.findAll();
    const grouped = groupProductsByCategory(allProducts);

    if (category) {
      // Return all categories to keep filter buttons visible,
      // but only include products for the selected category.
      const filteredGroups = grouped.map((group) => ({
        ...group,
        products:
          String(group.categoryLabel) === String(category)
            ? group.products
            : [],
      }));
      return NextResponse.json(filteredGroups);
    }

    return NextResponse.json(grouped);
  } catch (error) {
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
    const newProductData = await req.json();

    // Check for duplicate productsId
    const existing = await Product.findOne({
      where: { productsId: newProductData.productsId },
    });
    if (existing) {
      return NextResponse.json(
        { error: "Product ID already exists" },
        { status: 400 },
      );
    }

    await Product.create(newProductData);
    return NextResponse.json({ success: true });
  } catch (error) {
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
    const updatedProductData = await req.json();
    const { id, ...rest } = updatedProductData;

    // Check for duplicate productsId across all entries (excluding the one being updated)
    const duplicate = await Product.findOne({
      where: {
        productsId: updatedProductData.productsId,
        id: { [Op.ne]: id },
      },
    });

    if (duplicate) {
      return NextResponse.json(
        { error: "Product ID already exists" },
        { status: 400 },
      );
    }

    const [updatedCount] = await Product.update(rest, {
      where: { id },
    });

    if (updatedCount === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
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

    const deletedCount = await Product.destroy({
      where: { id },
    });

    if (deletedCount === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE Products Error:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 },
    );
  }
}
