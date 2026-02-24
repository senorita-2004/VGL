document.getElementById("registerBtn").addEventListener("click", function () {
    document.getElementById("register").scrollIntoView({ behavior: "smooth" });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", function () {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.addEventListener("click", function () {
        item.classList.toggle("active");
    });
});

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

/* Game Click Details */
const gameCards = document.querySelectorAll(".game-card");

gameCards.forEach(card => {
    card.addEventListener("click", function () {

        const gameName = card.querySelector("h3").innerText;

        if (gameName === "VGL X BGMI") {
            alert(
                "BGMI Tournament\n\n" +
                "Mode: Squad (4 Players)\n" +
                "Registration Fee: ₹150 per person\n" +
                "Seats: 250\n" +
                "Dates: 25–27 September\n" +
                "Timing: 9 AM – 7 PM\n" +
                "Last Registration Date: 31st August 2026\n\n" +
                "Elimination format progressing to finals."
            );
        }

        if (gameName === "VGL X VALORANT") {
            alert(
                "Valorant Tournament\n\n" +
                "Mode: Team of 5 Players\n" +
                "Registration Fee: ₹150 per person\n" +
                "Seats: 200\n" +
                "Dates: 25–27 September\n" +
                "Timing: 9 AM – 7 PM\n" +
                "Last Registration Date: 31st August 2026\n\n" +
                "Bracket elimination format leading to grand finals."
            );
        }

    });
});

/* Registration Submit */
document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registration successful! We will contact you soon.");
});