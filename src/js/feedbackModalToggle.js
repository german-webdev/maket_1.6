export default function feedbackModalToggle() {
  const pageMask = document.querySelector('.page__mask');
  const modalFeedback = document.querySelector('.modal-feedback');
  const modalCall = document.querySelector('.modal-call');
  const closedModalBtn = document.querySelector('.modal-feedback__btn-closed');
  const feedbackModalBtn = document.querySelectorAll('#feedbackModalBtn');
  const body = document.body;


  feedbackModalBtn.forEach(e => e.addEventListener ('click', function() {
    let on = body.classList.contains('modal-feedback--active');
    modalFeedback.classList.toggle('modal-feedback--active');

    if (!on) {
      showFeedbackModal();
    } else {
      closeFeedbackModal();
    }
  }));

  function showFeedbackModal() {
    pageMask.classList.add('page__mask--active');
    body.classList.add('no-scroll');
    modalCall.classList.remove('modal-call--active');

    pageMask.addEventListener('click', closeFeedbackModal);
    closedModalBtn.addEventListener('click', closeFeedbackModal);
  }

  function closeFeedbackModal() {
    body.classList.remove('no-scroll');
    modalFeedback.classList.remove('modal-feedback--active');

    setTimeout(() => {
      pageMask.classList.remove('page__mask--active');
    }, 20)
  }
};

feedbackModalToggle();
