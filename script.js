function getMoney() {
   
    var getSaque = enterVal = parseInt(prompt("Valor do saque(apenas números inteiros sem pontos)"));
    console.log(enterVal)

    var cont100 = 0;
    var cont50 = 0;
    var cont20 = 0;
    var cont10 = 0;

    if (getSaque != 0) {
        while (getSaque >= 100) {
            cont100++;
            getSaque -= 100;
        }
        while (getSaque >= 50) {
            cont50++;
            getSaque -= 50;
        }

        while (getSaque >= 20) {
            cont20++;
            getSaque -= 20;
        }

        while (getSaque>= 10) {
            cont10++;
            getSaque -= 10;
        }

    }

    var totGetMoney = (cont100 * 100 + cont50 * 50 + cont20 * 20 + cont10 * 10);
    var date = new Date;

    document.getElementById("cont100").innerHTML = cont100;
    document.getElementById("cont50").innerHTML = cont50;
    document.getElementById("cont20").innerHTML = cont20;
    document.getElementById("cont10").innerHTML = cont10;

    var rest = enterVal - totGetMoney;

    var visualizacao = ("Ficou o valor na conta de: R$" + rest);
    document.getElementById("visualizacao").innerHTML = visualizacao;


    var time = ("Consulta realizado Hoje " + "as " + date.getHours()
    + "h" + date.getMinutes() + "m" + date.getSeconds() + "s");
    document.getElementById("time").innerHTML = time;


}