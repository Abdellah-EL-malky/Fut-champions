document.addEventListener('DOMContentLoaded', function () {
    function toggleModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
      } else {
        modal.classList.add('hidden');
      }
    }

    document.querySelectorAll('[data-modal-toggle]').forEach(function (elem) {
      elem.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal-toggle');
        toggleModal(modalId);
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    function validatePlayerName(name) {
        const regex = /^\d{1,3}$/;
      return regex.test(name);
    }

    function validateNumericInput(value) {
        const regex = /^([1-9][0-9]?|100)$/;
        return regex.test(value) && Number(value) <= 100;
    }

    function addFormValidation(formId, playerNameId, ratingId, statIds) {
      const form = document.getElementById(formId);
      form.addEventListener('submit', function (event) {
        const playerName = document.getElementById(playerNameId).value.trim();
        const rating = document.getElementById(ratingId).value.trim();
        let valid = true;
        let errorMessage = '';

        if (!validatePlayerName(playerName)) {
          valid = false;
          errorMessage += 'The players name must contain only letters, without spaces, of a maximum of 10 characters.\n';
        }

        if (!validateNumericInput(rating)) {
          valid = false;
          errorMessage += 'Choose a number between 1 and 100.\n';
        }

        for (let i = 0; i < statIds.length; i++) {
          const statValue = document.getElementById(statIds[i]).value.trim();
          if (!validateNumericInput(statValue)) {
            valid = false;
            errorMessage += `Choose a number between 1 and 100.\n`;
            break;
          }
        }

        if (!valid) {
          event.preventDefault();
          alert(errorMessage);
        }
      });
    }

    const forms = [
      {
        formId: 'form-gk',
        playerNameId: 'name-gk',
        ratingId: 'rating-gk',
        statIds: ['stat1-gk', 'stat2-gk', 'stat3-gk', 'stat4-gk', 'stat5-gk', 'stat6-gk']
      },
      {
        formId: 'form-rb',
        playerNameId: 'name-rb',
        ratingId: 'rating-rb',
        statIds: ['stat1-rb', 'stat2-rb', 'stat3-rb', 'stat4-rb', 'stat5-rb', 'stat6-rb']
      },
      {
        formId: 'form-cb',
        playerNameId: 'name-cb',
        ratingId: 'rating-cb',
        statIds: ['stat1-cb', 'stat2-cb', 'stat3-cb', 'stat4-cb', 'stat5-cb', 'stat6-cb']
      },
      {
        formId: 'form-lb',
        playerNameId: 'name-lb',
        ratingId: 'rating-lb',
        statIds: ['stat1-lb', 'stat2-lb', 'stat3-lb', 'stat4-lb', 'stat5-lb', 'stat6-lb']
      },
      {
        formId: 'form-lmrm',
        playerNameId: 'name-lmrm',
        ratingId: 'rating-lmrm',
        statIds: ['stat1-lmrm', 'stat2-lmrm', 'stat3-lmrm', 'stat4-lmrm', 'stat5-lmrm', 'stat6-lmrm']
      },
      {
        formId: 'form-cm',
        playerNameId: 'name-cm',
        ratingId: 'rating-cm',
        statIds: ['stat1-cm', 'stat2-cm', 'stat3-cm', 'stat4-cm', 'stat5-cm', 'stat6-cm']
      },
      {
        formId: 'form-st',
        playerNameId: 'name-stl',
        ratingId: 'rating-stl',
        statIds: ['stat1-stl', 'stat2-stl', 'stat3-stl', 'stat4-stl', 'stat5-stl', 'stat6-stl']
      },
    
    ];

    forms.forEach(function(form) {
      addFormValidation(form.formId, form.playerNameId, form.ratingId, form.statIds);
    });
  });