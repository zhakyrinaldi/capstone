// import 'regenerator-runtime';
// import './scripts/component/nav-bar.js';
// import './scripts/component/about-us.js';
// import './styles/style.css';

// const API_URL = "https://satupersen.herokuapp.com/kelas";

// const movieListElement = document.getElementById("class-list");


// const getClass = (url) => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       showMovie(data);
//     });
// };
// getClass(API_URL);
// const showMovie = (data) => {
//   movieListElement.innerHTML = "";
//   data.forEach((kelas) => {
//     const { nama, rating, pemateri } = kelas;
//     const movieElement = document.createElement("div");
//     movieElement.setAttribute("class", "class-items");
//     movieElement.innerHTML = `
//     <h3 class="bold">${nama}</h3>
//                     <div class="teacher">
//                         <div class="teacher-profile">
//                             <img src="" alt="">
//                             <div class="teacher-data">
//                                 <span class="bold">${pemateri.nama}</span>
//                             </div>
//                         </div>
//                         <div class="rating">
//                         <span class="star-rating" style="font-size:200%;color:#1C3879;">&starf;</span>
//                         <span class="number-rating bold">${rating}</span>
//                         </div>
//                     </div>
//                     <button>Learn</button>`;
//     movieListElement.appendChild(movieElement);
//   });
// };

 
// document.addEventListener('DOMContentLoaded', main);