import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import fs from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

const DATA_PATH = path.join(process.cwd(), "src/data/blog.json");

async function getBlogs() {
  try {
    const data = await fs.readFile(DATA_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading blog.json:", error);
    // If file doesn't exist, try to fall back to blogData.tsx or return empty
    return [];
  }
}

async function saveBlogs(data: any) {
  await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const blogs = await getBlogs();
  return NextResponse.json(blogs);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const newPost = await request.json();
    const blogs = await getBlogs();

    const postWithId = {
      ...newPost,
      id: newPost.id || Date.now().toString(),
      date:
        newPost.date ||
        new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
    };

    blogs.push(postWithId);
    await saveBlogs(blogs);

    return NextResponse.json(postWithId, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const updatedPost = await request.json();
    let blogs = await getBlogs();

    const index = blogs.findIndex((b: any) => b.id === updatedPost.id);
    if (index === -1) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 },
      );
    }

    blogs[index] = { ...updatedPost };
    await saveBlogs(blogs);

    return NextResponse.json(blogs[index]);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update blog post" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await request.json();
    let blogs = await getBlogs();

    const initialLength = blogs.length;
    blogs = blogs.filter((b: any) => b.id !== id);

    if (blogs.length === initialLength) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 },
      );
    }

    await saveBlogs(blogs);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 },
    );
  }
}
