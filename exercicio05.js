//Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:

let tabuada = 3
let i = 1
while(i<=10){
    console.log(tabuada + "x" + i + "=" + tabuada*i)
    i++
}