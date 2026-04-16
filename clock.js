// JavaScript Document

function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const ms = String(now.getMilliseconds()).padStart(3, '0');

    document.getElementById('time').textContent = `${h}:${m}:${s}.${ms}`;
}
// Update every 1ms for maximum perceived smoothness
setInterval(updateClock, 1); 
