document.getElementById("aboutButton").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("skillsButton").addEventListener("click", function () {
  document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});

document
  .getElementById("projectsButton")
  .addEventListener("click", function () {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });

document.getElementById("hiremeButton").addEventListener("click", function () {
  document.getElementById("hireme").scrollIntoView({ behavior: "smooth" });
});

// Get the h3 element you want to click to open the popup
const autocore = document.getElementById("autocore");
const hiveConnect = document.getElementById("hiveConnect");
const tictactoe = document.getElementById("tictactoe");

// Get the popup container and close button
const popupAutocore = document.getElementById("popup-autocore");
const popupHiveConnect = document.getElementById("popup-hiveConnect");
const popupTictactoe = document.getElementById("popup-tictactoe");
const closePopupautocore = document.getElementById("closePopup-autocore");
const closePopupHiveConnect = document.getElementById("closePopup-hiveConnect");
const closePopupTictactoe = document.getElementById("closePopup-tictactoe");

// Add a click event listener to the h3 element
autocore.addEventListener("click", () => {
  // Show the popup
  popupAutocore.style.display = "block";
});

hiveConnect.addEventListener("click", () => {
  // Show the popup
  popupHiveConnect.style.display = "block";
});

tictactoe.addEventListener("click", () => {
  // Show the popup
  popupTictactoe.style.display = "block";
});

// Add a click event listener to the close button
closePopupautocore.addEventListener("click", () => {
  // Hide the popup
  popupAutocore.style.display = "none";
});

// Add a click event listener to the close button
closePopupHiveConnect.addEventListener("click", () => {
  // Hide the popup
  popupHiveConnect.style.display = "none";
});

// Add a click event listener to the close button
closePopupTictactoe.addEventListener("click", () => {
  // Hide the popup
  popupTictactoe.style.display = "none";
});
