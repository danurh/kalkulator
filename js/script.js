const body = document.body;
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const indicator = document.querySelector("#indicator");
const content = document.querySelector("#content");
const btn = document.querySelector("#btn");
let popup = document.querySelector("#toggle");
const calc = document.querySelector("#calculator");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "=") {
      display.value = eval(display.value);
    } else if (btn.id === "ac") {
      display.value = "";
    } else if (btn.id === "del") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += btn.id;
    }
  });
});

popup.onclick = function () {
  popup.classList.toggle("active");
  content.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!popup.contains(e.target) && !indicator.contains(e.target)) {
    popup.classList.remove("active");
    content.classList.remove("active");
  } else {
    popup.classList.add("active");
    content.classList.add("active");
  }
});

indicator.onclick = function () {
  indicator.classList.toggle("active");
  btn.classList.toggle("active");
  body.classList.toggle("active");
  display.classList.toggle("active");
  calc.classList.toggle("active");
};

// box-shadow: 0 0 0.2rem white, 0 0 0.2rem white, 0 0 0.4rem darkblue,
//           0 0 0.2rem darkblue, 0 0 0.8rem darkblue;
