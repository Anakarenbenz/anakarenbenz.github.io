let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #f15cbe;'>|</span>"
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ff38ab;">Soy nutrióloga y docente universitaria, principiante en programación web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
