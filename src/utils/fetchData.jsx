export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key':'e1edf5c8c3mshab03ef7a91d28f8p1ad79ajsnd8f1a797d3d2',
    // 'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
    
  },
};
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY ,
    //  '609b0c3158mshb89694e19205438p1f24b9jsne1240ded5919' 
    },
  };
export const fetchData =async (url,options) => {
 const reponse=await fetch(url,options);
 const data=await reponse.json();
 return data;
}
