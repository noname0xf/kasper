/** navigation bar toggle */
let navToggleBtn = document.getElementById('nav-toggle');
navToggleBtn.addEventListener('click', function (e) {
    document.getElementById(this.dataset.target).classList.add('active');
});
let navCloseBtn = document.getElementById('nav-close');
navCloseBtn.addEventListener('click', function (e) {
    this.parentElement.classList.remove('active');
});