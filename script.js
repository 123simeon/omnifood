//////////////////////////////////////
//  Open nav menu
const navOpen = document.querySelector(".header");
const btnNavOpen = document.querySelector(".btn-mobile-nav");
const bdy = document.querySelector("body");

btnNavOpen.addEventListener("click", function (e) {
  e.preventDefault();
  navOpen.classList.toggle("nav-open");
  bdy.classList.toggle("noflow");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !navOpen.classList.contains("nav-link")) {
    navOpen.classList.remove("nav-open");
  }
});

///////////////////////////////////////////////
///// Page navigation

document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // my own  work (removing noflow and nav open) because of nav menu open
    bdy.classList.remove("noflow");
    navOpen.classList.remove("nav-open");

    // matching strategy
    if (e.target.classList.contains("main-nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });
    }
  });

//////////////////////////////////////////////////
// Button scrolling

const btnFull = document.querySelector(".btn--full");
const btnOutline = document.querySelector(".btn--outline");
const sectionCta = document.querySelector("#cta");
const sectionHow = document.querySelector("#how");

btnFull.addEventListener("click", function (e) {
  sectionCta.scrollIntoView({ behavior: "smooth" });
});

btnOutline.addEventListener("click", function (e) {
  sectionHow.scrollIntoView({ behavior: "smooth" });
});

////////////////////////////////////////////////
// Sticky navigation

const header = document.querySelector(".header");
const hero = document.querySelector(".section-hero");
const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

heroObserver.observe(hero);
