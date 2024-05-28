AOS.init();

const hoursCount = setInterval(function() {
    const now = new Date();
    const nowTimestamp = now.getTime();

    const eventDate = new Date(`Jun 30, ${now.getFullYear()} 19:00:00`);
    const eventTimestamp = eventDate.getTime();

    const timeUntilEvent = eventTimestamp - nowTimestamp;

    const daysMs = 1000 * 60 * 60 * 24;
    const hoursMs = 1000 * 60 * 60;
    const minutesMs = 1000 * 60;
    const secondsMs = 1000;

    const days = Math.floor(timeUntilEvent / daysMs);
    const hours = Math.floor((timeUntilEvent % daysMs) / hoursMs);
    const minutes = Math.floor((timeUntilEvent % hoursMs) / minutesMs)
    const seconds = Math.floor((timeUntilEvent % minutesMs) / secondsMs);


    document.getElementById('counter').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;


    
}, 1000);

