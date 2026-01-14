// main.js

// 1. Loading Screen Timeout
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000); // 1 second gear animation
});

// 2. Contact Form Validation (for contact.html)
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
        return false;
    }
    alert("Thank you, Furqan Khatti will get back to you soon!");
    return true;
}
