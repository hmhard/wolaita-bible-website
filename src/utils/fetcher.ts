export  const fetcher = async(url:string) => {

   var response = await fetch(`http://localhost:4200${url}`);
   return response.json();
}