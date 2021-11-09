 var BallCount = 0;
 var OverCount = 0;

 console.log("app started");
 
 window.onload = function() {
	 console.log("onload function running");
     var page = null,
         pageId = "";
     page = document.getElementsByClassName("ui-page-active")[0];
     pageId = page ? page.id : "";
     if (pageId === "loadCounter") {
         var textbox = document.querySelector('.contents');
         textbox = document.querySelector('#textbox');
         textbox.innerHTML = OverCount + "." + BallCount;
     }
 };

 // Event listener for back key
 window.addEventListener("tizenhwkey", function(ev) {
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
             } catch (ignore) {}
         } else {
             window.history.back();
         }
     }
 });

 var bezel = tizen.systeminfo.getCapability('http://tizen.org/feature/input.rotating_bezel');
 console.log("has bezel: " + bezel); // checks if it has a bezel

 var cooldown = false;

 //Event listener for Bezel
 window.addEventListener('rotarydetent', function(ev) {
     // Get the direction value from the event
     var page = null,
         pageId = "";
     page = document.getElementsByClassName("ui-page-active")[0];
     pageId = page ? page.id : "";
     if (pageId === "loadCounter") {
         var direction = ev.detail.direction;
         var textbox = document.querySelector('.contents');
         textbox = document.querySelector('#textbox');
         if (cooldown) {
             return;
         }
         if (direction === 'CW') {
             if (BallCount >= 5) {
                 OverCount++;
                 BallCount = 0;
             } else {
                 BallCount++;
             }
             console.log('clockwise');
             console.log('OverCount . BallCount ' + BallCount + "." + OverCount);
             textbox.innerHTML = OverCount + "." + BallCount;
         } else if (direction === 'CCW') {
             if (BallCount === 0 && OverCount === 0) {} else if (BallCount <= 0) {
                 OverCount--;
                 BallCount = 5;
             } else {
                 BallCount--;
             }
             console.log('anti-clockwise');
             console.log('OverCount . BallCount ' + BallCount + "." + OverCount);
             textbox.innerHTML = OverCount + "." + BallCount;

         }
         cooldown = true;
         setTimeout(function() {
             cooldown = false;
         }, 750);

     }
 });