
import BibleName from "@/components/BibleName";
import ChapterComponent from "@/components/Chapter";
import { baseUrl } from "@/data/constants";
import { BookContent, Chapter } from "@/types/types";
import Link from "next/link";
import BookChapter from "./BookChapter";


export default async function BibleContent({ params }: Readonly<{ params: { bible: string, chapter:number } }>) {

  const chapters: Chapter[] = await(await(fetch(`${baseUrl}/bible/${params.bible}/chapters`))).json();
  const book_contents: BookContent[]  = await(await(fetch(`${baseUrl}/bible/book/${params.bible}/chapter/${params.chapter}/content`))).json();
  const selectedChapter: Chapter | undefined  = chapters?.find((chap)=>chap.chapter === "" + params.chapter);

  return (
    <main className="flex min-h-screen flex-col items-center pt-2 px-4">

      <div className="grid grid-cols-12 gap-1 pb-5">
        <div className="max-sm:hidden  md:col-span-3">
          <BibleName selectedChapter={selectedChapter}  />
        </div>
        <div className="col-span-12 md:col-span-8">

          <div className="grid grid-cols-10 gap-1 pb-4">
            <Link href={'/'} className="py-1 text-center shadow-md text-lg font-bold bg-slate-100 rounded-lg hover:bg-red-200 hover:text-white">
              Back
            </Link>
            <ChapterComponent chapters={chapters} selectedChapter={selectedChapter} />
          </div>

          <BookChapter name={selectedChapter?.book.name} chapter={selectedChapter?.chapter} />
          {book_contents.map((content) =>
            <div className="pb-1 text-2xl" key={`index-'${content.id}`}>
              <span>{content.verse}. {' '}</span>
              <span className={`text-2xl`}>{content.text}</span>
            </div>)
          }
          <div className="flex  md:space-x-96 pt-3 text-2xl">
            {selectedChapter?.chapter !== "1" ? <Link href={`/bible-content/${params.bible}/chapter/${Number(selectedChapter?.chapter ?? 0) - 1}`} className="rounded-lg mr-3 hover:bg-sky-300 py-1 px-5  bg-sky-300  text-white">
              Shemppuwaa {Number(selectedChapter?.chapter ?? 0) - 1}
            </Link> : <span className="py-1 px-10 mr-3"></span>}
            {chapters.length !== Number(selectedChapter?.chapter ?? 0) && <Link href={`/bible-content/${params.bible}/chapter/${Number(selectedChapter?.chapter || 0) + 1}`}  className='rounded-lg  hover:bg-sky-300 py-1 px-5 bg-sky-300  text-white'>
              Shemppuwaa {Number(selectedChapter?.chapter ?? 0) + 1}
            </Link>}
          </div>
        </div>
        
      </div>
    </main>
  );
}