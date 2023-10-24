// 1. Pegar o elemento de  **botão** para ser adicionado o **evento de clique** nele.
const btnAdviceGenerator = document.querySelector("btn-advice");

// 2. Pegar o elemento de **id do conselho**
const adviceNumber = document.getElementById("advice-number");

// 3. Pegar o elemento de **descrição do conselho**
const adviceDescription = document.getElementById("advice");

// 4. Após conseguirmos os elementos do html, é necessário a criação da **função responsável por pegar os dados da API**. A melhor forma de se consumir a api é usando **async await**. Caso não tenha visto a aula, sugiro que assista novamente. Nas referências ficará um link com exemplos.
async function gerarConselhos() {
    const url =
      "https://api.adviceslip.com/advice";
      const resposta = await fetch(url);
      return await resposta.json();
    // 5. Dentro da função, após pegarmos os dados da API, é necessário atualizar o conteúdo do id e descrição do conselho que colocamos em uma variável usando o **innerHTML**.
}

// 6. Por fim, basta chamar a função criada.
gerarConselhos()

// 7. Atribuir a função que criamos para ser executada no evento do clique do botão ou se preferir, criar o escopo da função dentro do listener.
btnAdviceGenerator.addEventListener('click', gerarConselhos());