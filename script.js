function startChallenge() {
  const name = prompt("Qual o lugar do nosso primeiro encontro?");
  if (name.toLowerCase() === "praia") { // Substitua pela resposta correta
    alert("Resposta correta! Vamos para o próximo passo.");
    window.location.href = "final.html"; // Próxima página
  } else {
    alert("Resposta errada! Tente novamente.");
  }
}
