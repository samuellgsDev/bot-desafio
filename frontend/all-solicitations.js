document.addEventListener("DOMContentLoaded", async () => {
  findAllSolicitations();
});

const findAllSolicitations = async () => {
  const response = await fetch("http://localhost:3000/solicitations");
  const data = await response.json();

  const solicitationsElement = document.getElementById("solicitation");
  solicitationsElement.innerHTML = "";

  data.map((solicitation) => {
    const card = document.createElement("div");
    card.className = "card m-1";
    card.style = "width: 30%;";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column justify-content-between";

    const div = document.createElement("div");

    const subject = document.createElement("h5");
    subject.className = "card-title";
    subject.innerHTML = `<strong>${solicitation.subject}</strong>`;

    const solicitationId = document.createElement("p");
    solicitationId.className = "card-text";
    solicitationId.innerHTML = `<strong>ID da solicitação:</strong> ${solicitation.id}`;

    const clientId = document.createElement("p");
    clientId.className = "card-text";
    clientId.innerHTML = `<strong>ID do cliente:</strong> ${solicitation.client_id}`;

    const description = document.createElement("p");
    description.className = "card-text";
    description.innerHTML = `<strong>Descrição:</strong> ${solicitation.description}`;

    const solved = document.createElement("p");
    solved.className = `card-text mt-4 ${
      solicitation.solved ? "text-success" : "text-danger"
    }`;
    solved.innerHTML = `<strong>${
      solicitation.solved ? "Resolvido" : "Não resolvido"
    }</strong>`;

    div.appendChild(subject);
    div.appendChild(solicitationId);
    div.appendChild(clientId);
    div.appendChild(description);
    cardBody.appendChild(div);
    cardBody.appendChild(solved);

    card.appendChild(cardBody);
    solicitationsElement.appendChild(card);
  });
};