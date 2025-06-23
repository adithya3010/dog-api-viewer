const gallery = document.getElementById('dog-gallery');
const refreshBtn = document.getElementById('refresh');
const searchInput = document.getElementById('search');

let dogImages = [];

async function fetchDogs() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random/10');
  const data = await res.json();
  dogImages = data.message;
  displayDogs(dogImages);
}

function displayDogs(images) {
  gallery.innerHTML = '';
  images.forEach(imgUrl => {
    const breed = imgUrl.split('/')[4]; // extract breed from URL
    console.log(breed);// Print breed names in console , in case if you dont know the breed names
    if (breed.includes(searchInput.value.toLowerCase())) {
      const dogCard = document.createElement('div');
      dogCard.classList.add('dog-card');
      dogCard.innerHTML = `<img src="${imgUrl}" alt="${breed}" title="${breed}" />`;
      gallery.appendChild(dogCard);
    }
  });
}

refreshBtn.addEventListener('click', fetchDogs);
searchInput.addEventListener('input', () => displayDogs(dogImages));

fetchDogs();
