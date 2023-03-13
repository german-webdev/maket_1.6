export default function feedbackModalToggle() {
  const pageMask = document.querySelector('.page__mask');
  const modalFeedback = document.querySelector('.modal-feedback');
  const modalCall = document.querySelector('.modal-call');
  const closedModalBtn = document.querySelector('.modal-feedback__btn-closed');
  const feedbackModalBtn = document.querySelector('#feedbackModalBtn');
  const body = document.body;


  feedbackModalBtn.addEventListener ('click', function() {
    let on = body.classList.contains('modal-feedback--active');

    if (!on) {
      showFeedbackModal();
    } else {
      closeFeedbackModal();
    }
  });

  function showFeedbackModal() {

    pageMask.classList.add('page__mask--active');

    modalFeedback.classList.add('modal-feedback--active');
    body.classList.add('no-scroll');
    modalCall.classList.remove('modal-call--active');

    pageMask.addEventListener('click', closeFeedbackModal);
    closedModalBtn.addEventListener('click', closeFeedbackModal);
  }

  function closeFeedbackModal() {
    modalFeedback.classList.remove('modal-feedback--active');
    body.classList.remove('no-scroll');

    setTimeout(() => {
      pageMask.classList.remove('page__mask--active');
    }, 20)
  }
};

feedbackModalToggle();
