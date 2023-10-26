const btnAdviceGenerator = document.getElementById("btn-advice");

const adviceNumber = document.getElementById("advice-number");

const adviceDescription = document.getElementById("advice");

async function gerarConselhos() {
    const url = await fetch('https://api.adviceslip.com/advice');
    const json = await url.json();
    return json
}

async function conselhoAleatorio() {
  let respostaDaFuncaoGerarConselhos = await gerarConselhos()
  return respostaDaFuncaoGerarConselhos.slip
}

async function mostrarConselho() {
  const objeto = await conselhoAleatorio()
  adviceNumber.innerHTML = `Advice ${objeto.id}`
  adviceDescription.innerHTML = objeto.advice
}

btnAdviceGenerator.addEventListener('click', mostrarConselho);