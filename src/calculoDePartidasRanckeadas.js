let vitorias = 75
let derrotas = 12
let elo

function eloDoHeroi(vitoriaFuncao, derrotaFuncao){
    let saldoDeVitorias = vitoriaFuncao - derrotaFuncao
    let nivel 
    if (saldoDeVitorias < 10){
        nivel = "Ferro"
    } else if(saldoDeVitorias <= 20){
        nivel = "bronze"
    }else if(saldoDeVitorias <= 50){
        nivel = "prata"

    } else if(saldoDeVitorias <= 80){
        nivel = "ouro"
    }else if(saldoDeVitorias <= 90){
        nivel = "diamante"
    }else if (saldoDeVitorias <= 100){
        nivel = "Lendário"
    }else{
        nivel = "Imortal"
    }

    return "O Herói tem de saldo de " + saldoDeVitorias + " vitótisa e está no nível de " + nivel
}

elo = eloDoHeroi(68, 12)
console.log(elo)
