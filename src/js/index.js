const btnAdviceGenerator = document.getElementById("btn-advice");

document.getElementsById("advice-number").innerHTML = adviceNumber;

const adviceDescription = document.getElementsByClassName('.advice');

async function randomAdvice() {
    const url =
      "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    return await resposta.json();
}

async function getRandomAdvice(slip_id) {
    const url = `https://api.adviceslip.com/advice/${slip_id}`;
    const resposta = await fetch(url);
    return await resposta.json();
}
  
async function printRandomAdvice() {
    const advice = await randomAdvice();
    const giveRandomAdvice = await getRandomAdvice(advice.slip_id);
    console.log(giveRandomAdvice);
}