var loadCount = 0;

(function () {
	// Event listener for back key
	window.addEventListener("tizenhwkey", function (ev) {
		var activePopup = null,
			page = null,
			pageId = "";
		
		if (ev.keyName === "back") {
			activePopup = document.querySelector(".ui-popup-active");
			page = document.getElementsByClassName("ui-page-active")[0];
			pageId = page ? page.id : "";

			if (pageId === "main" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});
	// Bezel Code ---------------------
	// Following tutorial from
	// https://developer.samsung.com/sdp/blog/en-us/2019/10/08/use-tizen-to-enable-galaxy-watch-rotary-events
	// Checking bezel capabilities
	var bezel = tizen.systeminfo.getCapability('http://tizen.org/feature/input.rotating_bezel');
    console.log(bezel);
    // Event listener for Bezel
    window.addEventListener('rotarydetent', function(ev) {
        /* Get the direction value from the event */
        var direction = ev.detail.direction;
        var textbox = document.querySelector('.contents');
        textbox = document.querySelector('#textbox');
        
        if (direction === 'CW') {
            /* Add behavior for clockwise rotation */
        	loadCount++;
            console.log('clockwise');
            console.log('loadCount'+loadCount);
            textbox.innerHTML = loadCount;
        } else if (direction === 'CCW') {
            //do nothing in case it was by accident
        }
    });
}());

window.addEventListener("load", function(){
	console.log('loaded');
	var textbox = document.querySelector('.contents');
    textbox = document.querySelector('#textbox');
    textbox.innerHTML = loadCount;
});