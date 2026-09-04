const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("show");

    });

}


const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

    });

});



const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        formMessage.textContent =
            "Thank you. Your message has been received.";

        contactForm.reset();

    });

}


const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(function (element) {

    element.textContent = new Date().getFullYear();

});