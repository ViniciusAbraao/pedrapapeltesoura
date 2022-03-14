const jogar = document.getElementById("jogar")
function game() {
    const opcao1 = document.getElementById("jogador1").value
    const opcao2 = document.getElementById("jogador2").value
    const saida = document.getElementById("resultado")

    if (opcao1 === "Pedra" && opcao2 === "Papel" || opcao1 === "Papel" && opcao2 === "Pedra") {
        saida.textContent = "PAPEL VENCEU!"
    }
    else if (opcao1 === "Pedra" && opcao2 === "Tesoura" || opcao1 === "Tesoura" && opcao2 === "Pedra") {
        saida.textContent = "PEDRA VENCEU!"
    } else if (opcao1 === "Tesoura" && opcao2 === "Papel" || opcao1 === "Papel" && opcao2 === "Tesoura") {
        saida.textContent = "TESOURA VENCEU!"
    } else {
        saida.textContent = "EMPATE! MUDE AS OPÇÕES!"
    }
}
jogar.addEventListener("click", game)