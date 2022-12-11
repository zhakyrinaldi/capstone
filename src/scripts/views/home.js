import { listClass } from './templates/template_creator';
import ClassSource from '../../data/class_source';

const home = {
  async render() {
    return `
      <div id="maincontent">
    <section id="home">    
        <div class="deskripsi">
            <h2 class="desk">LifeLong <br>      <span>Learning</span></h2>
            <p>Berkomitmen untuk memberikan pendidikan yang luar biasa kepada peserta didik dari berbagai latar belakang untuk masa depan yang lebih baik.</p>
            <div id="learn-more"><button href="#content" class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
            </button>
        </div>
            
        </div>
        <img src="image/home.gif" alt="">
    </section>

    <div id="content">
        <article id="class-group" class="class-group">
            <h2 class="bold">Kelas Kelas</h2>
            <section class="class-list" id="class-list">
                
            </section>
        </article>
    </div>
    <about-us></about-us>
    </div>
      `;
  },

  async afterRender() {
    const data = await ClassSource.home();
    const dataContainer = document.querySelector('#class-list');
    data.forEach((i) => {
      dataContainer.innerHTML += listClass(i);
    });
    console.log(data);
  },
};

export default home;
