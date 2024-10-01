let campoIdade;
let campoFantasia;
let campoAvecampoFantasiantura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Sombra e Ossos";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Coraline e o mundo secreto";          
        } else{
         return "A Noiva Cadáver"
        }
      } else {
        if (gostaDeFantasia) {
          return "A Casa Monstro";
        } else {
          return "O estranho mundo de Jack";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Shrek";
    } else {
      return "A era do gelo";
    }
  }
}



