const container = document.querySelector("#container");
const URL_MAIN =
  "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json";

async function getData() {
  const response = await fetch(URL_MAIN);
  const candidatos = await response.json();

  const candidatosBrasileiros = candidatos.cand.map((cand) => {
    return `
     
        <h2>${cand.nm}</h2>
       <p>${cand.pvap}</p>
  
    `;
  });
  container.innerHTML = candidatosBrasileiros.join("");
}
getData();
