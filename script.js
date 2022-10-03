const container = document.querySelector("#container");
const URL_MAIN =
  "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json";

async function getData() {
  const response = await fetch(URL_MAIN);
  const candidatos = await response.json();
  console.log(candidatos.cand);

  const candidatosBrasileiros = candidatos.cand.map((cand) => {
    return `
        <div id="wrap">
        <h2>${cand.nm}</h2>
       <p>${cand.pvap}%</p>
  </div>
    `;
  });
  container.innerHTML = candidatosBrasileiros.join("");
}
getData();
