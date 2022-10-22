import { commentBaseApi } from './config.js';
import commentCounter from './countComment.js';

const getComments = async (id) => {
  const commentEl = document.querySelector('.comments__item');
  let markup = '';
  try {
    const res = await fetch(`${commentBaseApi}?item_id=${id}`);
    const data = await res.json();
    data.forEach((comment) => {
      markup += `
            <li class="listed__comment">
            <span class="date">${comment.creation_date} > </span>
            <span class="name"> >  ${comment.username}:</span>
            <span class="comment">${comment.comment}</span>
            </li>
             `;
    });
    commentEl.innerHTML = markup;
    commentCounter();
    return 'done';
  } catch (err) {
    return err;
  }
};

export default getComments;