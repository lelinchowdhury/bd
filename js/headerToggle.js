// ======preLoader Splash screen============
function splashLoader() {
  const loader = document.getElementById("splash-screen");

  window.addEventListener("load", () => {
    loader.style.display = "none";
  });
}
splashLoader();

// ===========Navbar Toggle section==========
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close");
const menu = document.getElementById("menu");
const everyLi = document.querySelectorAll("#menu li");

function menuStyle(hamburgerStyle, closeMenuStyle, menuStyle, anchorStyle) {
  hamburger.style.display = hamburgerStyle;
  closeMenu.style.display = closeMenuStyle;
  menu.style.width = menuStyle;
  everyLi.forEach((li) => {
    const aTag = li.children[0];
    aTag.style.display = anchorStyle;
  });
}
function iconToggle() {
  hamburger.addEventListener("click", () => {
    menuStyle("none", "block", "300px", "block");
  });
  closeMenu.addEventListener("click", () => {
    menuStyle("block", "none", "0px", "none");
  });
  menu.addEventListener("click", () => {
    menuStyle("block", "none", "0px", "none");
  });
  everyLi.forEach((li) =>
    li.addEventListener("click", () => {
      menuStyle("block", "none", "0px", "none");
    })
  );
  if (document.defaultView.window.innerWidth > 992) {
    menuStyle("none", "none", "full", "block");
  }
}
iconToggle();