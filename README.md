# Cricket Clicker
Cricket Clicker Wearable app for the Samsung Galaxy Watch 46mm to keep track of bowling loads when training.

## App Demo
[Youtube Demo Video](https://youtu.be/aPzAYped2mI)

## App interface and icon
<img src="Final%20UI.jpg" alt="Cricket Clicker UI" style="width:300px;"/> <img src="Icon%20and%20Name.jpg" alt="Cricket Clicker Icon" style="width:300px;"/>

## How to use it
* Press the top hardware button on the watch to add balls to the over count at the top of the screen.
* Rotate the bezel clockwise to increase the wicket count.
* Rotate the bezel anti-clockwise to increase extra count.
* And press the reset button on the screen to reset all the values back to zero.

## App Features
* Artifical timer after adding to any of the counts to avoid accidentaly adding more than once.
* The ball count automatically adds to the overs and resets the balls once there has been 6 balls bowled.
* Wickets and extras are seperate to the Over/Ball count to allow for more precise tracking.
* Adding to the Over/Ball count via hardware button for efficiency of use and tactile feedback.
* Counts are stored in the app when temporarily closed.

## Trying out the app
Currently the only way to try the app is to:

* Install Tizen Studio
* Clone the repository and open it in Tizen Studio
* Either connect a Physical device using the Device manager tool in Tizen Studio (Ensure the watch is on the same wifi and then create a connection with the watch using Remote Device Manager)
* Or download and install the wearable-5.5-circle-x86 emulator from Samsung and use Emulator Manager to launch it (Requires an Intel CPU)
* Finally right click the project and build it, and then run the project as a Tizen Web Application
