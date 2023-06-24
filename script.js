const iconMenu = document.getElementById("icon-menu");
const menuMobile = document.getElementById("menu-mobile");

let isActive = false;

const hiddenMenu = () => {
     menuMobile.classList.remove("show");
    menuMobile.classList.add("hidden");
};

iconMenu.addEventListener("click", () => {
  if (menuMobile.classList.contains("hidden")) {
    menuMobile.classList.remove("hidden");
    menuMobile.classList.add("show");
  } else {
    menuMobile.classList.remove("show");
    menuMobile.classList.add("hidden");
  }
});

console.log(isActive);
