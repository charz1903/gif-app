export const getGifs = async( categories ) => {


    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ly3t0Dksc6PNakGsXtUaTOq0EASJnEid&q=${ categories }&limit=6` 
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
         id: img.id,
         title: img.title,
         url: img.images.downsized_medium.url

    }));

    return gifs;
 }