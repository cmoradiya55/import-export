import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { BlogPost, initDB } from '@/lib/db';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await initDB();
  const blogPost = await BlogPost.findAll();
  return NextResponse.json(blogPost);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await initDB();
  const data = await request.json();
  const blogPost = await BlogPost.create(data);
  return NextResponse.json(blogPost, { status: 201 });
}