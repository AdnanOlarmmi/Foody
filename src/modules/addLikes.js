import {likeApiEndPoint} from './config.js'

const addLikes = async (id) => {
   const like = {
    item_id: id,
    likes: 1,
    }
    try {
    const res = await fetch(likeApiEndPoint,  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(like),
    });
    if (!res.ok) {
      console.log('successful')
      console.log(res.ok);
    }
  } catch (err) {
    console.log('not successful')
  }

}

export default addLikes;