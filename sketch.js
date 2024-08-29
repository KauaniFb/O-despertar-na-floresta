let musica;

function preload(){
  musica = loadSound('Música.mp3');
}

function setup() {
  musica.play();
  musica.loop();
}

const avança = document.querySelectorAll(".proximo");
avança.forEach(button => {
button.addEventListener('click', function(){
const atual = document.querySelector('.ativo');
const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
atual.classList.remove('ativo');
document.getElementById(proximoPasso).classList.add('ativo');
})
})

console.log("Em uma floresta envolta em sombras e mistérios, Alice desperta sem saber como chegou ali. Uma mensagem enigmática em seu celular anuncia o início de uma jornada mortal, onde cada escolha carrega consequências irreversíveis. A floresta esconde segredos antigos, forças sinistras, e portais que podem levar à redenção ou à perdição eterna. Em meio a horrores e tentações, Alice deve enfrentar seus medos mais profundos, e decidir entre a salvação e a escuridão. Mas em um lugar onde o tempo e a realidade são maleáveis, o caminho para a liberdade pode ser o mais perigoso de todos. Prepare-se para uma aventura aterrorizante, onde cada decisão é uma aposta de vida ou morte, e a linha entre sonho e pesadelo se dissolve na névoa da floresta sombria.")