/* =========================================================
   MASTER GAMES 2026
   WEBSITE INTERACTIONS
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

  menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

  });


  const mobileLinks =
    mobileMenu.querySelectorAll("a");


  mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");

    });

  });

}



/* =========================================================
   SCHEDULE TABS
========================================================= */

const scheduleTabs =
  document.querySelectorAll(".schedule-tab");

const scheduleDays =
  document.querySelectorAll(".schedule-day");


scheduleTabs.forEach(tab => {

  tab.addEventListener("click", () => {

    const selectedDay =
      tab.getAttribute("data-day");


    /* Active tab */

    scheduleTabs.forEach(item => {

      item.classList.remove("active");

    });

    tab.classList.add("active");


    /* Filter schedule */

    scheduleDays.forEach(day => {

      const dayNumber =
        day.getAttribute("data-day");


      if (
        selectedDay === "all" ||
        selectedDay === dayNumber
      ) {

        day.style.display = "grid";

      } else {

        day.style.display = "none";

      }

    });

  });

});



/* =========================================================
   GOOGLE CALENDAR
========================================================= */

const calendarButton =
  document.getElementById("calendarButton");


if (calendarButton) {

  calendarButton.addEventListener(
    "click",
    () => {

      const title =
        "8th National Masters Games 2026";

      const location =
        "Hegdewar Krida Shankul, Pimpri-Chinchwad, Pune";

      const details =
        "Reporting and Opening Ceremony - 8th National Masters Games 2026";


      const start =
        "20260127T100000";

      const end =
        "20260127T180000";


      const calendarURL =
        "https://calendar.google.com/calendar/render" +
        "?action=TEMPLATE" +
        "&text=" +
        encodeURIComponent(title) +
        "&dates=" +
        start +
        "/" +
        end +
        "&location=" +
        encodeURIComponent(location) +
        "&details=" +
        encodeURIComponent(details);


      window.open(
        calendarURL,
        "_blank"
      );

    }
  );

}



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(
    ".feature-card, .schedule-day, .contact-card, .gallery-item"
  );


const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "show"
          );

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  element.classList.add("reveal");

  revealObserver.observe(element);

});



/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar =
  document.querySelector(".navbar");


window.addEventListener(
  "scroll",
  () => {

    if (!navbar) return;


    if (window.scrollY > 40) {

      navbar.classList.add(
        "navbar-scrolled"
      );

    } else {

      navbar.classList.remove(
        "navbar-scrolled"
      );

    }

  }
);



/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener(
      "click",
      function(event) {

        const targetID =
          this.getAttribute("href");


        if (
          !targetID ||
          targetID === "#"
        ) {

          return;

        }


        const target =
          document.querySelector(
            targetID
          );


        if (!target) {

          return;

        }


        event.preventDefault();


        const navbarHeight =
          navbar
            ? navbar.offsetHeight
            : 0;


        const targetPosition =
          target.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight;


        window.scrollTo({

          top: targetPosition,

          behavior: "smooth"

        });

      }
    );

  });



/* =========================================================
   CURRENT YEAR
========================================================= */

const footerYear =
  document.querySelector(
    ".footer-copy"
  );


if (footerYear) {

  footerYear.innerHTML =
    "© " +
    new Date().getFullYear() +
    " National Masters Games";

}



/* =========================================================
   PAGE LOADED
========================================================= */

document.body.classList.add(
  "page-loaded"
);
