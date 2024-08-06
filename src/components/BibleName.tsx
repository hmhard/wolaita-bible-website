import { bibles } from "@/data/bible_names";
import TestamentText from "./TestamentText";
import useSWR from "swr";
import { Book, Chapter } from "@/types/types";
import { fetcher } from "@/utils/fetcher";
type BibleNameType = {
    selectedChapter: Chapter | undefined,
    handleOpenBibleName: any
}

type BookButtonType = {
    handleOpenBibleName: any,
    book: Book,
    selectedChapter: Chapter | undefined,

}

const BookButton = ({ book, selectedChapter, handleOpenBibleName }: BookButtonType) => {

    return <button key={book.id} onClick={() => handleOpenBibleName(book.id)} className={`py-1 px-3 ${selectedChapter?.bible_name_id === book.id ? 'bg-red-400' : 'bg-slate-100'} rounded-lg hover:bg-red-200 shadow-lg hover:text-white`}>
        {book.name}
    </button>
}


export default function BibleName({ selectedChapter, handleOpenBibleName }: BibleNameType) {

    const { data: books, isLoading } = useSWR<Book[]>('/bible/books', fetcher);

    return <div className="grid grid-cols-2 gap-1 px-4">
        <TestamentText text="Old Testament" />
        {books?.filter(b => b.testament_id === 1).map(bible =>
            <BookButton
                key={bible.id}
                book={bible}
                selectedChapter={selectedChapter}
                handleOpenBibleName={handleOpenBibleName}
            />
        )}
        <TestamentText text="New Testament" />
        {books?.filter(b => b.testament_id === 2).map(bible =>
            <BookButton
                key={bible.id}
                book={bible}
                selectedChapter={selectedChapter}
                handleOpenBibleName={handleOpenBibleName}
            />
        )}
    </div>
}