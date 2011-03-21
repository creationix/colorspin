window.addEventListener('load', function () {
  var body = document.querySelector('body');
  function setHue(hue) {
    body.style.backgroundColor="hsl(" + hue + ",100%,50%)";
  }
  
  if (typeof PalmSystem !== 'undefined') {
    // on real device
    PalmSystem.stageReady();
    PalmSystem.enableFullScreenMode(true);
    window.addEventListener('acceleration', function (evt) {
      var hue = (evt.accelX * -180 + 900) % 360;
      setHue(hue);
      console.log(("X: " + evt.accelX + "; Y:" + evt.accelY + "; Z:" + evt.accelZ + "; time: " + evt.time));
    }, true);
  } else {
    // Running in desktop browser
    setInterval(function () {
      setHue(Math.random() * 360);
    }, 500);
  }
  
});

