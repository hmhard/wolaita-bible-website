import { NextResponse } from "next/server";
import prisma from "../../../../../../../prisma/prisma-client";
import { NextApiRequest } from "next";


export async function GET(req: NextApiRequest, { params }: { params: { book: string } }) {
  
    const { book:bookId } = params;
    const chapters = await prisma.wContent.findMany({
        where: {
            bible_id: Number(bookId)
            ,
        },
        distinct: ['chapter_id', 'bible_id'],
      
        select: {
            book: true,
            bible_id:true,
            chapter_id:true
        }
      
        

        
    });


    return NextResponse.json(chapters);
}