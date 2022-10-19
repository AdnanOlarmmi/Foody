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
  // const postH2 = document.createElement('h2');
  
  postUl.classList.add('post__comment');
  // postH2.classList.add('post__comment__title');
  
  // postH2.innerText = 'Comments';
  // postUl.append;
  return postUl;
}

modelContent.append(
  createXBtn(),
  createItemDetailsEl(),
  createCommentEl()
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


