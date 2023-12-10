import prisma from "@/prisma";
import { connectDB } from "@/src/lib/db";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"
export const revalidate = 20
export const GET = async () => {
  try {
    await connectDB();
    const users = await prisma.user.findMany();
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { message: "Error while getting users" },
      { status: 500 }
    );
  }
};
