const timerElement = document.getElementById('timer');

function startTimer(duration) {
    let timer = duration, days, hours, minutes, seconds;

    const interval = setInterval(() => {
        days = Math.floor(timer / (24 * 3600));
        timer %= (24 * 3600);
        hours = Math.floor(timer / 3600);
        timer %= 3600;
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        timerElement.innerHTML = `
            <div class="timer-unit">
                <span class="unit-label">Days</span>
                <span class="unit-value">${days}</span>
            </div>
            <span class="timer-separator">:</span>
            <div class="timer-unit">
                <span class="unit-label">Hours</span>
                <span class="unit-value">${hours}</span>
            </div>
            <span class="timer-separator">:</span>
            <div class="timer-unit">
                <span class="unit-label">Minutes</span>
                <span class="unit-value">${minutes}</span>
            </div>
            <span class="timer-separator">:</span>
            <div class="timer-unit">
                <span class="unit-label">Seconds</span>
                <span class="unit-value">${seconds}</span>
            </div>
        `;

        if (--timer < 0) {
            clearInterval(interval);
            timerElement.innerHTML = "Sale Ended!";
        }
    }, 1000);
}

// Set the duration in seconds (3 days, 23 hours, 19 minutes, 56 seconds)
const duration = 3 * 24 * 3600 + 23 * 3600 + 19 * 60 + 56;
startTimer(duration);
