"use client"
import { bibles } from "@/data/bible_names";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleOpenBibleName(bible: string): void {

    router.push(`bible-content/${bible}`);
  }

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className=" text-4xl text-red-400 rounded-lg underline pb-3">Old Testaments</div>
          <div className="grid grid-cols-4 gap-4">

            {bibles.old_testaments.map(bible =>
              <div key={bible} onClick={() => handleOpenBibleName(bible)} className="py-2 px-3 bg-slate-50 rounded-lg hover:bg-red-200 hover:text-white">{bible}</div>
            )}

          </div>
        </div>
        <div>
          <div className=" text-4xl text-red-400 rounded-lg underline pb-3">New Testaments</div>
          <div className="grid grid-cols-4 gap-4">

            {bibles.new_testaments.map(bible =>
              <div key={bible} onClick={() => handleOpenBibleName(bible)} className="py-2 px-3 bg-slate-50 rounded-lg hover:bg-red-200 hover:text-white">{bible}</div>
            )}

          </div>
        </div>
      </div>

    </main>
  );
}