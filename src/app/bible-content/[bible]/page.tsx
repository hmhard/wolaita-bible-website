"use client"

import BibleName from "@/components/BibleName";
import ChapterComponent from "@/components/Chapter";
import Settings from "@/components/Settings";
import { BookContent, Chapter } from "@/types/types";
import { fetcher } from "@/utils/fetcher";
import { getRandomParagraphs } from "@/utils/random_string_generator";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";

const paragraphCount = 5;
const sentenceCount = 5;
const wordsPerSentence = 10;
export interface FontParams {
  fontSize: number;

}
export default function BibleContent({ params }: Readonly<{ params: { bible: string } }>) {

  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<Chapter>();
  const [bibleName] = useState(params.bible);
  const [fontParams, setFontParams] = useState<FontParams>({ fontSize: 1 });
  const router = useRouter();

  const {data:chapters = [], isLoading} = useSWR<Chapter[]>(`/bible/${bibleName}/chapters`, fetcher);
  const {data:book_contents = [], isLoading:bookLoading} = useSWR<BookContent[]>(`/bible/book/${bibleName}/chapter/${selectedChapter?.chapter}/content`, fetcher);

  console.log(selectedChapter);


  useEffect(() => {

    if (chapters)
    setSelectedChapter(chapters?.[0]);

  }, [chapters]);

  const handleNextChapter = () => {
    let tempChap = chapters.find(ch => ch.chapter === "" + (Number(selectedChapter?.chapter) + 1));
    setSelectedChapter(tempChap);
  }
  const handlePreviousChapter = () => {
    let tempChap = chapters.find(ch => ch.chapter === "" + (Number(selectedChapter?.chapter) - 1));

    setSelectedChapter(tempChap);
  }


  const handleOpenChapter = (chapter: Chapter): void => {
    setSelectedChapter(chapter);
  }

  const handleOpenBibleName = (bible: any): void => {

    router.push(`/bible-content/${bible}`);

  }

  const handleSelectRandomChapter = (): void => {
    if (chapters && chapters.length > 0) {
    let rand = Math.floor(Math.random() * Math.floor(chapters.length || 0));
    // handleOpenChapter(chapters.find(s=>s.chapter === ""+rand))
    console.log(rand);
  }}

  if (isLoading || bookLoading) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center pt-2 px-4">

      <div className="grid grid-cols-12 gap-1 pb-5">
        <div className="max-sm:hidden  md:col-span-3">
          <BibleName selectedChapter={selectedChapter} handleOpenBibleName={handleOpenBibleName} />
        </div>
        <div className="col-span-12 md:col-span-8">

          <div className="grid grid-cols-10 gap-1 pb-4">
            <button onClick={() => router.push('/')} className="p-1  text-sm shadow-md bg-slate-200 text-center rounded-lg hover:bg-red-200 hover:text-white">
              Back
            </button>
            <ChapterComponent chapters={chapters} selectedChapter={selectedChapter} handleOpenChapter={handleOpenChapter} />
          </div>

          <div className="text-2xl pb-2 text-center md:text-start">{selectedChapter?.book.name} {' '} {selectedChapter?.chapter}</div>
          {book_contents.map((content) =>
            <div className="pb-1" key={`index-'${content.id}`}>
              <span>{content.verse}. {' '}</span>
              <span className={`text-${fontParams.fontSize}xl`}>{content.text}</span>
            </div>)
          }
          <div className="flex  md:space-x-96 pt-3">
            {selectedChapter?.chapter !== "1" ? <button onClick={handlePreviousChapter} className="rounded-lg mr-3 hover:bg-sky-300 py-1 px-5  bg-sky-300  text-white">
              Shemppuwaa {Number(selectedChapter?.chapter || 0) - 1}
            </button> : <span className="py-1 px-10 mr-3"></span>}
            {chapters.length !== Number(selectedChapter?.chapter || 0) && <button onClick={handleNextChapter} className='rounded-lg  hover:bg-sky-300 py-1 px-5 bg-sky-300  text-white'>
              Shemppuwaa {Number(selectedChapter?.chapter || 0) + 1}
            </button>}
          </div>
        </div>
        <div className="max-sm:hidden  md:col-span-1">
          <Settings
            setFontParams={setFontParams}
            handleSelectRandomChapter={handleNextChapter}
          />
        </div>
      </div>
    </main>
  );
}