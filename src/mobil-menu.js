const btnOpen = document.querySelector('.btn-open-js');
const divBdr = document.querySelector('.backdrop');

const btnClose = document.querySelector('.btn-close-js');

btnOpen.addEventListener('click', onClick);
btnClose.addEventListener('click', onClickBtnClose);
function onClick() {
  divBdr.classList.add('is-open');
}
function onClickBtnClose() {
  divBdr.classList.remove('is-open');
}
