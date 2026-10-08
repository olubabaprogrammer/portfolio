// ========================================
// PORTFOLIO WEBSITE JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------
    // MOBILE MENU
    // -----------------------------

    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Only run the menu code if both elements exist
    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        // Close menu when a navigation link is clicked
        const links = navLinks.querySelectorAll("a");

        links.forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }


    // -----------------------------
    // SMOOTH SCROLLING
    // -----------------------------

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            // Ignore empty "#"
            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    // -----------------------------
    // ACTIVE NAVIGATION LINK
    // -----------------------------

    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );

    if (sections.length && navigationLinks.length) {

        const updateActiveLink = () => {

            let currentSection = "";

            sections.forEach((section) => {

                const sectionTop = section.offsetTop;
                const scrollPosition = window.scrollY;

                if (scrollPosition >= sectionTop - 150) {
                    currentSection = section.getAttribute("id");
                }

            });

            navigationLinks.forEach((link) => {

                link.classList.remove("active");

                const href = link.getAttribute("href");

                if (href === `#${currentSection}`) {
                    link.classList.add("active");
                }

            });

        };

        window.addEventListener("scroll", updateActiveLink);

        updateActiveLink();
    }


    // -----------------------------
    // SCROLL REVEAL
    // -----------------------------

    const revealElements = document.querySelectorAll(
        ".reveal, .fade-in, .animate"
    );

    if (revealElements.length) {

        const revealObserver = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        revealObserver.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    }


    // -----------------------------
    // CURRENT YEAR
    // -----------------------------

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach((element) => {
        element.textContent = new Date().getFullYear();
    });


    // -----------------------------
    // CONSOLE MESSAGE
    // -----------------------------

    console.log("Portfolio website loaded successfully.");

});