const btn = document.querySelector('#submit');
const metals = document.querySelector('#metals');
const mistingHeader = document.querySelector('#misting');

btn.addEventListener('click', apiRequest);

async function apiRequest() {
  const metal = metals.options[metals.selectedIndex].value;
  try {
    const res = await fetch(`https://misting-api.herokuapp.com/api/${metal}`);
    const metalInfo = await res.json();
    console.log(metalInfo);
    mistingHeader.textContent = `Misting: ${metalInfo.mistingType}`;

  } catch(err) {
    console.error(err);
  }

}