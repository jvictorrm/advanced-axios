const formFind = document.querySelector("[data-form-find]");
const formUser = document.querySelector("[data-form-user]");

const BrogaAPI = {
  defaultErrorHandler: function (error) {
    console.log("*** defaultErrorHandler", error);

    printStatus(error.response.status);
    printHeaders(error.response.headers);

    if (error.response.status === 404) {
      printData("Usuário não encontrado!");
      return;
    }

    printData(error.message);
  },
  get: function (path, options = {}) {
    axios
      .get(path, options)
      .then(printResponse)
      .then(populate)
      .catch(this.defaultErrorHandler);
  },
  patch: function (path, data, options = {}) {
    axios
      .patch(path, data, options)
      .then(printResponse)
      .catch(this.defaultErrorHandler);
  },
};

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get("id");
  const url = apiUser(id);

  BrogaAPI.get(url);
};

const handleUserSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formUser);
  const id = data.get("id");
  const url = apiUser(id);

  BrogaAPI.patch(url, data);
};

formFind.addEventListener("submit", handleFindSubmit);
formUser.addEventListener("submit", handleUserSubmit);
