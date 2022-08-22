const round = document.getElementById('enviar')
const pedra = document.getElementById('opçãoPedra');
const papel = document.getElementById('opçãoPapel');
const tesoura = document.getElementById('opçãoTesoura');
const valorcomputador = document.querySelector('.pontuacao > #pontosComputador')
const valorusuario = document.querySelector('.pontuacao > #pontosUsuario')

let playerWin = 0
let machineWin = 0
let empate = 0



function game(escolhaJogador, escolhacomputador) {
    escolhacomputador = parseInt(Math.random() * 3 + 1);
    if (escolhaJogador == "opçãoPedra") {
        escolhaJogador = 1;
    } else if (escolhaJogador == "opçãoPapel") {
        escolhaJogador = 2;
    } else if (escolhaJogador == "opçãoTesoura") {
        escolhaJogador = 3;
    };

    if (escolhaJogador == 1 && escolhacomputador == 3) {
        playerWin = playerWin + 1;
        document.querySelector('.resultado > p').innerText = 'Você ganhou! O PC escolheu pedra.';
    } else if (escolhaJogador == 1 && escolhacomputador == 2) {
        machineWin = machineWin + 1;
        document.querySelector('.resultado > p').innerText = 'Você perdeu! O PC escolheu papel.';
    } else if (escolhaJogador == 1 && escolhacomputador == 1) {
        empate++;
        document.querySelector('.resultado > p').innerText = 'Empatou! Os dois escolheram pedra.';
    }

    if (escolhaJogador == 2 && escolhacomputador == 1) {
        playerWin = playerWin + 1;
        document.querySelector('.resultado > p').innerText = 'Você ganhou! O PC escolheu pedra.';
    } else if (escolhaJogador == 2 && escolhacomputador == 3) {
        machineWin = machineWin + 1;
        document.querySelector('.resultado > p').innerText = 'Você perdeu! O PC escolheu tesoura.';
    } else if (escolhaJogador == 2 && escolhacomputador == 2) {
        empate++;
        document.querySelector('.resultado > p').innerText = 'Empatou! Os dois escolheram papel.';

    }

    if (escolhaJogador == 3 && escolhacomputador == 2) {
        playerWin = playerWin + 1;
        document.querySelector('.resultado > p').innerText = 'Você ganhou! O PC escolheu papel.';
    } else if (escolhaJogador == 3 && escolhacomputador == 1) {
        machineWin = machineWin + 1;
        document.querySelector('.resultado > p').innerText = 'Você perdeu! O PC escolheu pedra';
    } else if (escolhaJogador == 3 && escolhacomputador == 3) {
        empate++;
        document.querySelector('.resultado > p').innerText = 'Empatou! Os dois escolheram tesoura.';

    }

     valorcomputador.innerText = machineWin;
     valorusuario.innerText = playerWin;
   
}
game()

function main (){
    pedra.addEventListener('click',function() {
        game("opçãoPedra");
    })

    papel.addEventListener('click',function() {
        game("opçãoPapel")
    })

    tesoura.addEventListener('click',function() {
        game("opçãoTesoura")
    })
}

main();

function limpar(){
    document.location.reload(true);
}

