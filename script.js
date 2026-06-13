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


const text = [
    "RTL Design",
    "FPGA Acceleration",
    "Hardware Security",
    "VLSI Engineering",
    "Digital Systems",
    "Hardware Accelerators",
    "Verilog Development",
    "AI on FPGA"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

/* ========================= */
/* TYPING EFFECT */
/* ========================= */

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    const typingElement = document.getElementById("typing");

    if(typingElement){
        typingElement.textContent = letter;
    }

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type, 1800);

    }else{

        setTimeout(type, 80);

    }

})();

/* ========================= */
/* NAVBAR ACTIVE LINK */
/* ========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

/* ========================= */
/* FADE-IN ANIMATION */
/* ========================= */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
    ".section, .card, .project-card, .timeline-item, .edu-card"
).forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});

/* ========================= */
/* SCROLL TO TOP ON LOGO */
/* ========================= */

const logo = document.querySelector(".logo");

if(logo){

    logo.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

/* ========================= */
/* CURRENT YEAR FOOTER */
/* ========================= */

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} Gaurav Dhak · Design. Verify. Accelerate.`;

}
