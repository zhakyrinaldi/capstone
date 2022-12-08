import 'regenerator-runtime';
import './scripts/component/nav-bar.js';
import './scripts/component/about-us.js';
import './styles/style.css';
import './styles/style_kelas.css';
import App from './scripts/views/app'
import '../DATA.json'
const API_URL = "https://api-satupersen.netlify.app/kelas.json";
// https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=c2e4bdedcd87c9c627403e4eb8fb843e
//https://api-satupersen.netlify.app/kelas.json

// const movieListElement = document.getElementById("class-list");

// // const fetchData = await fetch ("../DATA.json");
// // const response = await fetchData.json();
// // console.log(response)
// async function getClass (url) {
// //   const xhttp = new XMLHttpRequest();
// //   xhttp.onreadystatechange = function() {
// //       if (this.readyState == 4 && this.status == 200) {
// //          // Typical action to be performed when the document is ready:
// //          var data=JSON.parse(xhttp.responseText);
// //          console.log(data.kelas);
// //       }
// //   };
// //   xhttp.open("GET", url, true);
// //   xhttp.send();
//   // const fetchData = await fetch (url);
//   // const response = await fetchData.json();
//   // console.log(response)
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
//     const movieElement = document.createElement("div");
//     movieElement.setAttribute("class", "class-items");
//     movieElement.innerHTML = `
//     <h3 class="bold">${kelas.nama}</h3>
//                     <div class="teacher">
//                         <div class="teacher-profile">
//                             <img src="" alt="">
//                             <div class="teacher-data">
//                                 <span class="bold">${kelas.pemateri.nama}</span>
//                             </div>
//                         </div>
//                         <div class="rating">
//                         <span class="star-rating" style="font-size:200%;color:#1C3879;">&starf;</span>
//                         <span class="number-rating bold">${kelas.rating}</span>
//                         </div>
//                     </div>
//                     <button>Learn</button>`;
//     movieListElement.appendChild(movieElement);
//   });
// };
const app = new App({

  content: document.querySelector('#maincontent')
});
 
window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
});
 
// document.addEventListener('DOMContentLoaded', main);