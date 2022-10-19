import './styles.css';
import {formStatusMsg, modelWindow} from './modules/commentModel.js'
import commentCounter from './modules/countComment.js'
import { listComments, commentsContainer } from './modules/displayComments.js'
import {getComments} from './modules/api.js'
// import {formStatusMsg} from './modules/commentModel.js'

window.onload = async () => {
  listComments(await getComments());
  commentCounter(await getComments())
}
  
  
  
  
  











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