// Scroll to registration section
document.getElementById("registerBtn").addEventListener("click", function () {
    document.getElementById("register").scrollIntoView({ behavior: "smooth" });
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", function () {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
});

// FAQ toggle
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.addEventListener("click", function () {
        item.classList.toggle("active");
    });
});

// Reveal on scroll
window.addEventListener("scroll", function () {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            reveal.classList.add("active");
        }
    });
});

// Game card toggle info
const gameCards = document.querySelectorAll(".game-card");

gameCards.forEach(card => {
    card.addEventListener("click", function () {
        const info = card.querySelector(".game-info");
        if (info.style.display === "block") {
            info.style.display = "none";
        } else {
            info.style.display = "block";
        }
    });
});

// Registration form submit
document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registration successful! We will contact you soon.");
});
