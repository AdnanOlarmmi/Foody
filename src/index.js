import './styles.css';
import renderLikes from './modules/renderLikes.js';
import itemsCounter from './modules/itemsCounter.js';
import addLikes from './modules/addLikes.js';
import renderFoodItems from './modules/renderFoodItems.js';

import {formStatusMsg, modelWindow} from './modules/commentModel.js'
import commentCounter from './modules/countComment.js'
import { listComments, commentsContainer } from './modules/displayComments.js'
import {getComments} from './modules/api.js'

window.onload = async () => {
  listComments(await getComments());
  commentCounter(await getComments())
}

const foodContainerEl = document.querySelector('main');
const hamburgerEl = document.querySelector('.hamburger');
const navEl = document.querySelector('nav');
const barsEl = document.getElementsByClassName('bar');
const itemsNumberEl = document.querySelector('.item_number');

itemsNumberEl.innerHTML = itemsCounter();

const toggleNav = () => {
  hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('open');
    [...barsEl].forEach((item) => {
      item.classList.toggle('change');
    });
    foodContainerEl.classList.toggle('shift');
  });
};

foodContainerEl.addEventListener('click', async (e) => {
  if (e.target.className === 'icon__like') {
    await addLikes(e.target.parentNode.id);
    renderLikes();
  }
});

renderLikes();
renderFoodItems();
toggleNav();

  
  
  
  
  











// const ShowTriggerBtn = document.querySelector('.popbtn__trigger');
// const closeBtn = document.querySelector('.x__btn');
// const model = document.querySelector('.model');

// const modelWindow = () => {
//   ShowTriggerBtn.addEventListener('click', () => {
//     model.classList.add('show');
//   });

//   closeBtn.addEventListener('click', () => {
//     model.classList.remove('show');
//   });

//   window.addEventListener('click', (e) => {
//     if(e.target === model) {
//       model.classList.remove('show');
//     }
//   });
// }
// modelWindow()