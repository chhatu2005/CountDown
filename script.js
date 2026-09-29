
const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const message = document.getElementById("message")

// Set target date
const targetDate = new Date("October 02, 2026 23:59:59").getTime()

// Countdown function
const countdown = () => {

    // Get current time
    const now = new Date().getTime()

    // Calculate remaining time
    const difference = targetDate - now

    // Check if countdown is completed
    if (difference <= 0) {

        clearInterval(timer);

        days.innerText = "00"
        hours.innerText = "00"
        minutes.innerText = "00"
        seconds.innerText = "00"

        message.innerText = "Countdown Completed!";

        return
    }

    // Calculate days
    const d = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    )

    // Calculate hours
    const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    )

    // Calculate minutes
    const m = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    )

    // Calculate seconds
    const s = Math.floor(
        (difference % (1000 * 60)) / 1000
    )

    // Display countdown with leading zeros
    days.innerText = String(d).padStart(2, "0")
    hours.innerText = String(h).padStart(2, "0")
    minutes.innerText = String(m).padStart(2, "0")
    seconds.innerText = String(s).padStart(2, "0")

}

countdown()

// Update every second
const timer = setInterval(countdown, 1000)