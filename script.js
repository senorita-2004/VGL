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
    alert("Registration successful! We will contact you soon. Complete the payment in https://vtop.vit.ac.in");
});

// Countdown Timer

const eventDate = new Date("September 25, 2026 09:00:00").getTime();

const timerFunction = setInterval(function () {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {

    clearInterval(timerFunction);

    document.querySelector(".countdown-side").innerHTML =
        "<h2>The Event Has Started!</h2>";

}

}, 1000);
