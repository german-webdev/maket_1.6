export default function tabsNavSidebar() {
  const tabItems = Array.from(document.querySelectorAll('.nav-sidebar__item'));

  const clearActiveClass = (elem, className = 'nav-sidebar__item--active') => {
    elem.find(item => item.classList.remove(`${ className }`));
  }

  const setActiveClass = (elem, index, className = 'nav-sidebar__item--active') => {
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
