import prisma from "@/prisma";
import { connectDB } from "@/src/lib/db";
import {NextResponse} from "next/server"

export const POST = async (req) => {
  // console.log(req);
  try {
    const { name, email,  specialization, experience, phoneno,startTime,endTime, userId } =  await req.json();
    console.log("name", name);
    // if (!name || !email || !specialization || !experience || !phoneno || !endTime || !userId) {
    //   return NextResponse.json(
    //     { message: "All Fields are Required" },
    //     { status: 422 }
    //   );
    // }
    await connectDB();
    const newDoctor = await prisma.doctorProfile.create({
      data: {
        userId,
        name,
        email,
        specialization,
        experience,
        phoneno,
        startTime,
        endTime,
      },
    });

    return NextResponse.json({ message:"newDoctor Added Successfully", newDoctor }, { status: 201 });
  } catch (error) {
    console.log('error', error)
    return NextResponse.json(
      { message: "Error while adding newDoctor"},
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};


