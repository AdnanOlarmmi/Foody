import { likeApiEndPoint } from './config.js';

const addLikes = async (id) => {
  const like = {
    item_id: id,
    likes: 1,
  };
  await fetch(likeApiEndPoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(like),
  });
};

export default addLikes;