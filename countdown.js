// script.js

// Set the date we're counting down to
const eventDate = new Date("August 31, 2024 12:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Calculate time remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Change background color dynamically
    document.body.style.backgroundColor = `rgba(${days * 5}, ${hours * 10}, ${seconds * 4}, 1)`;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("message").textContent = "The event has started!";
        document.getElementById("countdown").style.display = "none";
    }
}, 1000);
