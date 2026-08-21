/* ======================================
   LensBook - script.js
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Mobile Menu Toggle
    // ==========================
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // ==========================
    // Close Menu on Link Click
    // ==========================
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // ==========================
    // Sticky Navbar Shadow
    // ==========================
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
        } else {
            header.style.boxShadow = "none";
        }

    });

    // ==========================
    // Scroll Animation
    // ==========================
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("fade");
            }

        });

    }, {
        threshold: 0.2
    });

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });

    // ==========================
    // Booking Form Validation
    // ==========================
    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const inputs = form.querySelectorAll("input, select, textarea");

            let valid = true;

            inputs.forEach(input => {

                if (input.value.trim() === "") {

                    input.style.border = "2px solid red";
                    valid = false;

                } else {

                    input.style.border = "2px solid #d4af37";

                }

            });

            if (valid) {

                alert("Booking Submitted Successfully!");

                form.reset();

            } else {

                alert("Please fill all fields.");

            }

        });

    }

    // ==========================
    // Back To Top Button
    // ==========================
    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.id = "topBtn";

    document.body.appendChild(topBtn);

    topBtn.style.position = "fixed";
    topBtn.style.bottom = "25px";
    topBtn.style.right = "25px";
    topBtn.style.width = "50px";
    topBtn.style.height = "50px";
    topBtn.style.border = "none";
    topBtn.style.borderRadius = "50%";
    topBtn.style.background = "#d4af37";
    topBtn.style.color = "#111";
    topBtn.style.fontSize = "22px";
    topBtn.style.cursor = "pointer";
    topBtn.style.display = "none";
    topBtn.style.zIndex = "999";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    // ==========================
    // Gallery Image Click
    // ==========================
    const images = document.querySelectorAll(".gallery-grid img");

    images.forEach(img => {

        img.addEventListener("click", () => {

            window.open(img.src);

        });

    });

    // ==========================
    // Counter Animation
    // ==========================
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");

            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

    // ==========================
    // Hero Button Animation
    // ==========================
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "scale(1.05)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "scale(1)";

        });

    });

});