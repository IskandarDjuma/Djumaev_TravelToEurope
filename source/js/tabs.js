const tabsNav = document.querySelector('.tabs__nav');
const tabNavItems = tabsNav.querySelectorAll('.tabs__item');
const panels = document.querySelectorAll('.tabs-panels__item');


const setActiveItem = (elem) => {
  tabNavItems.forEach(el => {
    el.classList.remove('tabs__item--active');
  });
  elem.classList.add('tabs__item--active');
};

const findActiveItem = () => {
  let activeIndex = 0;
  for(let i = 0; i < tabNavItems.length; i++) {
    if (tabNavItems[i].classList.contains('tabs__item--active')) {
      activeIndex = i;
      break;
    };
  };
  return activeIndex;
};

const setActivePanel = (index) => {
  panels.forEach(el => {
    el.classList.remove('tabs-panels__item--active');
  });
  panels[index].classList.add('tabs-panels__item--active');
};

const findActivePanel = (index) => {
  return panels[index];
};

window.addEventListener('load', () => {
  const activeItemIndex = findActiveItem();
  findActivePanel(activeItemIndex);
  setActivePanel(activeItemIndex);
});

tabsNav.addEventListener('click', (evt) => {
  if(evt.classList.contains('tabs__item')) {
    const clickedTab = evt.target;
    const activeItemIndex = Array.from(tabNavItems).indexOf(clickedTab);
    setActiveItem(clickedTab);
    findActivePanel(activeItemIndex);
    setActivePanel(activeItemIndex);
  }
});
