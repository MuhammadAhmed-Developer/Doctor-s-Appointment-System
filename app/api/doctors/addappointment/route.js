import prisma from "@/prisma";
import { connectDB } from "@/src/lib/db";
import {NextResponse} from "next/server"

export const POST = async (req) => {
  try {
    const { name, email,  phoneno,description , userId , appointmentDate, appointmentTime, doctorProfileId, duration} =  await req.json();
    if (!name || !email || !phoneno || !description || !appointmentDate || !appointmentTime || !userId ||!doctorProfileId  ||!duration) {
      return NextResponse.json(
        { message: "All Fields are Required" },
        { status: 422 }
      );
    }
    await connectDB();
    const newDoctor = await prisma.patientAppointment.create({
      data: {
        userId,
        doctorProfileId,
        name,
        phoneno,
        email,
        description,
        appointmentDate,
        appointmentTime,
        duration,
      },
    });

    return NextResponse.json({ message:"patientAppointment Added Successfully", newDoctor }, { status: 201 });
  } catch (error) {
    console.log('error', error)
    return NextResponse.json(
      { message: "Error while adding patientAppointment"},
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};


