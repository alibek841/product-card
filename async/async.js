const STORAGE_KEY = 'users_data';

const statusEl = document.getElementById('status');
const usersEl = document.getElementById('users');
const controlsEl = document.getElementById('controls');
const getAllBtn = document.getElementById('getAllBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');

let users = [];

async function init() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
  
    users = JSON.parse(stored);
    renderUsers();
    showControls();
    hideStatus();
  } else {
    
    showStatus('Данные загружаются...');
    try {
      const data = await fetchUsers();
      users = data.users;
      saveToStorage();
      renderUsers();
      showControls();
      hideStatus();
    } catch (error) {
      showStatus('Ошибка при загрузке данных', true);
      console.error(error);
    }
  }
}

function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch('./users.json');
        if (!response.ok) {
          throw new Error('Не удалось загрузить данные');
        }
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(new Error('Ошибка сети: ' + error.message));
      }
    }, 2000); 
  });
}

function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function renderUsers() {
  usersEl.innerHTML = '';

  if (users.length === 0) {
    statusEl.textContent = 'Нет пользователей';
    statusEl.style.display = 'block';
    return;
  }

  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <button class="delete-card" data-id="${user.id}">✕</button>
      <h3>${user.name} ${user.surname}</h3>
      <p>📧 ${user.email}</p>
      <p>🎂 Возраст: ${user.age}</p>
      <p>📍 ${user.city || 'Не указан'}</p>
    `;
    usersEl.appendChild(card);
  });


  document.querySelectorAll('.delete-card').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = Number(e.target.dataset.id);
      deleteUser(id);
    });
  });
}

function deleteUser(id) {
  users = users.filter(user => user.id !== id);
  saveToStorage();
  renderUsers();

  if (users.length === 0) {
    showStatus('Все пользователи удалены');
  }
}

function deleteAllUsers() {
  if (users.length === 0) {
    showStatus('Список уже пуст');
    return;
  }
  users = [];
  saveToStorage();
  renderUsers();
  showStatus('Все пользователи удалены');
}

function getAllUsers() {
  if (users.length === 0) {
    showStatus('Нет пользователей для отображения');
    return;
  }
  renderUsers();
  showStatus(`Отображено пользователей: ${users.length}`);
}

function showStatus(text, isError = false) {
  statusEl.textContent = text;
  statusEl.style.display = 'block';
  statusEl.classList.toggle('error', isError);
}

function hideStatus() {
  statusEl.style.display = 'none';
  statusEl.classList.remove('error');
}

function showControls() {
  controlsEl.style.display = 'flex';
}

getAllBtn.addEventListener('click', getAllUsers);
deleteAllBtn.addEventListener('click', deleteAllUsers);


init();