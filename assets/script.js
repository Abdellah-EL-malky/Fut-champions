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
  
    function validatePlayerName(name) {
      if (name.length === 0) return false;
      for (let i = 0; i < name.length; i++) {
        const char = name[i];
        if (!/[A-Za-zÀ-ÖØ-öø-ÿ]/.test(char)) {
          return false;
        }
      }
      return name.length <= 10;
    }
  
    function validateNumericInput(value) {
      const numValue = Number(value);
      return !isNaN(numValue) && numValue >= 1 && numValue <= 100 && value.trim() !== "" && Number.isInteger(numValue);
    }
  
    function addFormValidation(formId) {
      const form = document.getElementById(formId);
      if (!form) {
        console.warn(`Formulaire avec l'ID '${formId}' introuvable.`);
        return;
      }
      form.addEventListener('submit', function (event) {
        const playerName = document.getElementById('name-gk').value.trim();
        const rating = document.getElementById('rating-gk').value.trim();
        const stat1 = document.getElementById('stat1-gk').value.trim();
  
        let valid = true;
        let errorMessage = '';
  
        if (!validatePlayerName(playerName)) {
          valid = false;
          errorMessage += 'The players name must contain only letters, without spaces.\n';
        }
  
        if (!validateNumericInput(rating)) {
          valid = false;
          errorMessage += 'Choose a number between 1 and 100.\n';
        }
  
        if (!validateNumericInput(textarea1)) {
          valid = false;
          errorMessage += 'Choose a number between 1 and 100.\n';
        }
  
        if (!validateNumericInput(textarea2)) {
          valid = false;
          errorMessage += 'Choose a number between 1 and 100.\n';
        }
  
        if (!validateNumericInput(textarea3)) {
          valid = false;
          errorMessage += 'Choose a number between 1 and 100.\n';
        }

        if (!validateNumericInput(textarea4)) {
          valid = false;
          errorMessage += 'Choose a number between 1 and 100.\n';
        }

        if (!validateNumericInput(textarea5)) {
          valid = false;
          errorMessage += 'Choose a number between 1 and 100.\n';
        }

        if (!validateNumericInput(textarea6)) {
          valid = false;
          errorMessage += 'Choose a number between 1 and 100.\n';
        }
  
        if (!valid) {
          event.preventDefault();
          alert(errorMessage);
        }
      });
    }
  
    const modalForms = ['form-gk'];
  modalForms.forEach(function(formId) {
    addFormValidation(formId);
  });
  });
  