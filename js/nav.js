document.addEventListener("mouseup", function (e) {
  const navbar = document.getElementById("navbar");
  if (!navbar.contains(e.target)) {
    closeNav();
  }
});

function openNav() {
  document.getElementById("navbar").classList.add("navbar--show");
}

function closeNav() {
  document.getElementById("navbar").classList.remove("navbar--show");
}
