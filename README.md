React Broken Object Transform
=============================

This is the most minimal example I've been able to come up with to repro
a problem with dynamic property names in object literals when debugging
in Chrome.

To reproduce:

* Clone this repo locally.
* Open ReactBrokenObjectTransform.xcodeproj in Xcode.
* Run the application (the "play" button in the top-left).
* Once the simulator has launched, press Cmd+Ctrl+Z to bring up the Dev
  tools, then click Enable Debugging.
* In the Chrome window that just opened, press Cmd+Option+J to open the
  developer tools.

A "SyntaxError: Unexpected token [" error will appear in the console.
