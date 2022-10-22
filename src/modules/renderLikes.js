import { likeApiEndPoint } from './config.js';

const likeCountEl = document.getElementsByClassName('like__count');

const renderLikes = async () => {
  try {
    const res = await fetch(likeApiEndPoint);
    const data = await res.json();
    const likeCount = [...likeCountEl];
    data.forEach(async (item) => {
      likeCount.forEach((itemid) => {
        if (item.item_id === itemid.parentNode.id) {
          itemid.innerHTML = item.likes;
        }
      });
    });
  } catch (err) {
    likeCountEl.item = err;
  }
};

export default renderLikes;