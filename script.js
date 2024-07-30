document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".typing-animation");
  const textArray = [
    "Web Developer",
    "Staff Software Engineer",
    "Frontend Architect",
    "9+ years of experience",
    "UI Performance",
  ];
  let arrayIndex = 0;
  let index = 0;

  function typeText() {
    if (index < textArray[arrayIndex].length) {
      textElement.textContent += textArray[arrayIndex].charAt(index);
      index++;
      setTimeout(typeText, 120); // Adjust typing speed here
    } else if (arrayIndex < textArray.length - 1) {
      textElement.textContent = "";
      arrayIndex++;
      index = 0;
      setTimeout(typeText, 500);
    } else {
      arrayIndex = 0;
      index = 0;
      textElement.textContent = "";
      setTimeout(typeText, 500);
    }
  }

  typeText();
  document
    .getElementById("scrollTo")
    .addEventListener("click", () =>
      document
        .getElementById("employment-history")
        .scrollIntoView({ behavior: "smooth" })
    );
});
