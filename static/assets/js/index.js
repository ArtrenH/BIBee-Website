// Countdown
const countDownDate = new Date("Nov 08, 2024 16:00:00").getTime();
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("time").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("time").innerHTML = "Der Wettbewerb hat begonnen!";
    }
}, 1000);


// form submit
document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('/register', {
            method: 'POST',
            body: formData
        });
        console.log(response);

        const notification = document.getElementById('notification');
        notification.style.display = 'block';
        if (response.ok) {
            notification.textContent = 'Erfolgreich registriert!';
            notification.style.color = 'green';
        } else {
            notification.textContent = 'Etwas ist schief gelaufen. Bitte versuche es erneut oder kontaktiere uns per Mail.';
            notification.style.color = 'red';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});