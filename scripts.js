let vantaEffect = VANTA.HALO({
  el: "#vanta-bg", 
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00
});

let chaosDirection = 0.05; 
let maxChaos = 5.0; 
let minChaos = 2.0; 

function animateChaos() {
  vantaEffect.options.chaos += chaosDirection;
  if (vantaEffect.options.chaos >= maxChaos || vantaEffect.options.chaos <= minChaos) {
    chaosDirection *= -1;
  }

  requestAnimationFrame(animateChaos); 
}
animateChaos();
