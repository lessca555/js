document.addEventListener('DOMContentLoaded', async () => {
    try{
        const res = await axios.get("https://api.tvmaze.com/shows/1");
        console.log(res.data);
        displayMovies(res.data)
    }catch{(err) => {
        console.log(err);
    }}
})

const displayMovies = (shows) => {
    for(let result of shows){
        if(result.shows.image){
            $("#movie-img").attr("src", result.shows.image.medium)
        }
    }
}