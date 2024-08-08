export const fetcher = async (url:string) => {

   let response = await fetch(`https://api.samueltoma.com${url}`);
   const data = await response.json();
   return data;
}