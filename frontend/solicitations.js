const solicitationByTheme = async (theme) => {
  const response = await fetch(`http://localhost:3000/solicitations/${theme}`);
  const data = await response.json();
  const solicitationsElement = document.getElementById("solicitation");
  const rowElement = document.getElementById("row");

  solicitationsElement.innerHTML = "";

  if (data.serving.length <= 0 && data.inRow <= 0) {
    rowElement.innerText = "Nenhuma solicitação.";
  } else if (data.inRow <= 0) {
    rowElement.innerText = `Nenhuma solicitação em fila.`;
  } else {
    rowElement.innerText = `+${data.inRow} solicitações em fila.`;
  }

  data.serving.map((solicitation) => {
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

    const finishButton = document.createElement("button");
    finishButton.className = "btn btn-info text-light mt-4";
    finishButton.innerText = "Finalizar atendimento";
    finishButton.onclick = () => finishService(solicitation.id, theme);

    div.appendChild(subject);
    div.appendChild(solicitationId);
    div.appendChild(clientId);
    div.appendChild(description);
    cardBody.appendChild(div);
    cardBody.appendChild(finishButton);

    card.appendChild(cardBody);
    solicitationsElement.appendChild(card);
  });
};

const finishService = async (id, theme) => {
  await fetch(`http://localhost:3000/solicitations/finish/${id}`, {
    method: "PUT",
  }).then(() => solicitationByTheme(theme));
};


document.addEventListener("DOMContentLoaded", () => {
  solicitationByTheme("cards");
});