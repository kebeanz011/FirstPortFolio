const msgButton = document.getElementById('msgButton');
const submitButton = document.getElementById('submitButton');

msgButton.addEventListener("click", function() {
    window.location.href = "index2.html";
});

submitButton.addEventListener('click', function() {
  alert('Thank you for visiting my website!');
});
