import prisma from "@/prisma";
import { connectDB } from "@/src/lib/db";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const revalidate = 20;
export const GET = async (req) => {
  try {
    const url = new URL(req.url);
    const doctorProfileId = url.searchParams.get("doctorProfileId");
    await connectDB();
    if (!doctorProfileId) {
      return NextResponse.json(
        { error: "Invalid  doctorProfileId" },
        { status: 400 }
      );
    }

    const user = await prisma.patientAppointment.findUnique({
      where: {
        id: doctorProfileId,
      },
      include: {
        doctorProfile: true,
      },
    });

    const doctorAppointments = user?.patientAppointment || [];

    return NextResponse.json({ doctorAppointments }, { status: 200 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({
      message: "Error While Getting  doctorAppointments",
    });
  }
};
