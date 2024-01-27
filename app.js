alert("Boas vindas ao jogo do numero secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1

// enquanto o chute não for igual ao n.s.  
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao numero secreto 
    if (chute == numeroSecreto) {
        break;

    } else {
        if (chute > numeroSecreto) {
            alert(`o número secreto é menor que ${chute}`);
        } else {
            alert(`o número secreto é maior que ${chute}`);
            // tentativas = tentativas + 1;
            tentativas++;
        }
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1 ){

//else{
//  alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}

