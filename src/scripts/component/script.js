const API_URL = "https://api-satupersen.netlify.app/kelas.json";
// const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b200bc54c1fd830ca475130bca8bafb0";
// https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=c2e4bdedcd87c9c627403e4eb8fb843e

const classListElement = document.getElementById("class-list");


const getClass = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log
      showClass(data.kelas);
    });
};
getClass(API_URL);
const showClass = (data) => {
  classListElement.innerHTML = "";
  data.forEach((kelas) => {
    const { nama, rating, pemateri  } = kelas;
    const classElement = document.createElement("div");
    classElement.setAttribute("class", "class-items");
    classElement.innerHTML = `
    <h3 class="bold">${nama}</h3>
                    <div class="teacher">
                        <div class="teacher-profile">
                            <img src="" alt="">
                            <div class="teacher-data">
                                <span class="bold">${pemateri.nama}</span>
                            </div>
                        </div>
                        <div class="rating">
                        <span class="star-rating" style="font-size:200%;color:#1C3879;">&starf;</span>
                        <span class="number-rating bold">${rating}</span>
                        </div>
                    </div>
                    <button  >Learn</button>`;
    classListElement.appendChild(classElement);
  });
};

 
document.addEventListener('DOMContentLoaded', main);