const modelContent = document.querySelector('.model__content');
export const createXBtn = () => {
const div = document.createElement('div');
const xBtn = document.createElement('button');
const span = document.createElement('span');

div.classList.add('model__container');
span.classList.add('x__btn');
xBtn.classList.add('close');

span.innerHTML = '&times';
xBtn.setAttribute('type', 'button');

xBtn.appendChild(span)
div.appendChild(xBtn)
return div;
}


const createItemDetailsEl = () => {
  const divHead = document.createElement('div');
  const modelImg = document.createElement('img');
  const modelName = document.createElement('h2');
  const modelUl = document.createElement('ul');
  const Li1 = document.createElement('li');
  const Li2 = document.createElement('li');
  const Li3 = document.createElement('li');
  const Li4 = document.createElement('li');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  const span4 = document.createElement('span');
  const span5 = document.createElement('span');
  const span6 = document.createElement('span');
  const span7 = document.createElement('span');
  const span8 = document.createElement('span');
  
  divHead.classList.add('model__head');
  modelImg.classList.add('model__img');
  modelName.classList.add('model__name');
  modelUl.classList.add('model__prop');
  Li1.classList.add('model__item');
  Li2.classList.add('model__item');
  Li3.classList.add('model__item');
  Li4.classList.add('model__item');
  span5.classList.add('span__content');
  span6.classList.add('span__content');
  span7.classList.add('span__content');
  span8.classList.add('span__content');

  
  modelImg.setAttribute('src', '');
  modelImg.setAttribute('alt', 'Item1');
  
  modelName.innerText = 'Item1';
  span1.innerText = 'Fuel: ';
  span2.innerText = 'Fuel: ';
  span3.innerText = 'Fuel: ';
  span4.innerText = 'Fuel: ';
  span5.innerText = 'Titanium';
  span6.innerText = 'Titanium';
  span7.innerText = 'Titanium';
  span8.innerText = 'Titanium';
  
  Li1.append(span1, span5);
  Li2.append(span2, span6);
  Li3.append(span3, span7);
  Li4.append(span4, span8);
  modelUl.append(Li1, Li2, Li3, Li4)
  divHead.append(modelImg, modelName, modelUl);
  
  return divHead;
}

const createCommentEl = () => {
  const postUl = document.createElement('ul');
  const postH2 = document.createElement('h2');
  
  postUl.classList.add('post__comment');
  postH2.classList.add('post__comment__title');
  
  postH2.innerText = 'Comments';
  postUl.append(postH2);
  return postUl;
}

const createformEl = () => {
  const formDiv = document.createElement('div');
  const h3El = document.createElement('h3');
  const formEl = document.createElement('form');
  const input = document.createElement('input');
  const textarea = document.createElement('textarea');
  const button = document.createElement('button');
  const divMsg = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  
  formDiv.classList.add('model__form');
  h3El.classList.add('form__title');
  formEl.classList.add('comment__form');
  input.classList.add('comment__name');
  textarea.classList.add('comment');
  button.classList.add('form__btn');
  divMsg.classList.add('message');
  p1.classList.add('success');
  p2.classList.add('danger');
  
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Your name');
  textarea.setAttribute('placeholder', 'insights');
  textarea.setAttribute('cols', '20');
  textarea.setAttribute('rows', '10');
  button.setAttribute('type', 'submit');
  
  h3El.innerText = 'Add a comment';
  button.innerText = 'Comment';
  p1.innerText = 'Form successfully submited';
  p2.innerText = 'Please fill in the form'
  
  divMsg.append(p1, p2);
  formEl.append(input, textarea, button, divMsg);
  formDiv.append(h3El, formEl);
  
  return formDiv;
}


modelContent.append(
  createXBtn(),
  createItemDetailsEl(),
  createCommentEl(),
  createformEl()
);




const ShowTriggerBtn = document.querySelector('.popbtn__trigger');
const closeBtn = document.querySelector('.x__btn');
export const modelWindow = () => {
  const model = document.querySelector('.model');

  ShowTriggerBtn.addEventListener('click', () => {
    model.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    model.classList.remove('show');
  });

  window.addEventListener('click', (e) => {
    if(e.target === model) {
      model.classList.remove('show');
    }
  });
}
modelWindow()

const inputName = document.querySelector('.comment__name')
const inputComment = document.querySelector('.comment')
const successMsg = document.querySelector('.success');
const dangerMsg = document.querySelector('.danger');

export const formStatusMsg = () => {
  if(inputName.value === '' || inputComment.value === '') {
    dangerMsg.style.display = 'block';
  } else {
    setTimeout(() => {
      inputName.value = '';
      inputComment.value === '';
    }, 2000)
    successMsg.style.display = 'block';
  }

  setTimeout(() => {
    dangerMsg.style.display = 'none';
    successMsg.style.display = 'none';
  }, 1000)
}
