const USERS_STORAGE_KEY = 'users_data';

const statusEl = document.getElementById('status');
const usersEl = document.getElementById('users');
const controlsEl = document.getElementById('controls');
const getAllBtn = document.getElementById('getAllBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const cardTemplate = document.getElementById('user-card-template');

let users = [];

async function init() {
  const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);

  if (storedUsers) {
    const parsedUsers = JSON.parse(storedUsers);
    if (parsedUsers.length > 0) {
      users = parsedUsers;
      renderUsers(users);
      showControls();
      hideStatus();
      return;
    }
  }

  showStatus('Данные загружаются...');
  try {
    const responseData = await fetchUsers();
    users = responseData.users;
    saveToStorage();
    renderUsers(users);
    showControls();
    hideStatus();
  } catch (error) {
    showStatus('Ошибка при загрузке данных', true);
    console.error(error);
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
        resolve(await response.json());
      } catch (error) {
        reject(new Error('Ошибка сети: ' + error.message));
      }
    }, 2000);
  });
}

function saveToStorage() {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

function renderUsers(usersArray) {
  usersEl.innerHTML = '';

  if (usersArray.length === 0) {
    showStatus('Нет пользователей');
    return;
  }

  usersArray.forEach(user => {
    const card = cardTemplate.content.cloneNode(true);

    card.querySelector('.delete-card').dataset.id = user.id;
    card.querySelector('.card__name').textContent = `${user.name} ${user.surname}`;
    card.querySelector('.card__email').textContent = `📧 ${user.email}`;
    card.querySelector('.card__age').textContent = `🎂 Возраст: ${user.age}`;
    card.querySelector('.card__city').textContent = `📍 ${user.city || 'Не указан'}`;

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
  renderUsers(users);
}

function deleteAllUsers() {
  if (users.length === 0) {
    showStatus('Список уже пуст');
    return;
  }
  users = [];
  saveToStorage();
  renderUsers(users);
  showStatus('Все пользователи удалены');
}

function getAllUsers() {
  if (users.length === 0) {
    showStatus('Нет пользователей для отображения');
    return;
  }
  renderUsers(users);
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