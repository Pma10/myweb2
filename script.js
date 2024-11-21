document.addEventListener("DOMContentLoaded", () => {
    // Original typing text code
    const text = "Hello World.";
    const typingTextElement = document.getElementById("typing-text");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingTextElement.textContent += text[index];
            index++;
            setTimeout(typeText, 150);
        }
    }

    typeText();
});

let currentSection = "main";
let scrollIcon = document.getElementById("scroll-indicator");

document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0 && currentSection === "main") {
        document.querySelector(".about-frame").scrollIntoView({
            behavior: "smooth"
        });
        currentSection = "about"; 
        scrollIcon.style.display = "none";
    } else if (event.deltaY < 0 && currentSection === "about") {
        document.querySelector(".main-frame").scrollIntoView({
            behavior: "smooth"
        });
        currentSection = "main";
        scrollIcon.style.display = "block";
    }
});

document.getElementById("scroll-indicator").addEventListener("click", () => {
    document.querySelector(".about-frame").scrollIntoView({
        behavior: "smooth"
    });
});
