export default function BookChapter({ name, chapter }: Readonly<{ name: string | undefined, chapter: string | undefined }>) {

  return <div className="text-3xl pb-2 text-center md:text-start">
    {name} {' '} {chapter}
  </div>

}