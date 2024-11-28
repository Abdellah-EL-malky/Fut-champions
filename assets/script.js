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