import '../../routes/routes'
const listClass = (data) => `<div class="class-items"><h3 class="bold">${data.nama}</h3>
<div class="teacher">
    <div class="teacher-profile">
        <img src="" alt="">
        <div class="teacher-data">
            <span class="bold">${data.pemateri.nama}</span>
        </div>
    </div>
    <div class="rating">
    <span class="star-rating" style="font-size:200%;color:#1C3879;">&starf;</span>
    <span class="number-rating bold">${data.rating}</span>
    </div>
</div>
<button ><a href="#/kelas_1">Learn</a></button></div>`

export {listClass }