import { commentBaseApi } from './config.js';
import getComments from './getComments.js';

const postComment = async (commentObj) => {
  try {
    const res = await fetch(commentBaseApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentObj),
    });
    if (!res.ok) {
    }
    getComments(commentObj.item_id);
  } catch (err) {
  }
};

export default postComment;