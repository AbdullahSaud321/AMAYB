const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

document.getElementById('volunteerForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Form submitted!');
  window.location.href = 'index.html';
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzfvZ-u0nxWmaTvBI607s28D5l9QVlfW2nIB2Lrbx5qwDMz7-IFJHt7683nfeHwGYxbUQ/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully."))
    .then(() => {
      window.location.href = 'index.html'; // Replace with the URL of the page you want to redirect to
    })
    .catch(error => console.error('Error!', error.message));
});
