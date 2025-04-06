document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(
    '[data-collapse-toggle="navbar-default"]'
  );
  const navbar = document.getElementById("navbar-default");

  toggleButton.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
  });
});
