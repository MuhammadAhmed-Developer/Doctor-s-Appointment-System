import prisma from "@/prisma";
import { connectDB } from "@/src/lib/db";
import { NextResponse } from "next/server";

export const DELETE= async (req) => {
  try {
    const { id } = await req.json(); 
    await connectDB();

    const deleteProduct = await prisma.product.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      message: "Product Deleted Successfully",
      deleteProduct,
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "Error While Deleting Product" });
  }
};
