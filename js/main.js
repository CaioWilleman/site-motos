const WHATSAPP = "550000000"; // troca pelo número real depois

async function carregarMotos() {
  const resposta = await fetch("motos.json");
  const motos = await resposta.json();

  const grid = document.getElementById("catalogo-grid");

  motos.forEach((moto) => {
    const precoFormatado = moto.preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const kmFormatado = moto.km.toLocaleString("pt-BR");

    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse na ${moto.nome} ${moto.ano}. Ainda está disponível?`
    );

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img class="card__foto" src="${moto.foto}" alt="${moto.nome}" loading="lazy">
      <div class="card__corpo">
        <h3 class="card__nome">${moto.nome}</h3>
        <p class="card__info">${moto.ano} · ${kmFormatado} km</p>
        <p class="card__preco">${precoFormatado}</p>
        <a class="card__btn" href="https://wa.me/${WHATSAPP}?text=${mensagem}" target="_blank">
          Tenho interesse
        </a>
      </div>
    `;

    grid.appendChild(card);
  });
}

carregarMotos();