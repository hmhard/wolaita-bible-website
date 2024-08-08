import { baseUrl, testaments } from '@/data/constants';
import { Book } from '../types/types';
import Link from "next/link";
type BookNameType = {
  testament: string,
  books: Book[] | undefined,
}
const BookName = ({ books, testament, }: BookNameType) => {
  const START_CHAPTER = 1;
  return <div className="col-span-12 md:col-auto">
    <div className="text-4xl  md:text-4xl text-red-400 rounded-lg underline text-center pb-3">{testament}</div>
    <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-2 rounded-lg shadow-lg px-1 pb-6 pt-2">

      {books?.map(book =>
        <Link key={book.id} href={`/bible-content/${book.id}/chapter/${START_CHAPTER}`} className="py-1 px-1 bg-slate-50 rounded-lg shadow-md text-center hover:bg-red-200  overflow-hidden text-2xl hover:text-white">{book.name}</Link>
      )}

    </div>
  </div>
}

export default async function Home() {

  let response = await fetch(`${baseUrl}/bible/books`);
  const books: Book[] = await response.json();


  return (
    <main className="flex min-h-screen flex-col justify-between pt-10 pb-20 px-6">
      <div className="grid grid-cols-2 gap-2">

        {testaments.map(testament =>
          <BookName
            key={testament.id}
            testament={testament.name}
            books={books?.filter(b => b.testament_id === testament.id)}
          />
        )}

      </div>

    </main>
  );
}