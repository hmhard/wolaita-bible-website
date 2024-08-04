import { FontParams } from "@/app/bible-content/[bible]/page";

export default function Settings({setFontParams,handleSelectRandomChapter}:{setFontParams:any,handleSelectRandomChapter:any}){
    return <>
     <button onClick={() => setFontParams((fontParam:FontParams) => ({ ...fontParam, fontSize: fontParam.fontSize - 1 }))} className='rounded-lg  hover:bg-sky-300 mb-1 px-10 bg-sky-300  text-white'>
            -
          </button>
          <button onClick={() => setFontParams((fontParam:FontParams) => ({ ...fontParam, fontSize: fontParam.fontSize + 1 }))} className='rounded-lg  hover:bg-sky-300 mb-1 px-10 bg-sky-300  text-white'>
            +
          </button>

          <button onClick={() => handleSelectRandomChapter()} className='rounded-lg  hover:bg-sky-300 mb-1 px-4 bg-sky-300  text-white'>
            Random
          </button>
    </>;
}