export default function TestamentText({text}: {text: string}){
    return <>
    <div className="py-1 col-span-2 text-red-400 text-lg px-3 bg-slate-100 rounded-lg hover:bg-red-200 hover:text-white">
            {text}
        </div>
    </>
}