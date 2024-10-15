const formFind = document.querySelector("[data-form-find]");

const handleFindSubmit = (event) => {
  event.preventDefault();

  const data = getFormData(formFind);
  const id = data.get("id");
  const url = apiUser(id);

  axios.get(url).then(printResponse);
};

formFind.addEventListener("submit", handleFindSubmit);
