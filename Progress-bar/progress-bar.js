const buttons = document.querySelectorAll("button");
const rings = document.querySelectorAll(".ring");
const progressBar = document.querySelector(".indicator");

let latestStep = 1;

const updateSteps = (event) => {
  latestStep = event.target.id === "next" ? ++latestStep : --latestStep;

  rings.forEach((ring, index) => {
    ring.classList[`${index < latestStep ? "add" : "remove"}`]("active");
  });

  progressBar.style.width = `${((latestStep - 1) / (rings.length - 1)) * 100}%`;

  if (latestStep === rings.length) {
    buttons[1].disabled = true;
  } else if (latestStep === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((button) => (button.disabled = false));
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", updateSteps);
});
