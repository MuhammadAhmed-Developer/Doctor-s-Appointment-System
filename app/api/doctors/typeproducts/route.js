import prisma from "@/prisma";
import { connectDB } from "@/src/lib/db";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"
export const revalidate = 20
export const GET = async (req) => {
  try {
    const url = new URL(req.url);
    const type = url.searchParams.get("type");

    if (!type) {
      return NextResponse.json({ message: "No type found" }, { status: 400 });
    }

    await connectDB();
    const products = await prisma.product.findMany({
      where: {
        type: type,
      },
    });

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error while getting type products" },
      { status: 500 }
    );
  }
};
