const sortButton = document.querySelector('.gallery__sort-button');

if (sortButton) {
  const sortList = document.querySelector('.gallery__sort-list');
  const toggleList = function () {
    sortList.classList.toggle('gallery__sort-list--active');
  }

  sortButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleList();
  });

  document.addEventListener('click', (e) => {
    const target = e.target;
    const itsList = target == sortList || sortList.contains(target);
    const listButton = target == sortButton;
    const activeList = sortList.classList.contains('gallery__sort-list--active');

    console.log(target);

    if (!itsList && !listButton && activeList) {
      toggleList();
    }
  });
}
