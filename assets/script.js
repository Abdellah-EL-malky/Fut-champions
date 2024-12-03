document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.wrapper');
  const playerModal = document.getElementById('player-modal');
  const modalForm = playerModal.querySelector('form');
  const modalCloseButton = playerModal.querySelector('.modal-close');

  const positions = ['GK', 'RB', 'CBR', 'CBL', 'LB', 'LM', 'CML', 'CMR', 'RM', 'STL', 'STR'];
  const positionStats = {
    'GK': ['Diving', 'Handling', 'Kicking', 'Reflexes', 'Speed', 'Positioning'],
    'default': ['Pace', 'Shooting', 'Passing', 'Dribbling', 'Defending', 'Physical']
  };

  positions.forEach(pos => {
    const card = createPlayerCard(pos);
    wrapper.appendChild(card);
  });

  document.querySelectorAll('.addbutton').forEach(button => {
    button.addEventListener('click', () => openModal(button.closest('.fut-player-card').id));
  });

  modalCloseButton.addEventListener('click', closeModal);

  modalForm.addEventListener('submit', handleFormSubmit);

  function createPlayerCard(position) {
    const card = document.createElement('div');
    card.id = position;
    card.className = 'fut-player-card';
    card.innerHTML = `
          <div class="player-card-top">
              <div class="player-master-info">
                  <button class="addbutton" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                      </svg>
                  </button>
                  <div class="player-rating"><span></span></div>
                  <div class="player-position"><span>${position}</span></div>
                  <div class="player-nation"><img src="" alt="Country" hidden></div>
                  <div class="player-club"><img src="" alt="Club" hidden></div>
              </div>
              <div class="player-picture"><img src="" alt="Player" hidden></div>
          </div>
          <div class="player-card-bottom">
              <div class="player-info">
                  <div class="player-name"><span></span></div>
                  <div class="player-features">
                      <div class="player-features-col">
                          <span><div class="player-feature-value"></div><div class="player-feature-title"></div></span>
                          <span><div class="player-feature-value"></div><div class="player-feature-title"></div></span>
                          <span><div class="player-feature-value"></div><div class="player-feature-title"></div></span>
                      </div>
                      <div class="player-features-col">
                          <span><div class="player-feature-value"></div><div class="player-feature-title"></div></span>
                          <span><div class="player-feature-value"></div><div class="player-feature-title"></div></span>
                          <span><div class="player-feature-value"></div><div class="player-feature-title"></div></span>
                      </div>
                  </div>
              </div>
          </div>
      `;
    return card;
  }

  function openModal(position) {
    const stats = positionStats[position] || positionStats['default'];
    modalForm.reset();
    modalForm.querySelector('#position').value = position;
    stats.forEach((stat, index) => {
      modalForm.querySelector(`label[for="stat${index + 1}"]`).textContent = stat;
    });
    playerModal.classList.remove('hidden');
  }

  function closeModal() {
    playerModal.classList.add('hidden');
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(modalForm);
    const position = formData.get('position');
    const card = document.getElementById(position);

    card.querySelector('.player-name span').textContent = formData.get('name');
    card.querySelector('.player-rating span').textContent = formData.get('rating');
    card.querySelector('.player-nation img').src = URL.createObjectURL(formData.get('country'));
    card.querySelector('.player-nation img').hidden = false;
    card.querySelector('.player-club img').src = URL.createObjectURL(formData.get('club'));
    card.querySelector('.player-club img').hidden = false;
    card.querySelector('.player-picture img').src = URL.createObjectURL(formData.get('face'));
    card.querySelector('.player-picture img').hidden = false;

    const stats = positionStats[position] || positionStats['default'];
    stats.forEach((stat, index) => {
      const col = Math.floor(index / 3);
      const row = index % 3;
      const statElement = card.querySelectorAll('.player-features-col')[col].querySelectorAll('span')[row];
      statElement.querySelector('.player-feature-value').textContent = formData.get(`stat${index + 1}`);
      statElement.querySelector('.player-feature-title').textContent = stat;
    });

    const addButton = card.querySelector('.addbutton');
    addButton.style.display = 'none';
    closeModal();
  }
});
