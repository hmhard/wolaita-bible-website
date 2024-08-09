import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma-client";


export async function GET() {
    const posts = await prisma.bibleName.findMany({include:{testament:true}});


    return NextResponse.json(posts);
}