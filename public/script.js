function toggleMenu() {
  const menu = document.querySelector("#menu");
  const closeBtn = document.querySelector(".close-btn");
  menu.classList.toggle("hide");
  if (closeBtn.innerHTML === "⇦") {
    closeBtn.innerHTML = "&#8680;";
  } else {
    closeBtn.innerHTML = "&#8678;";
  }
}
