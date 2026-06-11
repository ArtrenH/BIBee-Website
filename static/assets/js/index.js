// Countdown
const countDownDate = new Date("May 8, 2026 16:00:00").getTime();
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
        document.getElementById("time").innerHTML = "🐝 The competition has started! 🐝";
    }
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-email").forEach(el => {
    const user = atob(el.dataset.u);
    const domain = atob(el.dataset.d);
    const email = `${user}@${domain}`;

    el.href = `mailto:${email}`;
    el.textContent = email;
  });
});
