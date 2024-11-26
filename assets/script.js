fetch('data/players.json').then(function(response){
    return response.json()
})

.then(function(obj){
    console.log(obj);
})

.catch(function(error){
    console.error('Something went wrong with fetching the data!');
    console.error(error);
});

const formations = {
    '4-4-2': [
        [{name: 'CF', index: 0}, {name: 'CF', index: 1}],
        [{name: 'LMF', index: 2}, {name: 'CMF', index: 3}, {name: 'CMF', index: 4}, {name: 'RMF', index: 5}],
        [{name: 'LB', index: 6}, {name: 'CB', index: 7}, {name: 'CB', index: 8}, {name: 'RB', index: 9}],
        [{name: 'GK', index: 10}]
    ],
    '4-3-3': [
        [{name: 'LWF', index: 0}, {name: 'CF', index: 1}, {name: 'RWF', index: 2}],
        [{name: 'CMF', index: 3}, {name: 'DMF', index: 4}, {name: 'CMF', index: 5}],
        [{name: 'LB', index: 6}, {name: 'CB', index: 7}, {name: 'CB', index: 8}, {name: 'RB', index: 9}],
        [{name: 'GK', index: 10}]
    ],
};console.log(formations);

let selectedFormation = '4-4-2';
let selectedPlayers = Array(11).fill(null);
let currentPosition = null;

const formationElement = document.getElementById('formation');
const lineupSelect = document.getElementById('lineup');
const modal = document.getElementById('playerModal');
const closeBtn = document.getElementsByClassName('close')[0];
const playersGrid = document.getElementById('playersGrid');
const nameFilter = document.getElementById('nameFilter');
const positionFilter = document.getElementById('positionFilter');
const nationalityFilter = document.getElementById('nationalityFilter');
const ratingFilter = document.getElementById('ratingFilter');
const ratingValue = document.getElementById('ratingValue');

function renderFormation() {
    formationElement.innerHTML = '';
    formations[selectedFormation].forEach(row => {
        const rowElement = document.createElement('div');
        rowElement.className = 'row';
        row.forEach(position => {
            const card = document.createElement('div');
            card.className = 'player-card';
            card.onclick = () => openModal(position.index);
            if (selectedPlayers[position.index]) {
                const player = selectedPlayers[position.index];
                card.innerHTML = `
                    <div class="fut-player-card">
        <div class="player-card-top">
          <div class="player-master-info">
            <div class="player-rating">
              <!-- general -->
              <span>${player.rating}</span>
            </div>
            <div class="player-position">
              <!-- post -->
              <span>${player.position}</span>
            </div>
            <div class="player-nation">
              <!-- pays -->
              <img src="${player.flag}" alt="">
            </div>
            <div class="player-club">
              <!-- club -->
              <img src="${player.logo}" alt="">
            </div>
          </div>
          <div class="player-picture">
            <!-- tete -->
            <img src="${player.photo}" alt="">
          </div>
        </div>
        <div class="player-card-bottom">
          <div class="player-info">
            <div class="player-name">
              <!-- nom -->
              <span>${player.name}</span>
            </div>
            <div class="player-features">
              <div class="player-features-col">
                <span>
                  <!-- scores -->
                  <div class="player-feature-value">${player.pace}</div>
                  <div class="player-feature-title">PAC</div>
                </span>
                <span>
                  <div class="player-feature-value">${player.shooting}</div>
                  <div class="player-feature-title">SHO</div>
                </span>
                <span>
                  <div class="player-feature-value">${player.ratpassinging}</div>
                  <div class="player-feature-title">PAS</div>
                </span>
              </div>
              <div class="player-features-col">
                <span>
                  <div class="player-feature-value">${player.dribbling}</div>
                  <div class="player-feature-title">DRI</div>
                </span>
                <span>
                  <div class="player-feature-value">${player.defending}</div>
                  <div class="player-feature-title">DEF</div>
                </span>
                <span>
                  <div class="player-feature-value">${player.physical}</div>
                  <div class="player-feature-title">PHY</div>
                </span>
              </div>
            </div>
          </div>
        </div>
                `;
            } else {
                card.innerHTML = `
                    <div class="position">${position.name}</div>
                    <div class="add-icon">+</div>
                `;
            }
            rowElement.appendChild(card);
        });
        formationElement.appendChild(rowElement);
    });
}