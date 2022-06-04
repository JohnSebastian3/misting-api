const btn = document.querySelector('#submit');
const metals = document.querySelector('#metals');
const mistingHeader = document.querySelector('#misting');

btn.addEventListener('click', apiRequest);

async function apiRequest() {
  const metal = metals.options[metals.selectedIndex].value;
  const misting = await fetch(`https://misting-api.herokuapp.com/api/${metal}`);

  mistingHeader.textContent = `Misting: ${misting}`;
}