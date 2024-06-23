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

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Your message has been sent! We will get back to you soon.');
  window.location.href = 'index.html';
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzi66LDYrnpr3dzDfcQB1_HWeBtA2VStHtOAT_8r18DS5oq6Vc4eP1Iv4k8Ok4ekSab/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully."))
    .then(() => {
      window.location.href = 'index.html'; 
    })
    .catch(error => console.error('Error!', error.message));
});
