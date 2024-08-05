"use client"

import BibleName from "@/components/BibleName";
import Chapter from "@/components/Chapter";
import Settings from "@/components/Settings";
import { getRandomParagraphs } from "@/utils/random_string_generator";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const paragraphCount = 5;
const sentenceCount = 5;
const wordsPerSentence = 10;
export interface FontParams {
  fontSize: number;

}
export default function BibleContent({ params }: Readonly<{ params: { bible: string } }>) {

  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [bibleName] = useState(params.bible);
  const [fontParams, setFontParams] = useState<FontParams>({ fontSize: 1 });
  const router = useRouter();

  const chapters = useMemo(() => Array.from({ length: Math.floor(Math.random() * 100) }, (_, i) => i + 1)
    , [bibleName]);


  useEffect(() => {

    const paragraphs = getRandomParagraphs(paragraphCount, sentenceCount, wordsPerSentence);
    setParagraphs(paragraphs);

  }, [selectedChapter]);

  const handleNextChapter = () => {
    setSelectedChapter(chapter => chapter + 1);
  }
  const handlePreviousChapter = () => {
    setSelectedChapter(chapter => chapter - 1);
  }


  const handleOpenChapter = (chapter: number): void => {
    setSelectedChapter(chapter);
  }

  const handleOpenBibleName = (bible: any): void => {

    router.push(`/bible-content/${bible}`);

  }

  const handleSelectRandomChapter = (): void => {
    let rand = Math.floor(Math.random() * Math.floor(chapters.length));
    handleOpenChapter(chapters[rand - 1])
    console.log(rand);
  }


  return (
    <main className="flex min-h-screen flex-col items-center pt-2 px-4">

      <div className="grid grid-cols-12 gap-1 pb-5">
        <div className="max-sm:hidden  md:col-span-3">
          <BibleName selectedBible={bibleName} handleOpenBibleName={handleOpenBibleName} />
        </div>
        <div className="col-span-12 md:col-span-8">

          <div className="grid grid-cols-10 gap-1 pb-4">
            <div onClick={() => router.push('/')} className="p-1  text-sm bg-slate-200 text-center rounded-lg hover:bg-red-200 hover:text-white">
              Back
            </div>
            <Chapter chapters={chapters} selectedChapter={selectedChapter} handleOpenChapter={handleOpenChapter} />
          </div>

          <div className="text-2xl pb-2 text-center md:text-start">{bibleName} {' '} {selectedChapter}</div>
          {paragraphs.map((paragraph: string, index: number) =>
            <div className="pb-1" key={`index-'${index + 1}`}>
              <span>{index + 1}. {' '}</span>
              <span className={`text-${fontParams.fontSize}xl`}>{paragraph}</span>
            </div>)
          }
          <div className="flex  md:space-x-96 pt-3">
            {selectedChapter !== 1 ? <button onClick={handlePreviousChapter} className="rounded-lg mr-3 hover:bg-sky-300 py-1 px-5  bg-sky-300  text-white">
              Shemppuwaa {selectedChapter - 1}
            </button> : <span className="py-1 px-10 mr-3"></span>}
            {chapters.length !== selectedChapter && <button onClick={handleNextChapter} className='rounded-lg  hover:bg-sky-300 py-1 px-5 bg-sky-300  text-white'>
              Shemppuwaa {selectedChapter + 1}
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