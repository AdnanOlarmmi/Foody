import {likeApiEndPoint} from './config.js'
import renderLikes from './renderLikes.js';

//post request
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

// try {
//     const res = await fetch(likeApiEndPoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(scoreOBJ),
//     });
//     const data = await res.json();
//     if (!res.ok) {
//       addMsgEl.innerHTML = 'Not Successful';
//     }
//     addMsgEl.innerHTML = data.result;
//     formEl.reset();
//   } catch (err) {
//     addMsgEl.innerHTML = 'Not Successful';
//   }

export default addLikes;