const formFind = document.querySelector("[data-form-find]");

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get("id");
  const url = apiUser(id);

  const options = {
    headers: {
      Authorization: "Bearer TOKEN",
      "X-user": "Usuario",
    },
  };

  axios.get(url, options).then(printResponse);
};

formFind.addEventListener("submit", handleFindSubmit);
