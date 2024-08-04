"use client"

import { bibles } from "@/data/bible_names";
import { getRandomParagraphs } from "@/utils/random_string_generator";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const paragraphCount = 3;
const sentenceCount = 5;
const wordsPerSentence = 10;
interface FontParams  {
  fontSize: number;

}
export default function BibleContent({ params }: Readonly<{ params: { bible: string } }>) {


  //generate random length of  array of numbers starting from 1
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [bibleName] = useState(params.bible);
  const [fontParams, setFontParams] = useState<FontParams>({fontSize:1});
  const router = useRouter();

  const chapters = useMemo(()=>Array.from({ length: Math.floor(Math.random() * 100) }, (_, i) => i + 1)
,[bibleName]);


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

  function handleOpenBibleName(bible: any): void {

    router.push(`/bible-content/${bible}`);

  }

  return (
    <main className="flex min-h-screen flex-col items-center pt-10 px-5">
      <button className=" rounded-lg hover:bg-sky-300">
        Back
      </button>
      <div className="grid grid-cols-12 gap-2 pb-5">
        <div className=" col-span-3">
          <div className="grid grid-cols-2 gap-2 px-4">
            {bibles.old_testaments.map(bible =>
              <div key={bible} onClick={() => handleOpenBibleName(bible)}>
                {bibleName === bible ?

                  <div className="py-2 px-3 bg-red-400 rounded-lg hover:bg-red-200 hover:text-white">
                    {bible}
                  </div>
                  : <div className="py-2 px-3 bg-slate-50 rounded-lg hover:bg-red-200 hover:text-white">
                    {bible}
                  </div>}
              </div>
            )}
          </div>

        </div>
        <div className=" col-span-7">

         
          <div className="grid grid-cols-10 gap-1 pb-4">

            {chapters.map(chapter =>
              <div key={chapter} onClick={() => handleOpenChapter(chapter)}>
                {selectedChapter === chapter ?
                  <div className="p-1   text-sm bg-red-400 text-center rounded-lg hover:bg-red-200 hover:text-white">
                    {chapter}
                  </div> :
                  <div className="p-1 text-center   text-sm bg-slate-200 rounded-lg hover:bg-red-200 hover:text-white">
                    {chapter}
                  </div>

                }

              </div>
            )}

          </div>
          <div className="text-2xl pb-2">{bibleName} {' '} {selectedChapter}</div>
          {paragraphs.map((p: string, index: number) =>
            <div className="pb-1" key={`index-'${index + 1}`}>
              <span>{index + 1}. {' '}</span>
              <span className={`text-${fontParams.fontSize}xl`}>{p}</span>
            </div>)
          }
          <div className="flex space-x-96 pt-3">
            {selectedChapter !== 1 ? <button onClick={handlePreviousChapter} className="rounded-lg hover:bg-sky-300 py-1 px-10 bg-sky-300  text-white">
              Prev
            </button>: <span className="py-1 px-10"></span>}
            {chapters.length !== selectedChapter && <button onClick={handleNextChapter} className='rounded-lg  hover:bg-sky-300 py-1 px-10 bg-sky-300  text-white'>
              Next
            </button>}
          </div>
        </div>
      </div>
    </main>
  );
}