import { bibles } from "@/data/bible_names";
import { useMemo } from "react";

export default function Chapter({chapters, selectedChapter, handleOpenChapter}: {chapters: number[],selectedChapter:number , handleOpenChapter: any}){



    return  <>{chapters.map(chapter =>

      <div key={chapter} onClick={() => handleOpenChapter(chapter)} className={`p-1 text-center text-sm ${selectedChapter === chapter ? 'bg-red-400' : 'bg-slate-100'} rounded-lg hover:bg-red-200 hover:text-white`}>
        {chapter}

      </div>
    )}
    </>
}