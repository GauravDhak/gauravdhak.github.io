// const text = [
// "RTL Design",
// "FPGA Acceleration",
// "Hardware Security",
// "VLSI Engineering",
// "Digital Systems"
// ];

// let count = 0;
// let index = 0;
// let currentText = "";
// let letter = "";

// (function type() {

// if(count === text.length){
// count = 0;
// }

// currentText = text[count];
// letter = currentText.slice(0, ++index);

// document.getElementById("typing").textContent = letter;

// if(letter.length === currentText.length){

// count++;
// index = 0;

// setTimeout(type, 1500);

// }else{

// setTimeout(type, 80);

// }

// })();


// const text = [
//     "RTL Design",
//     "FPGA Acceleration",
//     "Hardware Security",
//     "VLSI Engineering",
//     "Digital Systems",
//     "Hardware Accelerators",
//     "Verilog Development",
//     "AI on FPGA"
// ];

// let count = 0;
// let index = 0;
// let currentText = "";
// let letter = "";

// /* ========================= */
// /* TYPING EFFECT */
// /* ========================= */

// (function type(){

//     if(count === text.length){
//         count = 0;
//     }

//     currentText = text[count];
//     letter = currentText.slice(0, ++index);

//     const typingElement = document.getElementById("typing");

//     if(typingElement){
//         typingElement.textContent = letter;
//     }

//     if(letter.length === currentText.length){

//         count++;
//         index = 0;

//         setTimeout(type, 1800);

//     }else{

//         setTimeout(type, 80);

//     }

// })();

// /* ========================= */
// /* NAVBAR ACTIVE LINK */
// /* ========================= */

// const sections = document.querySelectorAll("section[id]");
// const navLinks = document.querySelectorAll(".nav-links a");

// window.addEventListener("scroll", () => {

//     let current = "";

//     sections.forEach(section => {

//         const sectionTop = section.offsetTop - 150;
//         const sectionHeight = section.clientHeight;

//         if(window.scrollY >= sectionTop){
//             current = section.getAttribute("id");
//         }

//     });

//     navLinks.forEach(link => {

//         link.classList.remove("active");

//         if(link.getAttribute("href") === "#" + current){
//             link.classList.add("active");
//         }

//     });

// });

// /* ========================= */
// /* FADE-IN ANIMATION */
// /* ========================= */

// const observer = new IntersectionObserver(entries => {

//     entries.forEach(entry => {

//         if(entry.isIntersecting){
//             entry.target.classList.add("show");
//         }

//     });

// },{
//     threshold:0.15
// });

// document.querySelectorAll(
//     ".section, .card, .project-card, .timeline-item, .edu-card"
// ).forEach(el => {

//     el.classList.add("hidden");
//     observer.observe(el);

// });

// /* ========================= */
// /* SCROLL TO TOP ON LOGO */
// /* ========================= */

// const logo = document.querySelector(".logo");

// if(logo){

//     logo.addEventListener("click", () => {

//         window.scrollTo({
//             top:0,
//             behavior:"smooth"
//         });

//     });

// }

// /* ========================= */
// /* CURRENT YEAR FOOTER */
// /* ========================= */

// const footer = document.querySelector("footer p");

// if(footer){

//     footer.innerHTML =
//     `© ${new Date().getFullYear()} Gaurav Dhak · Design. Verify. Accelerate.`;

// }
/* =======================================
   GAURAV DHAK PORTFOLIO
   script.js
======================================= */

/* =======================================
   TYPING EFFECT
======================================= */

const text = [
    "RTL Design",
    "FPGA Acceleration",
    "Hardware Security",
    "VLSI Engineering",
    "Digital Systems",
    "Hardware Accelerators",
    "Verilog Development"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 80);

    }

})();

/* =======================================
   SCROLL REVEAL ANIMATION
======================================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".section, .card, .project-card, .timeline-item, .edu-card"
).forEach((el) => {

    el.classList.add("hidden");
    observer.observe(el);

});

/* =======================================
   ACTIVE NAVIGATION LINK
======================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

/* =======================================
   NAVBAR SHADOW ON SCROLL
======================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

/* =======================================
   PARALLAX HERO EFFECT
======================================= */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    if (hero) {

        hero.style.backgroundPositionY =
            scroll * 0.4 + "px";

    }

});

/* =======================================
   PROJECT CARD HOVER GLOW
======================================= */

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(0,212,255,0.12),
            #111827 40%
        )`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#111827";

    });

});

/* =======================================
   SMOOTH SCROLL OFFSET
======================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
        });

    });

});

/* =======================================
   CONSOLE MESSAGE
======================================= */

console.log(`
========================================
GAURAV DHAK
RTL • FPGA • VLSI

Design. Verify. Accelerate.
========================================
`);
