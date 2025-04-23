// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', function () {
  const textElement = document.getElementById('text-to-change');
  textElement.textContent = 'The text has been changed!';
});

// Modify CSS styles via JavaScript
document.getElementById('modify-style-btn').addEventListener('click', function () {
  const styleElement = document.getElementById('style-to-modify');
  styleElement.style.color = 'red';
  styleElement.style.fontSize = '20px';
  styleElement.style.fontWeight = 'bold';
});

// Add or remove an element when a button is clicked
const removableElement = document.getElementById('removable-element');
const removeButton = document.getElementById('remove-element-btn');
const addButton = document.getElementById('add-element-btn');

removeButton.addEventListener('click', function () {
  removableElement.remove();
  removeButton.classList.add('hidden');
  addButton.classList.remove('hidden');
});

addButton.addEventListener('click', function () {
  const container = document.getElementById('element-container');
  const newElement = document.createElement('p');
  newElement.id = 'removable-element';
  newElement.textContent = 'This element can be removed or added back.';
  container.appendChild(newElement);
  addButton.classList.add('hidden');
  removeButton.classList.remove('hidden');
});


