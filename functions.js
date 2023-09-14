let currentCSS = localStorage.getItem("selectedCSS") || "mystyle.css"; // Use stored value or default

// Function to change the CSS and store the choice in Local Storage
function changeCSS() {
    // Get the link element for the CSS file by its id
    const cssLink = document.getElementById("cssLink");

    // Toggle between CSS files
    if (currentCSS === "mystyle.css") {
        cssLink.href = "tronStyle.css";
        currentCSS = "tronStyle.css";
    } else {
        cssLink.href = "mystyle.css";
        currentCSS = "mystyle.css";
    }

    // Store the current CSS choice in Local Storage
    localStorage.setItem("selectedCSS", currentCSS);
}

// Apply the stored CSS choice when the page loads
window.addEventListener("load", () => {
    const cssLink = document.getElementById("cssLink");
    cssLink.href = currentCSS;
});
