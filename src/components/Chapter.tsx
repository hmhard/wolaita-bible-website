
import { Chapter } from "@/types/types";
import Link from "next/link";
type ChapterType = {
  chapters: Chapter[],
  selectedChapter: Chapter | undefined,
}

export default function ChapterComponent({ chapters, selectedChapter }: Readonly<ChapterType>) {


  return <>{chapters.map(chapter =>

    <Link key={chapter.id} href={`/bible-content/${chapter.book.id}/chapter/${chapter.chapter_id}`} className={` text-center shadow-md text-lg font-bold ${selectedChapter?.chapter_id === chapter.chapter_id ? 'bg-red-400' : 'bg-slate-100'} rounded-lg hover:bg-red-200 hover:text-white`}>
      {chapter.chapter_id}

    </Link>
  )}
  </>
}