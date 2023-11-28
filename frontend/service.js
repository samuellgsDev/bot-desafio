let subject = "";

const service = async (theme) => {
  const themeElement = document.getElementById("theme");
  const subjectElement = document.getElementById("subjectGroup");
  const descriptionElement = document.getElementById("descriptionGroup");
  const submitButtonElement = document.getElementById("submitButton");
  const successMessageElement = document.getElementById("successMessage");

  themeElement.innerText = String(theme).toUpperCase();
  themeElement.className = "mt-3";

  if (
    theme === "Problemas com cartão" ||
    theme === "Contratação de empréstimo"
  ) {
    subject = theme;
    subjectElement.className = "d-none";
  } else {
    subject = "";
    subjectElement.className = "form-group";
  }

  descriptionElement.className = "form-group";
  submitButtonElement.className = "btn btn-light";
  successMessageElement.className = "d-none";
};

document
  .getElementById("problemForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const requestBody = {};

    formData.forEach((value, key) => {
      requestBody[key] = value;
    });

    const data = {};

    if (subject) {
      data.subject = subject;
    } else {
      data.subject = requestBody.subject;
    }

    data.description = requestBody.description;

    fetch("http://localhost:3000/solicitations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      const themeElement = document.getElementById("theme");
      const subjectElement = document.getElementById("subjectGroup");
      const descriptionElement = document.getElementById("descriptionGroup");
      const submitButtonElement = document.getElementById("submitButton");
      const successMessageElement = document.getElementById("successMessage");

      document.getElementById("subject").value = "";
      document.getElementById("description").value = "";

      themeElement.className = "d-none";
      subjectElement.className = "d-none";
      descriptionElement.className = "d-none";
      submitButtonElement.className = "d-none";
      successMessageElement.className = "alert alert-success mt-3";
    });
  });