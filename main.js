var pedra = document.getElementById("pedra");
var papel = document.getElementById("papel");
var tesoura = document.getElementById("tesoura");


var pontuacaojogador = document.getElementById("score_a");
var pontuacaopc = document.getElementById("score_b");

var jogador = 0;
var computer = 0;
var ingame = 0;
var choice;
var computerchoice;

function randomchoice() {
    var randomchoice = Math.floor(Math.random() * 3) + 1;
    computerchoice = randomchoice;

}

function pickoption(o){
    if(choice == undefined){
        choice = o

        if(o == 1){
            pedra.classList = "player";
        }else if(o == 2){
            papel.classList = "player";
        }else{
            tesoura.classList = "player";
        }

        if(computerchoice == undefined){
           randomchoice();
           
           if(computerchoice == 1){
            pedra.classList = "computer";
           }else if(computerchoice == 2){
            papel.classList = "computer";
           }else{
            tesoura.classList = "computer"; 
           }
        }

        getWin(choice, computerchoice);
    } else{
        alert("Voce ja jogou")
    }
    ingame = 0;
}

function getWin(p,c){
    if(ingame == 1){
        if(p==1 && c ==2){
            computer++;
        }else if(p==1 && c == 3){
            jogador++;
        }else if(p == 2 && c == 1){
            jogador++;
        }else if(p == 2 && c == 3){
            computer++;
        }else if(p == 3 && c == 1){
            computer++;
        }else if(p == 3 && c == 2){
            jogador++;
        }

        pontuacaojogador.innerHTML = jogador;
        pontuacaopc.innerHTML = computer;

        
    }
}

function novojogo() {
    if(ingame == 0 ){
        ingame = 1;
        choice = undefined;
        computerchoice = undefined;

        pedra.classList = "";
        papel.classList = "";
        tesoura.classList = "";

        pontuacaojogador.innerHTML = jogador;
        pontuacaopc.innerHTML = computer;
    }
}
