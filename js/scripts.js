// Purpose: JavaScript functions for navigation and dynamic content


// Navigate between pages using JavaScript
function navigate(page) {
    if (page === "home") {
        window.location.href = "index.html";
    } else if (page === "televisions") {
        window.location.href = "televisions.html";
    } else if (page === "about") {
        window.location.href = "about.html";
    }
}

// Logo click returns to home page
function goHome() {
    window.location.href = "index.html";
}

// Highlight current page and set footer year
document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;

    if (path.includes("televisions")) {
        document.getElementById("nav-tv")?.classList.add("active");
    } else if (path.includes("about")) {
        document.getElementById("nav-about")?.classList.add("active");
    } else {
        document.getElementById("nav-home")?.classList.add("active");
    }

    // Set current year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
