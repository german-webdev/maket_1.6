export default function callModalToggle() {
  const pageMask = document.querySelector('.page__mask');
  const modalCall = document.querySelector('.modal-call');
  const modalFeedback = document.querySelector('.modal-feedback');
  const closedBtn = document.querySelector('.modal-call__btn-closed');
  const callModalBtn = document.querySelectorAll('#callModalBtn');
  const body = document.body;

  callModalBtn.forEach(e => e.addEventListener ('click', function() {
    let on = body.classList.contains('modal-call--active');
    modalCall.classList.toggle('modal-call--active');

    if (!on) {
      showCallModal();
    } else {
      closeCallModal();
    }
  }));

  function showCallModal() {
    pageMask.classList.add('page__mask--active');

    modalFeedback.classList.remove('modal-feedback--active');
    body.classList.add('no-scroll');

    pageMask.addEventListener('click', closeCallModal);
    closedBtn.addEventListener('click', closeCallModal);
  }

  function closeCallModal() {
    body.classList.remove('no-scroll');
    modalCall.classList.remove('modal-call--active');

    setTimeout(() => {
      pageMask.classList.remove('page__mask--active');
    }, 20)


  }
};

callModalToggle();
