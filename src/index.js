import './styles.css';
import {formStatusMsg, modelWindow} from './modules/commentModel.js'
// import commentCounter from './modules/countComment.js'
import { listComments, commentsContainer } from './modules/displayComments.js'
import {getComments, addComments} from './modules/api.js'
// import {formStatusMsg} from './modules/commentModel.js'

window.onload = async () => {
  listComments(await getComments());
  // commentCounter(await getComments())
}
  

const modelCommentForm = document.querySelector('.comment__form');
modelCommentForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const values = {
    item_id: "item1",
    username: document.querySelector('.comment__name').value,
    comment: document.querySelector('.comment').value
  };
  formStatusMsg()
  modelCommentForm.reset();
  addComments(values)
});
  
  
  
  











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