"use client"
import { bibles } from "@/data/bible_names";
import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Book} from '../types/types';
type BookNameType ={
  testament : string,
  books: Book[] | undefined,
   handleOpenBibleName : any
}
const BookName = ({books, testament, handleOpenBibleName}:BookNameType) => {
  return <div className="col-span-12 md:col-auto">
  <div className="text-4xl  md:text-2xl text-red-400 rounded-lg underline text-center  pb-3">{testament}</div>
  <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-2 rounded-lg shadow-lg px-2 pb-6 pt-2">

    {books?.map(book =>
      <button key={book.id} onClick={() => handleOpenBibleName(book.id)} className="py-2 px-2 bg-slate-50 rounded-lg shadow-md hover:bg-red-200 hover:text-white">{book.name}</button>
    )}

  </div>
</div>
} 

export default function Home() {
  const router = useRouter();
  const {data:books, isLoading} = useSWR<Book[]>('/bible/books', fetcher);
  
  function handleOpenBibleName(bible: number): void {

    router.push(`bible-content/${bible}`);
  }

  if (isLoading )
    return <>Loading ...</>;
  return (
    <main className="flex min-h-screen flex-col justify-between pt-10 pb-20 px-6">
      <div className="grid grid-cols-2 gap-2">
       
        <BookName 
        testament="Gal'a Maachchaa"
        books={books?.filter(b=>b.testament_id===1)} 
        handleOpenBibleName={handleOpenBibleName}
         />
          <BookName 
        testament="Ooratta Maachchaa"
        books={books?.filter(b=>b.testament_id===2)} 
        handleOpenBibleName={handleOpenBibleName}
         />
      </div>

    </main>
  );
}