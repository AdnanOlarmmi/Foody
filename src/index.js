import './styles.css';
import renderLikes from './modules/renderLikes.js';
import itemsCounter from './modules/itemsCounter.js';
import addLikes from './modules/addLikes.js';
import renderFoodItems from './modules/renderFoodItems.js';

import displayPop from './modules/commentModel.js';

import postComment from './modules/postComment.js';

const bodyEl = document.querySelector('body');
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
  } else if (e.target.className === 'pop-window') {
    const { id } = e.target.parentNode.childNodes[1].childNodes[3];
    displayPop(id);

    setTimeout(() => {
      pop.classList.add('slide');
    }, 100);

    model.style.display = 'block';

    pop.addEventListener('click', (e) => {
      if (e.target.className === 'chat') {
        e.preventDefault();
        let username = document.querySelector('input').value;
        let comment = document.querySelector('textarea').value;
        const successMsg = document.querySelector('.success');
        const dangerMsg = document.querySelector('.danger');

        if (username === '' || comment === '') {
          dangerMsg.style.display = 'block';
          setTimeout(() => {
            dangerMsg.style.display = 'none';
          }, 1500);
          return;
        }

        const { id } = e.target.parentNode.parentNode;
        const commentObj = {
          item_id: id,
          comment,
          username,
        };
        postComment(commentObj);

        document.querySelector('input').value = '';
        document.querySelector('textarea').value = '';

        successMsg.style.display = 'block';

        setTimeout(() => {
          dangerMsg.style.display = 'none';
          successMsg.style.display = 'none';
          username = '';
          comment = '';
        }, 1000);
      }
    });

    bodyEl.addEventListener('click', (e) => {
      if (e.target.className === 'x__btn' || e.target.className === 'model') {
        pop.classList.remove('slide');
        setTimeout(() => {
          model.style.display = 'none';
        }, 400);
      }
    });
  }
});

renderFoodItems();
toggleNav();
