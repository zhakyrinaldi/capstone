import UrlParser from '../routes/url-parser';
import ClassSource from '../../data/class_source';
// import { createRestaurantDetail } from './templates/template-creator';
// import LikeButtonInitiator from '../utils/like-button-initiator';
import { detailClass } from './templates/template_creator';

const Detail = {
  async render() {
    return `
    <div id="detail_kelas" class="detail_kelas"></div>
    
    

      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const Class = await ClassSource.detailClass(url.id);
    const classContainer = document.querySelector('#detail_kelas');
    // const likeButtonContainer = document.querySelector('#likeButtonContainer');
    classContainer.innerHTML = detailClass(Class.data);
    // likeButtonContainer.innerHTML = createLikeButtonTemplate();
    console.log(Class.data);
    // const form = document.getElementById('form');
    // form.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   const names = document.querySelector('#input-name').value;
    //   const comment = document.querySelector('#input-comment');
    //   const inputreview = { id: url.id, name: names, review: comment };
    //   Restaurant_Source.postComment(inputreview);
    // });
    // LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   resto: {
    //     id: resto.restaurant.id,
    //     name: resto.restaurant.name,
    //     pictureId: resto.restaurant.pictureId,
    //     city: resto.restaurant.city,
    //     rating: resto.restaurant.rating,
    //     // description: restaurants.description,
    //     // menus: restaurants.menus,
    //     // customerReviews: restaurants.customerReviews,
    //   },
    // });
  },
};

export default Detail;
