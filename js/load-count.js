/* Still doesnt work for some reason (only likes it when it is in app.js)
var loadCount = 0;
var bezel = tizen.systeminfo.getCapability('http://tizen.org/feature/input.rotating_bezel');
console.log(bezel); // checks if it has a bezel

//Event listener for Bezel
window.addEventListener('rotarydetent', function(ev) {
    // Get the direction value from the event
    var direction = ev.detail.direction;
    var textbox = document.querySelector('.contents');
    textbox = document.querySelector('#textbox');
    if (direction === 'CW') {
        loadCount++;
        console.log('clockwise');
        console.log('loadCount'+loadCount);
        textbox.innerHTML = loadCount;
    } else if (direction === 'CCW') {
        //do nothing in case it was by accident
    }
});
*/