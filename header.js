document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu > li.has-submenu > a");

  menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", function (e) {
      if (window.innerWidth <= 950) {
        e.preventDefault();
        const parentLi = this.parentElement;
        const isOpen = parentLi.classList.contains('active');
        document.querySelectorAll('.menu li').forEach(li => li.classList.remove('active'));
        if (!isOpen) {
          parentLi.classList.add('active');
        }
      }
    });
  });
});


