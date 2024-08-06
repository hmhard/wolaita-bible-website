export  const fetcher = async(url:string) => {

   var response = await fetch(`https://api.samueltoma.com${url}`);
   return response.json();
}