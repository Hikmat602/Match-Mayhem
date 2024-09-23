const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', () => {
 document.body.classList.toggle('dark-mode');
 document.querySelector('header').classList.toggle('dark-mode');
 toggleButton.classList.toggle('dark-mode');
});
