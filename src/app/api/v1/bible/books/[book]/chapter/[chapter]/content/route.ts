import { NextResponse } from "next/server";
import prisma from "../../../../../../../../../../prisma/prisma-client";


export async function GET(_req: Request,{params}: {params:{book:string, chapter: string}}) {
    const { book, chapter } = params;
    const posts = await prisma.wContent.findMany({
        include:{book:true},
        where: {bible_id: Number(book), chapter_id: Number(chapter)},
     
    });


    return NextResponse.json(posts);
}