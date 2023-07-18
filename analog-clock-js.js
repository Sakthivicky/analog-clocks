const seconds = document.getElementById('second');
const minutes = document.getElementById('minute');
const hours = document.getElementById('hour')



function time() {

    const now = new Date();
    const get_seconds = now.getSeconds();
    const get_minutes = now.getMinutes();
    const get_hours = now.getHours();
    const timeinterval = 6;



    seconds.style.transform = 'rotate(' + (get_seconds * timeinterval) + 'deg)';
    minutes.style.transform = 'rotate(' + (get_minutes * timeinterval + get_seconds / 10) + 'deg)';
    hours.style.transform = 'rotate(' + (get_hours * 30 + get_minutes / 2) + 'deg)';
}


setInterval(time, 100);