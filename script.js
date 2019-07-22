function embaralhar (lista) {
    let valor_temporario;
    let indice_aleatorio;
  
  
    for(let i = lista.length - 1; i !== 0; i--){
        indice_aleatorio = Math.floor(Math.random()* i);
  
        valor_temporario = lista[i];
        lista[i] = lista[indice_aleatorio];
        lista[indice_aleatorio] = valor_temporario;
        
  
    }
    return lista;
  
  }
  function fechar(carta){
  carta.style.backgroundImage = "url('images/capa.png')";
  carta.onclick = processarClique;
  }
  function abrir(carta){
    carta.style.backgroundImage = `url('images/${imagens[Number(carta.id)]}' )`;
    carta.onclick = null;
  }
  
  function travarCliques(){
    for(let carta of cartas){
        carta.onclick = null;
    }
  }
  function destravarCliques(){
    for(let carta of cartas){
        if(!carta.classList.contains("correta")){
          fechar(carta);
        }
    }
  }
  
  function processarClique(event) {
    abrir(event.target);
    if (cartaUm) {
      cartaDois = event.target;
      travarCliques();
      verificarIguais();
    }
    else {
      cartaUm = event.target;
    }
  }
  function verificarIguais(){
    if (cartaUm.style.backgroundImage !== cartaDois.style.backgroundImage) {
      setTimeout(function(){
        fechar(cartaUm);
        fechar(cartaDois);
        iniciarJogada();
      }, 1000);
    }
    else{
      cartaUm.classList.add("correta");
      cartaDois.classList.add("correta");
      iniciarJogada();
    }
  }
  
  function iniciarJogada(){
    cartaUm = null;
    cartaDois = null;
    destravarCliques();
  }
  let cartas = document.querySelectorAll(".carta");
  
  let cartaUm;
  let cartaDois;
  
  let imagensSalvas = [ "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];
  let imagens = imagensSalvas.concat(imagensSalvas);
  
  imagens = embaralhar(imagens);
  for (carta of cartas){
    abrir(carta);
  }
  
  setTimeout(function () {
    iniciarJogada();
  }, 2000);