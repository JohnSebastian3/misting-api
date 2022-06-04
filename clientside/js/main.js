const btn = document.querySelector('#submit');
const metals = document.querySelector('#metals');
const mistingHeader = document.querySelector('#misting');

btn.addEventListener('click', apiRequest);

async function apiRequest() {
  console.log(metals);
  const misting = await fetch(`https://misting-api.herokuapp.com/api/${metal}`);
}