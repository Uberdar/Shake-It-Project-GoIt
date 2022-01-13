(() => {
    const refsLocation = {
      openModalBtn: document.querySelector('[data-modal-location-open]'),
      openFranchiseBtn: document.querySelector('[data-modal-franchise-open]'),
      closeModalBtn: document.querySelector('[data-modal-location-and-franchise-close]'),
      modal: document.querySelector('[data-modal-location-and-franchise]'),
    };
  
    refsLocation.openModalBtn.addEventListener('click', toggleModal);
    refsLocation.openFranchiseBtn.addEventListener('click', toggleModal);
    refsLocation.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refsLocation.modal.classList.toggle('is-hidden');
    }
  })();
  // (() => {
  //   const refsFranchise = {
  //     openModalBtn: document.querySelector('[data-modal-franchise-open]'),
  //     closeModalBtn: document.querySelector('[data-modal-location-and-franchise-close]'),
  //     modal: document.querySelector('[data-modal-location-and-franchise]'),
  //   };
  
  //   refsFranchise.openModalBtn.addEventListener('click', toggleModal);
  //   refsFranchise.closeModalBtn.addEventListener('click', toggleModal);
  
  //   function toggleModal() {
  //     refsFranchise.modal.classList.toggle('is-hidden');
  //   }
  // })();


    // (() => {
  //   const refs = {
  //     openModalBtn: document.querySelector('[data-modal-open]'),
  //     closeModalBtn: document.querySelector('[data-modal-close]'),
  //     modal: document.querySelector('[data-modal]'),
  //   };
  
  //   refs.openModalBtn.addEventListener('click', toggleModal);
  //   refs.closeModalBtn.addEventListener('click', toggleModal);
  
  //   function toggleModal() {
  //     refs.modal.classList.toggle('is-hidden');
  //   }
  // })();