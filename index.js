// script.js
document.addEventListener('DOMContentLoaded', () => {
    const daysElem = document.getElementById('days');
    const hoursElem = document.getElementById('hours');
    const minutesElem = document.getElementById('minutes');
    const secondsElem = document.getElementById('seconds');
    const eventDateInput = document.getElementById('event-date');

    let targetDate = new Date(eventDateInput.value);

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            daysElem.textContent = '00';
            hoursElem.textContent = '00';
            minutesElem.textContent = '00';
            secondsElem.textContent = '00';
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        daysElem.textContent = days.toString().padStart(2, '0');
        hoursElem.textContent = hours.toString().padStart(2, '0');
        minutesElem.textContent = minutes.toString().padStart(2, '0');
        secondsElem.textContent = seconds.toString().padStart(2, '0');
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);

    // Set initial countdown if a date is selected
    eventDateInput.addEventListener('change', () => {
        targetDate = new Date(eventDateInput.value);
        updateCountdown(); // Update immediately after date change
    });
});
