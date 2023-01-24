const btnBurger = document.querySelector(".burger-menu");
const btnCloseNav = document.querySelector(".close-nav");
const headerEl = document.querySelector("header");
const allLinks = document.querySelectorAll("header-link");

btnBurger?.addEventListener("click", () => {
  headerEl.classList.toggle("mob-nav-open");
});

btnCloseNav.addEventListener("click", () => {
  if (headerEl.classList.contains("mob-nav-open")) {
    headerEl.classList.remove("mob-nav-open");
  }
});

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    // if (href !== "#" && href.startsWith("#")) {
    //   const sectionEl = document.querySelector(href);
    //   sectionEl.scrollIntoView({ behavior: "smooth" });
    // }

    // Close mobile navigation
    if (link.classList.contains("mob-nav-open"))
      headerEl.classList.toggle("mob-nav-open");
  });
});
