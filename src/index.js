import './styles.css';
import renderLikes from './modules/renderLikes.js';
import itemsCounter from './modules/itemsCounter.js';
import addLikes from './modules/addLikes.js';
import renderFoodItems from './modules/renderFoodItems.js';

import displayPop from './modules/commentModel.js';
import commentCounter from './modules/countComment.js';
import { listComments, commentsContainer } from './modules/displayComments.js';
import getComments from './modules/getComments.js';
import get from './modules/getFoodItems.js';
import postComment from './modules/postComment.js';




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
const model = document.querySelector('.model');
const pop = document.querySelector('.pop-windo');

foodContainerEl.addEventListener('click', async (e) => {
  if (e.target.className === 'icon__like') {
    await addLikes(e.target.parentNode.id);
    renderLikes();
  } else if (e.target.className ==='pop-window') {

    const id = e.target.parentNode.childNodes[1].childNodes[3].id;
    displayPop(id);
    
    pop.classList.add('slide');
    model.style.display = 'block';




    pop.addEventListener('click', (e) => {
      if(e.target.className === 'chat') {
        e.preventDefault();
        const username = document.querySelector('input').value;
        const comment = document.querySelector('textarea').value;
        
        const id = e.target.parentNode.parentNode.id;
        const commentObj = {
          item_id: id,
          comment,
          username,
        };

        console.log(commentObj);
        postComment(commentObj);
        

      }
    })

    pop.addEventListener('click', (e) => {
      if(e.target.className === 'x__btn'){
        pop.classList.remove('slide');
        model.style.display = 'none';
      }
    })
  }
});

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