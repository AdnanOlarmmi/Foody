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
    if (!res) {
      return res;
    }

    getComments(commentObj.item_id);
    return 'done';
  } catch (err) {
    return err;
  }
};

export default postComment;