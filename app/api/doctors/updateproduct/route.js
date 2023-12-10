import prisma from "@/prisma";
import { connectDB } from "@/src/lib/db";
import { NextResponse } from "next/server";


export const UPDATE = async (req) =>{
    try {
        const {id,title, description, price, category, image, type, userId} = await req.json()
        await connectDB
      const updateproduct = await prisma.product.update({
            where: {
                id: id
            },
            data: {
                title: title,
                description: description,
                price: price,
                category: category,
                image: image,
                type,
                userId: userId
            }
        })
        return NextResponse.json({message:"Product Updated Successfully", updateproduct }, { status: 200 });
        
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Error while updating Products"},
            { status: 500 }
        );
    }

}