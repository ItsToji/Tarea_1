window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll(".mainNav nav a");
  const logo = document.querySelector(".mainLogo img");

  if (window.scrollY > 50) {
    header.style.backgroundColor = "white"; 
    navLinks.forEach((link) => {
      link.style.color = "black"; 
    });
    logo.src = "../img/LogoBlack.svg"; 
  } else {
    header.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
    navLinks.forEach((link) => {
      link.style.color = "white"; 
    });
    logo.src = "../img/LogoWhite.svg"; 
  }
});
