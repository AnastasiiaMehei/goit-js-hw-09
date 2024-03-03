const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

const localStorageKey = 'feedback-form-state';
const storedFormData = JSON.parse(localStorage.getItem(localStorageKey)) || {
  email: '',
  message: '',
};

email.value = storedFormData.email;
message.value = storedFormData.message;
form.addEventListener('input', handleInput);
function handleInput() {
  const object = { email: email.value.trim(), message: message.value.trim() };
  setFormData(object);
}
function setFormData(object) {
  localStorage.setItem('feedback-form-state', JSON.stringify(object));
}
form.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
  evt.preventDefault();
  if (email.value == '' || message.value == '') {
    return alert('Please, check input information!!!');
  }
  const object = { email: email.value.trim(), message: message.value.trim() };
  console.log(object);
  localStorage.removeItem(localStorageKey);
  form.reset();
}
