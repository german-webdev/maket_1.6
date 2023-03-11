export default function titleHidden() {
  let init = false;

  return () => {
    let title = document.querySelectorAll('.order__title');
    
    if (window.innerWidth >= 768) {
      if (!init) {
        init = true;
        title.forEach(e => e.style.display = 'none');
      } else if (init) {
        title.forEach(e => e.style.display = 'flex');
        init = false;
      }
    }
  }
}

titleHidden();


window.addEventListener('resize', titleHidden());
window.addEventListener('load', titleHidden());
