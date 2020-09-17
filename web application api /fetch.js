const popular = document.querySelector('.popular');

 const getPopularMovies = async () => {
    // fetch('https://api.themoviedb.org/3/movie/550?api_key=2399feaf4e6d6344bc608949163ae81c')
    // .then(resp => { 
    //     if (resp.ok) {
    //         return resp.json();
    //     } 
    //     throw new Error('Request failed'); 
    // }, networkError => { 
    //     console.log(networkError.message)
    // }).then(jsonResponse => {
    //     return jsonResponse;
    // })
    let response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=2399feaf4e6d6344bc608949163ae81c')
    let result = await response.json()
    console.log(result)
    
};

popular.addEventListener('click', getPopularMovies);