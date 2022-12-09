import '../../routes/routes';
const listClass = (data) => `<div class="class-items"><h3 class="bold">${data.attributes.name}</h3>
<div class="teacher">
    <div class="teacher-profile">
        <img src="" alt="">
        <div class="teacher-data">
            <span class="bold">${data.attributes.teacher_name}</span>
        </div>
    </div>
    <div class="rating">
    <span class="star-rating" style="font-size:200%;color:#1C3879;">&starf;</span>
    <span class="number-rating bold">${data.attributes.rate}</span>
    </div>
</div>
<button ><a href="/#/detail/${data.id}">Learn</a></button></div>`;

const detailClass = (data) => `<div id="hero" class="hero overlay subpage-hero portfolio-hero">
<div class="hero-content">
  <div class="hero-text">
    <h1>${data.attributes.name}</h1>
  </div>
</div>
</div>
<div  class="button-class">
<a href="#/kelas_${data.id}"><button  class="cssbuttons-io-button"> Get started
    <div class="icon">

        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
    </div>
    </button></a>
</div>

<div class="card">
<h1>Deskripsi Kelas</h1>
<p>
    ${data.attributes.description}
</p>
</div>
<div class="card instruktur">
<h1>Instruktur</h1>
<div class="profile-instruktur">
    <img src="class/teacher_${data.id}.png" alt="">
    <div class="detail-instruktur">
        <h2>${data.attributes.teacher_name}</h2>
        <p>${data.attributes.teacher_desc}</p>
    </div>
</div>
</div>
`;
export { listClass, detailClass };
