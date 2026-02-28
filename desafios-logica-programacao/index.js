let nome = "Raphael"
let xp = 600
let nivel = ""


if(xp >= 10001){
    nivel = "Radiante"
}else if(xp >= 9001){
    nivel = "Imortal"
}else if (xp >= 8001){
    nivel = "Ascedente"
}else if(xp >= 7001){
    nivel = "Planita"
}else if(xp >= 5001){
    nivel = "Ouro"    
}else if(xp >= 2001){
    nivel = "Prata"
}else if(xp >= 1001){
    nivel = "Bronze"
}else{
    nivel = "Ferro"
}

console.log("O Herói de nome " + nome + " está no nível " +  nivel)


