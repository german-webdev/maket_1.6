
export default function sidebarToggle() {
  const pageMask = document.querySelector('.page__mask');
  const sidebar = document.querySelector('.sidebar');
  const burgerBtn = document.querySelector('#sidebarToggle');
  const logo = document.getElementById('logo');
  const body = document.body;


  burgerBtn.addEventListener ('click', function() {
    let on = burgerBtn.classList.contains('burger__button--active');

    if (!on) {
      showSidebar();
    } else {
      closeSidebar();
    }
  });

  function showSidebar() {
    pageMask.classList.add('page__mask--active');

    sidebar.classList.add('sidebar--active');
    burgerBtn.classList.add('burger__button--active');
    logo.classList.add('logo--transform');
    logo.classList.add('logo--opacity');
    body.classList.add('no-scroll');

    pageMask.addEventListener('click', closeSidebar);
  }

  function closeSidebar() {
    burgerBtn.classList.remove('burger__button--active');
    sidebar.classList.remove('sidebar--active');
    logo.classList.remove('logo--transform');
    logo.classList.remove('logo--opacity');
    body.classList.remove('no-scroll');

    setTimeout(() => {
      pageMask.classList.remove('page__mask--active');
    }, 20)

  }
};

sidebarToggle();
