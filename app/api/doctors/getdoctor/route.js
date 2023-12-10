import prisma from "@/prisma";
import { connectDB } from "@/src/lib/db";
import {NextResponse} from "next/server"
export const dynamic = "force-dynamic"
export const revalidate = 10
await connectDB();
export const GET = async () => {
  try {
    const allDoctors = await prisma.doctorProfile.findMany()

    return NextResponse.json({ allDoctors }, { status: 200 });
  } catch (error) {
    console.log('error', error)
    return NextResponse.json(
      { message: "Error while getting allDoctors"},
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};


