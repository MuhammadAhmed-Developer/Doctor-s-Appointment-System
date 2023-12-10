import prisma from '@/prisma';
import { connectDB } from '@/src/lib/db';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  try {
    const url = new URL(req.url);
    const category = url.searchParams.get('category');
    
    if (!category) {
      return NextResponse.json({ message: 'No category found' }, { status: 400 });
    }

    await connectDB(); 
    const products = await prisma.product.findMany({
      where: {
        category: category,
      },
    });

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Error while getting category products' },
      { status: 500 }
    );
  }
};
