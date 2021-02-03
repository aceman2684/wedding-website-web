function clickOutsideNavEventListener(e) {
  const navbar = document.getElementById("navbar");
  if (!navbar.contains(e.target)) {
    closeNav();
  }
}

function openNav() {
  document.getElementById("navbar").classList.add("navbar--show");
  document.addEventListener("mouseup", clickOutsideNavEventListener);
}

function closeNav() {
  document.getElementById("navbar").classList.remove("navbar--show");
  document.removeEventListener("mouseup", clickOutsideNavEventListener);
}
