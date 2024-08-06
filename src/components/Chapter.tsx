import { bibles } from "@/data/bible_names";
import { Chapter } from "@/types/types";
import { useMemo } from "react";
type ChapterType = {
  chapters: Chapter[],
  selectedChapter: Chapter | undefined,
  handleOpenChapter: any
}

export default function ChapterComponent({ chapters, selectedChapter, handleOpenChapter }: ChapterType) {



  return <>{chapters.map(chapter =>

    <button key={chapter.id} onClick={() => handleOpenChapter(chapter)} className={`py-1 text-center shadow-md text-sm ${selectedChapter?.id === chapter.id ? 'bg-red-400' : 'bg-slate-100'} rounded-lg hover:bg-red-200 hover:text-white`}>
      {chapter.chapter}

    </button>
  )}
  </>
}