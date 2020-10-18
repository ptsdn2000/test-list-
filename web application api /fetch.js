const loader = document.querySelector('.loader-wrapper');
loader.style.display = 'none';
const container = document.querySelector('.grid-container');


// take reference 

const popular = document.querySelector('.popular');
const topRated = document.querySelector('.top-rated');
const upComing = document.querySelector('.up-coming');


// popular movies load 
const getPopularMovies = async () => {
    
    let gridContainerDiv = document.querySelector('.grid-container');
    gridContainerDiv.innerHTML = '';
    gridContainerDiv.hidden = true;
    loader.hidden = false;

    let moviesDiv = await getMovies("popular");

    moviesDiv.forEach(movieDiv => {
        gridContainerDiv.appendChild(movieDiv);
    });
    
    
    gridContainerDiv.hidden = false;
    loader.hidden = true; 

};
 

// top rated movies load 
const getTopRatedMovies = async () => {

    let gridContainerDiv = document.querySelector('.grid-container');
    gridContainerDiv.innerHTML = '';
    gridContainerDiv.hidden = true;
    loader.hidden = false;

    let moviesDiv = await getMovies("top_rated");

    moviesDiv.forEach(movieDiv => {
        gridContainerDiv.appendChild(movieDiv);
    });


    gridContainerDiv.hidden = false;
    loader.hidden = true; 
};


// up coming movies load 
const getUpComingMovies = async () => {

    let gridContainerDiv = document.querySelector('.grid-container');
    gridContainerDiv.innerHTML = '';
    gridContainerDiv.hidden = true;
    loader.hidden = false;
    
    let moviesDiv = await getMovies("upcoming");

    moviesDiv.forEach(movieDiv => {
        gridContainerDiv.appendChild(movieDiv);
    });

    gridContainerDiv.hidden = false;
    loader.hidden = true; 

};


// Event listener 
popular.addEventListener('click', getPopularMovies);
topRated.addEventListener('click', getTopRatedMovies);
upComing.addEventListener('click', getUpComingMovies);


// Utils function 
const getMovies = async (typeOfMovies) => {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${typeOfMovies}?api_key=2399feaf4e6d6344bc608949163ae81c&language=en-US&page=1`);
    let resultJSON = await response.json();
    let movies = resultJSON['results'];
    let moviesDiv = [];

    for (let i = 0; i < movies.length; i++) {
        let movieDiv = createDivBasedOnMovie(movies[i]);

        moviesDiv.push(movieDiv);
    }

    return moviesDiv;
};

const createDivBasedOnMovie = (movie) => {
    let movieDiv = document.createElement('div');
    movieDiv.classList.add('movies');

    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    img.src = 'https://image.tmdb.org/t/p/w500' + movie['poster_path'];
    imgDiv.appendChild(img);

    let movieName = document.createElement('div');
    movieName.innerText = movie['original_title'];

    movieDiv.appendChild(imgDiv);
    movieDiv.appendChild(movieName);

    return movieDiv
};

