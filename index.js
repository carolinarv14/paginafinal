import {data} from './data/data.js';

console.log(data)


const descriptionContainer = document.getElementById('description-container');
const descriptionElement = document.getElementById('description');


const template = document.getElementById('template-card');


const itemsContainer = document.getElementById('items');


data.forEach(itemData => {
  
  const item = template.content.cloneNode(true);

  
  item.querySelector('h5').textContent = itemData.name;
  item.querySelector('img').src = itemData.image;


  item.querySelector('img').addEventListener('click', () => {
    descriptionElement.textContent = itemData.description || 'No hay descripción disponible.';
    descriptionContainer.style.display = 'block';
  });

  
  itemsContainer.appendChild(item);
});