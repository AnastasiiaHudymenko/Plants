const basicLightbox = require('basiclightbox');
console.log(basicLightbox);
const refs = {
  form: document.querySelector('.call-form__form'),
  btnFormSend: document.querySelector('.call-form__btn'),
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  if (evt.target.email.value) {
    basicLightbox
      .create(
        `<div class="modal mdl-form">
  	<h1 class="form-modal__title">Отлично!</h1>
  	<p class="form-modal__desc">На адресс <b class="fr-md-b"> ${evt.target.email.value} </b> теперь будут приходить самые важные новости</p>
      </div>`
      )
      .show();
    refs.form.reset();
  }
}
