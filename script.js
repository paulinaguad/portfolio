var d = new Date();
document.getElementById("date").innerHTML = d;

var formattedDate = d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
});

document.getElementById("date").innerHTML = formattedDate;