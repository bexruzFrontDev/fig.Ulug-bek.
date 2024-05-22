let links = document.querySelector('.links');
let scroll1 = document.querySelector('.scroll');

function openNav() {
  links.classList.toggle('menu');
  scroll1.classList.toggle('hidden');
}

let inp = document.querySelector('.inp');
let h1 = document.querySelector('.h1');

function korsat() {
  console.log(inp.value);
  h1.innerHTML = inp.value;
  scroll1.style.background = inp.value;
}