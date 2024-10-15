const formFind = document.querySelector("[data-form-find]");

const controller = new AbortController();

const handleFindSubmit = (event) => {
  event.preventDefault();

  const data = getFormData(formFind);
  const id = data.get("id");
  const url = apiUser(id);

  const options = {
    signal: controller.signal,
  };

  axios.get(url, options).then(printResponse);
  controller.abort();
};

formFind.addEventListener("submit", handleFindSubmit);
