import 'regenerator-runtime';
import './scripts/component/nav-bar.js';
import './scripts/component/about-us.js';
import './styles/style.css'

const API_URL = "https://satupersen.herokuapp.com/kelas";
// https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=c2e4bdedcd87c9c627403e4eb8fb843e

const movieListElement = document.getElementById("class-list");


const getClass = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showMovie(data);
    });
};
getClass(API_URL);
const showMovie = (data) => {
  movieListElement.innerHTML = "";
  data.forEach((kelas) => {
    const { nama, rating } = kelas;
    const movieElement = document.createElement("div");
    movieElement.setAttribute("class", "class-items");
    movieElement.innerHTML = `
    <h3 class="bold">${nama}</h3>
                    <div class="teacher">
                        <div class="teacher-profile">
                            <img src="" alt="">
                            <div class="teacher-data">
                                <span class="bold">${}</span>
                                <span>sasasasaa</span>
                            </div>
                        </div>
                        <div class="rating">
                            <span class="star-rating">*****</span>
                            <span class="number-rating bold">${rating}</span>
                        </div>
                    </div>
                    <button>Learn</button>`;
    movieListElement.appendChild(movieElement);
  });
};

 
document.addEventListener('DOMContentLoaded', main);