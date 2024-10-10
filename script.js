function toggleTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Optionally, save the user's preference in localStorage
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Check for saved theme preference when the page loads
window.onload = function() {
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

function toggleTheme() {
    var element = document.body;
    var themeIcon = document.getElementById("theme-icon");
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }
}

