const btnOpen = document.querySelector('.btn-open-js');
export const divBdr = document.querySelector('.backdrop');

const btnClose = document.querySelector('.btn-close-js');

const divContentMenu = document.querySelector('.modal-menu');

btnOpen.addEventListener('click', onClick);
btnClose.addEventListener('click', onClickBtnClose);
function onClick() {
  divBdr.classList.add('is-open');
  divContentMenu.style.display = 'block';
}
function onClickBtnClose() {
  divBdr.classList.remove('is-open');
  divContentMenu.style.display = 'none';
}
