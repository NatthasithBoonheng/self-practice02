const listEl = document.getElementById('item-list');
const form = document.getElementById('item-form');
const nameInput = document.getElementById('name');

let items = JSON.parse(localStorage.getItem('items') || '[]');

function saveItems() {
  localStorage.setItem('items', JSON.stringify(items));
}

function renderItems() {
  listEl.innerHTML = '';
  items.forEach((item, index) => {
    const div = document.createElement('div');
    div.textContent = item.name;
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => {
      items.splice(index, 1);
      saveItems();
      renderItems();
    };
    div.appendChild(delBtn);
    listEl.appendChild(div);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (!name) return;
  items.push({ name });
  saveItems();
  renderItems();
  form.reset();
});

renderItems();
