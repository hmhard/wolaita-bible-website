
import TestamentText from "./TestamentText";
import { Book, Chapter } from "@/types/types";
import Link from "next/link";
import { baseUrl, testaments } from "@/data/constants";
import { Fragment } from "react";
type BibleNameType = {
    selectedChapter: Chapter | undefined,
}

type BookButtonType = {
    book: Book,
    selectedChapter: Chapter | undefined,

}

const BookButton = ({ book, selectedChapter }: BookButtonType) => {

    return <Link key={book.id} href={`/bible-content/${book.id}/chapter/1`} className={`py-1 px-3 ${selectedChapter?.bible_name_id === book.id ? 'bg-red-400' : 'bg-slate-100'} rounded-lg hover:bg-red-200 shadow-lg hover:text-white`}>
        {book.name}
    </Link>
}


export default async function BibleName({ selectedChapter }: Readonly<BibleNameType>) {

   
    const  books:Book[]= await(await(fetch(`${baseUrl}/bible/books`))).json();;

    return <div className="grid grid-cols-2 gap-1 px-4">
        {testaments.map(testament=>{

        return <Fragment key={testament.id}><TestamentText text={testament.name}/>
        {books?.filter(b => b.testament_id === testament.id).map(book =>
            <BookButton
                key={book.id}
                book={book}
                selectedChapter={selectedChapter}
            />
        )}
        </Fragment>})}
      
    </div>
}