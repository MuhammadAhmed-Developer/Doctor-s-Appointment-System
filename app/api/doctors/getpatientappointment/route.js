import prisma from "@/prisma";
import { connectDB } from "@/src/lib/db";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"
export const revalidate = 20
export const GET = async (req) => {
    try {
      const url = new URL(req.url);
      const userId = url.searchParams.get("userId");
       await connectDB()
      if (!userId) {
        return NextResponse.json({ error: "Invalid  userId" }, { status: 400 });
      }
  
      const user = await prisma.patientAppointment.findUnique({
        where: {
            id: userId,
        },
        include: {
          user: true,
          doctorProfile: true,
        },
      });
  
      const patientAppointment = user?.patientAppointment || [];
  
      return NextResponse.json({ patientAppointment }, { status: 200 });
    } catch (error) {
      console.log("error", error);
      return NextResponse.json({message:"Error While Getting  patientAppointment"})
    }
  };
  