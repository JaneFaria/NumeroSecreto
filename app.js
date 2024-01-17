alert("Boas vindas ao jogo do numero secreto");
let numeroSecreto = 7;
console.log (numeroSecreto)
let chute = prompt('escolha um numero entre 1 e 10');
console.log (chute)

// se chute for igual ao numero secreto 
if (numeroSecreto == chute ) {
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto}` );

} else {
    alert('voce errou :(')
}
