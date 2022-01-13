(() => {
  const refsAbout = {
    openAboutModalBtn: document.querySelector('[data-modal-about-open]'),
    closeAboutModalBtn: document.querySelector('[data-modal-about-close]'),
    aboutmodal: document.querySelector('[data-modal-about]'),
  };

  refsAbout.openAboutModalBtn.addEventListener('click', toggleModal);
  refsAbout.closeAboutModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refsAbout.aboutmodal.classList.toggle('is-hidden');
  }
})();
