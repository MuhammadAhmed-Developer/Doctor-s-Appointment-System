import prisma from "@/prisma";
import { connectDB } from "@/src/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id = "id" } = params;
  console.log("iddddd", id);
  try {
    await connectDB;
    const productDetail = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ productDetail });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error });
  }
}
