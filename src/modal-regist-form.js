import { divBdr } from './mobil-menu';

const btnRegist = document.querySelector('.hero__btn-registr');
const divModalRegist = document.querySelector('.modal-regist-form');

const btnModalRegistClose = document.querySelector('.modal-regist__btn-close');

btnRegist.addEventListener('click', onClick);
btnModalRegistClose.addEventListener('click', onClickBtnModalRegist);

function onClick() {
  divBdr.classList.add('is-open');
  divModalRegist.style.display = 'block';
}

function onClickBtnModalRegist() {
  divBdr.classList.remove('is-open');
  divModalRegist.style.display = 'none';
}
