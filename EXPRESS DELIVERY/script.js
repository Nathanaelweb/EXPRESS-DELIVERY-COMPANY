function trackPackage() {
    let trackingID = document.getElementById("trackingID").value;
    if (trackingID) {
        window.location.href = `track.html?code=${trackingID}`;
    } else {
        alert("Please enter a tracking code!");
    }
}
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Registration successful!");
        window.location.href = "index.html"; // Redirect to index.html
    }
});
// Make the translator widget draggable
var translator = document.getElementById("google_translate_element");
var isDragging = false;
var offsetX, offsetY;

translator.addEventListener("mousedown", function (e) {
    isDragging = true;
    offsetX = e.clientX - translator.offsetLeft;
    offsetY = e.clientY - translator.offsetTop;
    translator.style.cursor = "grabbing"; // Change cursor
});

document.addEventListener("mousemove", function (e) {
    if (isDragging) {
        translator.style.left = (e.clientX - offsetX) + "px";
        translator.style.top = (e.clientY - offsetY) + "px";
    }
});

document.addEventListener("mouseup", function () {
    isDragging = false;
    translator.style.cursor = "grab"; // Reset cursor
});
