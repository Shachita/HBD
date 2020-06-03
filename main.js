const panels = document.querySelectorAll('.panel');
console.log('Yo');


function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));