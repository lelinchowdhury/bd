// ======preLoader Splash screen============
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    hideSplashScreen();
  },2000);
});

function hideSplashScreen() {
  const splashScreen = document.getElementById("splash-screen");
  const mainContent = document.getElementById("main-content");

  splashScreen.style.opacity = 0;
  setTimeout(function () {
    splashScreen.style.display = "none";
    mainContent.style.display = "block";
  }, 500);
}

// ======Navbar Toggle Section=========
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

// =========testimonial slider =====

const btn = document.getElementsByClassName("btn");
const slide = document.getElementById("slide");

const testimonialSlider = () => {
  btn[0].onclick = function () {
    slide.style.transform = "translateX(0px)";
    for (i = 0; i < 3; i++) {
      btn[i].classList.remove("active-btn");
    }
    // console.log(this)
    this.classList.add("active-btn");
  };
  btn[1].onclick = function () {
    slide.style.transform = "translateX(-800px)";
    for (i = 0; i < 3; i++) {
      btn[i].classList.remove("active-btn");
    }
    // console.log(this)
    this.classList.add("active-btn");
  };
  btn[2].onclick = function () {
    slide.style.transform = "translateX(-1600px)";

    for (i = 0; i < 3; i++) {
      btn[i].classList.remove("active-btn");
    }
    // console.log(this)
    this.classList.add("active-btn");
  };
};
testimonialSlider();

// ========contact submit form validation =====
const form = document.getElementById("form");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const textAreaCount = document.getElementById("char-count");
const checkbox = document.getElementById("robot");
const submitBtn = document.getElementById("submit-btn");

// ===name validation============
function handleName() {
  const name = document.getElementById("name").value;
  if (name.length === 0) {
    nameError.innerText = "can't be empty";
    return false;
  } else if (!name.match(/^[A-Za-z]+$/)) {
    nameError.innerText = " alphabets only";
    return false;
  } else {
    nameError.innerHTML = '<i class="ri-thumb-up-fill"></i>';
    return true;
  }
}

// ======Email Validation=======
function handleEmail() {
  const email = document.getElementById("email").value;

  if (email.length === 0) {
    emailError.innerText = "can't be empty";
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.innerText = "provide a valid email";
    return false;
  } else {
    emailError.innerHTML = '<i class="ri-thumb-up-fill"></i>';
    return true;
  }
}

// ======subject validation=====
function handleSubject() {
  const subject = document.getElementById("subject").value;
  if (subject.length === 0) {
    subjectError.innerText = "can't be empty";
    return false;
  } else {
    subjectError.innerHTML = '<i class="ri-thumb-up-fill"></i>';
    return true;
  }
}

// =======textarea validation=====
function handleMessage(e) {
  const message = e.target.value;
  // console.log(message);
  textAreaCount.innerText = message.length;
}

// ======checkbox value==========
function handleCheckbox() {
  if (checkbox.checked) {
    return true;
  }
  return false;
}

// ===form validation==========
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !handleName() ||
    !handleEmail() ||
    !handleSubject() ||
    !handleCheckbox()
  ) {
    alert("Fill all the fields to submit");
  } else {
    alert("Thanks for your message");
    e.target.reset();
    nameError.innerText = "";
    emailError.innerText = "";
    subjectError.innerText = "";
  }
});
