
export default function sidebarToggle() {
  const pageMask = document.querySelector('.page__mask');
  const sidebar = document.querySelector('.sidebar');
  const burgerBtn = document.querySelector('#sidebarToggle');
  const logo = document.getElementById('logo');
  const body = document.body;


  sidebar.addEventListener ('scroll', function() {
    let scroll = sidebar.scrollTop;
    console.log(scroll);

    if ( scroll >= 50 ) {
      logo.style.display = 'none';
      burgerBtn.style.transform = 'translateX(620%)';
      burgerBtn.style.transition = 'all 0.1s ease-in';
    } else {
      logo.style.display = 'flex';
      burgerBtn.style.transform = 'translateX(0)';
      burgerBtn.style.transition = 'all 0.1s ease-out';
    }
  });

  burgerBtn.addEventListener ('click', function() {
    let on = burgerBtn.classList.contains('burger__button--active');
    scrollEditOff();

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

  function scrollEditOff() {
    burgerBtn.style.transform = 'translateX(0)';
    burgerBtn.style.transition = 'all 0.1s ease-out';
    logo.style.display = 'flex';
    setTimeout(() => {
      sidebar.scrollTo(0, 0);
    }, 500);

  }

};

sidebarToggle();
