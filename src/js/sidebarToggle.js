
export default function sidebarToggle() {
  let sidebar = document.querySelector('.sidebar');
  let burgerBtn = document.querySelector('#sidebarToggle');

  burgerBtn.addEventListener ('click', function() {
    let on = burgerBtn.classList.contains('burger__button--active');

    if (!on) {
      burgerBtn.classList.add('burger__button--active');
      sidebar.classList.add('sidebar--active');
    } else {
      burgerBtn.classList.remove('burger__button--active');
      sidebar.classList.remove('sidebar--active');
    }
  });
};

sidebarToggle();
