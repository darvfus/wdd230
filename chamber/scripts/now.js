document.addEventListener("DOMContentLoaded", function() {
    // Get today's date
    var today = new Date();
    var todayFormatted = formatDate(today);

    // Check if localStorage contains a visit date
    if(localStorage.getItem("lastVisit")) {
        // Get the last visit date from localStorage
        var lastVisit = new Date(localStorage.getItem("lastVisit"));

        // Calculate the difference in time between visits
        var timeDifference = today.getTime() - lastVisit.getTime();
        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // Display different messages based on the time difference
        if(daysDifference === 0) {
            document.getElementById("message").textContent = "Back so soon! Awesome! Today is " + todayFormatted + ".";
        } else if(daysDifference === 1) {
            document.getElementById("message").textContent = "You last visited 1 day ago. Today is " + todayFormatted + ".";
        } else {
            document.getElementById("message").textContent = "You last visited " + daysDifference + " days ago. Today is " + todayFormatted + ".";
        }
    } else {
        // If this is the first visit, display a welcome message
        document.getElementById("message").textContent = "Welcome! Let us know if you have any questions. Today is " + todayFormatted + ".";
    }

    // Store the current visit date in localStorage
    localStorage.setItem("lastVisit", today);
});

// Function to format the date as "YYYY-MM-DD"
function formatDate(date) {
    var year = date.getFullYear();
    var month = padZero(date.getMonth() + 1);
    var day = padZero(date.getDate());
    return year + "-" + month + "-" + day;
}

// Function to add leading zero to single-digit numbers
function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}
