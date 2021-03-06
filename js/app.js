///*global tau */
var BallCount = 0,
    OverCount = 0,
    WicketCount = 0,
    ExtraCount = 0;
console.log("app started");

var bezel = tizen.systeminfo.getCapability('http://tizen.org/feature/input.rotating_bezel');
console.log("has bezel: " + bezel); // checks if it has a bezel

var cooldown = false;

var textboxw = document.querySelector('.contents');
textboxw = document.querySelector('#wicket');
var textboxe = document.querySelector('.contents');
textboxe = document.querySelector('#extra');
var textbox = document.querySelector('.contents');
textbox = document.querySelector('#ballover');

// Event listener for back key
window.addEventListener("tizenhwkey", function(ev) {
    var activePopup = null,
        page = null,
        pageId = "";
    if (ev.keyName === "back") {
    	if (cooldown) {
            return;
        }
        activePopup = document.querySelector(".ui-popup-active");
        page = document.getElementsByClassName("ui-page-active")[0];
        pageId = page ? page.id : "";
        if (pageId === "main" && !activePopup) {
            if (BallCount >= 5) {
                OverCount++;
                BallCount = 0;
            } else {
                BallCount++;
            }
            console.log('OverCount . BallCount ' + OverCount + "." + BallCount);
            textbox.innerHTML = OverCount + "." + BallCount;
        }
        cooldown = true;
        setTimeout(function() {
            cooldown = false;
        }, 750);
    }
});

//Event listener for Bezel
window.addEventListener('rotarydetent', function(ev) {
    // Get the direction value from the event
    var page = null,
        pageId = "";
    page = document.getElementsByClassName("ui-page-active")[0];
    pageId = page ? page.id : "";
    if (pageId === "main") {
        var direction = ev.detail.direction;
        if (cooldown) {
            return;
        }
        if (direction === 'CW') {
            WicketCount++;
            console.log('clockwise');
            console.log('WicketCount' + WicketCount);
            textboxw.innerHTML = WicketCount;
        } else if (direction === 'CCW') {
            ExtraCount++;
            console.log('anti-clockwise');
            console.log('ExtraCount' + ExtraCount);
            textboxe.innerHTML = ExtraCount;
        }
        cooldown = true;
        setTimeout(function() {
            cooldown = false;
        }, 750);

    }
});

function resetStats() {
	console.log("reset stats");
    BallCount = 0;
    OverCount = 0;
    WicketCount = 0;
    ExtraCount = 0;
    textbox.innerHTML = OverCount + "." + BallCount;
    textboxw.innerHTML = WicketCount;
    textboxe.innerHTML = ExtraCount;
}