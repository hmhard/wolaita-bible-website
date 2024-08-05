"use client"
import { bibles } from "@/data/bible_names";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleOpenBibleName(bible: string): void {

    router.push(`bible-content/${bible}`);
  }

  return (
    <main className="flex min-h-screen flex-col justify-between pt-10 pb-20 px-6">
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-12 md:col-auto">
          <div className="  text-3xl md:text-2xl text-red-400 rounded-lg text-center underline pb-3">Old Testaments</div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-2 rounded-lg shadow-lg px-2 pb-6 pt-2">

            {bibles.old_testaments.map(bible =>
              <div key={bible} onClick={() => handleOpenBibleName(bible)} className="py-2 px-2 bg-slate-50 rounded-lg hover:bg-red-200 hover:text-white">{bible}</div>
            )}

          </div>
        </div>
        <div className="col-span-12 md:col-auto">
          <div className="text-4xl  md:text-2xl text-red-400 rounded-lg underline text-center  pb-3">New Testaments</div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-2 rounded-lg shadow-lg px-2 pb-6 pt-2">

            {bibles.new_testaments.map(bible =>
              <div key={bible} onClick={() => handleOpenBibleName(bible)} className="py-2 px-2 bg-slate-50 rounded-lg hover:bg-red-200 hover:text-white">{bible}</div>
            )}

          </div>
        </div>
      </div>

    </main>
  );
}