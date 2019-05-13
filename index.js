(function() {
  'use strict';
  document.addEventListener("DOMContentLoaded", function(event) {
    
    let green = document.querySelector ('#goButton');
    let yellow = document.querySelector ('#slowButton');
    let red = document.querySelector ('#stopButton');

    let greenLight = document.querySelector ('#goLight');
    let yellowLight = document.querySelector ('#slowLight');
    let redLight = document.querySelector ('#stopLight');

    const mouseEnteredGo = () => console.log(`Entered ${green.innerHTML} button`);
    green.addEventListener('mouseenter', mouseEnteredGo)
    const go = () => greenLight.classList.toggle("go");
    green.addEventListener('click', go)

    const mouseEnteredSlow = () => console.log(`Entered ${yellow.innerHTML} button`);
    yellow.addEventListener('mouseenter', mouseEnteredSlow)
    const slow = () => yellowLight.classList.toggle("slow");
    yellow.addEventListener('click', slow);

    const mouseEnteredStop = () => console.log(`Entered ${red.innerHTML} button`);
    red.addEventListener('mouseenter', mouseEnteredStop)
    const stop = () => redLight.classList.toggle("stop");
    red.addEventListener('click', stop);



  }); // DOM CONTENT LOADED
})();
