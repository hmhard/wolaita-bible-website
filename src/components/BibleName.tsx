import { bibles } from "@/data/bible_names";
import TestamentText from "./TestamentText";

export default function BibleName({ selectedBible, handleOpenBibleName }: { selectedBible: string, handleOpenBibleName: any }) {

    return <div className="grid grid-cols-2 gap-1 px-4">
        <TestamentText text="Old Testament"/>
        {bibles.old_testaments.map(bible =>
            <div key={bible} onClick={() => handleOpenBibleName(bible)} className={`py-1 px-3 ${selectedBible === bible ? 'bg-red-400' : 'bg-slate-100'} rounded-lg hover:bg-red-200 hover:text-white`}>
                {bible}
            </div>
        )}
        <TestamentText text="New Testament"/>
        {bibles.new_testaments.map(bible =>

            <div key={bible} onClick={() => handleOpenBibleName(bible)} className={`py-1 px-3 ${selectedBible === bible ? 'bg-red-400' : 'bg-slate-100'} rounded-lg hover:bg-red-200 hover:text-white`}>
                {bible}
            </div>
        )}
    </div>
}