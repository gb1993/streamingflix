import omdb from "./sources/ombd.js";
const divCard = document.querySelector('.movieCardInfo');
const shadow = document.querySelector('#shadow');
const movieListImg = document.querySelectorAll('.movie-list div img');
const movieName = ['Black Panther', 'Avengers: Endgame', 'Toy Story 4', 'Us', 'Mission: Impossible - Fallout', 'Get Out', 'Spider-Man: Into the Spider-Verse', 'Wonder Woman', 'Logan', 'Booksmart', 'His Girl Friday', 'Star Wars', 'Thor: Ragnarok', 'The Terminator', 'Titanic', 'E.T. – The Extra Terrestrial', 'Star Wars: Return Of The Jedi', 'A Quiet Place', 'Up', "Pan's Labyrinth", 'Guardians Of The Galaxy', 'Blade Runner 2049', 'Taxi Driver', 'matrix', 'matrix revolutions', 'matrix reloaded', 'Whiplash', 'Ghostbusters', 'Gladiator', 'Se7en', 'The Shining', 'The Lord Of The Rings: The Two Towers', 'Interstellar', 'The Lord Of The Rings The Return Of The King', 'Fight Club', 'Terminator 2 Judgment Day', 'Avengers: Endgame', 'The Matrix', 'Inception', 'Parasite', 'The Godfather Part II', 'Back To The Future', 'Mad Max: Fury Road', 'The Dark Knight', 'The Godfather', 'The Lord Of The Rings: The Fellowship Of The Ring', 'The Third Man', 'Rear Window', 'Black widow', 'The Favourite ', 'Marriage Story', 'The Big Sick', 'Gravity', 'Once Upon a Time In Hollywood', 'Argo', 'Soul', "Ma Rainey's Black Bottom", 'La La Land', 'Incredibles 2', 'Spider-Man: Far From Home', 'Call Me by Your Name', 'Spider-Man: Homecoming', 'twilight'];

const toggleVolume = () => {
    const volume = document.querySelector('.btn-volume-container img');
    const video = document.querySelector('video');
    volume.addEventListener('click', () => {
        if (volume.src === 'https://gb1993.github.io/streamingflix/img/icon-volume-off.png') {
            volume.src = './img/icon-volume-on.png';
            video.muted = false;
        } else {
            volume.src = './img/icon-volume-off.png';
            video.muted = true;
        }
    });
}

const carMovieList = async () => {
    movieListImg.forEach( async (element) => {
        element.addEventListener('click', async (event) => {
            const data = await omdb(event.target.alt);
            renderCard(data);
        });
    });
    
}

const renderMovieList = async () => {
    movieListImg.forEach( async (element, index) => {
        const data = await omdb(movieName[index]);
        element.alt = data.Title;
        element.src = data.Poster;
    });
}

const renderCardAbout = async () => {
    const data = await omdb('avengers infinity war');
    renderCard(data);
}

const aboutListener = () => {
    const aboutButton = document.querySelectorAll('.playerButtonsContainer button');
    aboutButton[1].addEventListener('click', renderCardAbout);
}

const renderCard = (data) => {
    const divCardImg = document.querySelector('.movieCardInfo img');
    const divCardH2 = document.querySelector('.movieCardInfo h2');
    const divCardSpan = document.querySelectorAll('.movieCardInfo span');
    const divCardP = document.querySelector('.movieCardInfo p');
    divCardH2.innerText = data.Title;
    divCardP.innerText = data.Plot;
    divCardSpan[0].innerText = `Runtime: ${data.Runtime}`;
    divCardSpan[1].innerText = `Rate: ${data.Ratings[0].Value}`;
    divCardImg.src = data.Poster;
    shadow.style.opacity = 1;
    shadow.style.zIndex = 9;
    divCard.style.opacity = 1;
}

const removeCard = () => {
    const backButton = document.querySelector('.cardBackButton');
    backButton.addEventListener('click', ()=> {
        divCard.style.opacity = 0;
        shadow.style.opacity = 0;
        shadow.style.zIndex = 0;
    })
}

const searchMovie = async () => {
    const searchInputValue = document.querySelector('input').value;
    if (!searchInputValue) alert('Enter the movie name.');
    const data = await omdb(searchInputValue);
    renderCard(data);
}

const searchButtonlistener = () => {
    const search = document.querySelector('form img');
    search.addEventListener('click', searchMovie);
}

const slider = () => {
    tns({
        container: "#slider",
        speed: 700,
        gutter: 10,
        controlsContainer: "#controls",
        nav: false,
        fixedWidth: 200,
        rewind: true,
        slideBy: 1
    });
    tns({
        container: "#slider2",
        speed: 700,
        gutter: 10,
        controlsContainer: "#controls2",
        nav: false,
        fixedWidth: 200,
        rewind: true,
        slideBy: 3
    });
    tns({
        container: "#slider3",
        speed: 700,
        gutter: 10,
        controlsContainer: "#controls3",
        nav: false,
        fixedWidth: 200,
        rewind: true,
        slideBy: 5
    });
    tns({
        container: "#slider4",
        speed: 700,
        gutter: 10,
        controlsContainer: "#controls4",
        nav: false,
        fixedWidth: 200,
        rewind: true,
        slideBy: 5
    });
    tns({
        container: "#slider5",
        speed: 700,
        gutter: 10,
        controlsContainer: "#controls5",
        nav: false,
        fixedWidth: 200,
        rewind: true,
        slideBy: 5
    });
}

carMovieList();
renderMovieList();
searchButtonlistener();
toggleVolume();
slider();
removeCard();
aboutListener();