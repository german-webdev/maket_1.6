export default function tabsNavSidebar() {
  const tabItems = Array.from(document.querySelectorAll('.nav__link'));

  const clearActiveClass = (elem, className = 'nav__link--active') => {
    elem.find(item => item.classList.remove(`${ className }`));
  }

  const setActiveClass = (elem, index, className = 'nav__link--active') => {
    elem[index].classList.add(`${ className }`);
  }

  const checkoutTabs = (item, index) => {
    item.addEventListener('click', (event) => {
      clearActiveClass(tabItems);
      setActiveClass(tabItems, index);
    });
  }

  tabItems.forEach(checkoutTabs);
}

tabsNavSidebar();
