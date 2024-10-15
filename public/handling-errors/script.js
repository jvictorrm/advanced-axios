const formFind = document.querySelector("[data-form-find]");

// Exemplo forçando erro

// const handleFindSubmit = (event) => {
//   event.preventDefault();

//   const data = getFormData(formFind);
//   const id = data.get("id");
//   const url = apiUser(id);

//   const options = {
//     validateStatus: (status) => {
//       // return true - significa válido. vai cair no then (Promise.resolve)
//       // return false - significa inválido. vai cair no catch (Promise.reject)
//       return false;
//     },
//   };

//   axios
//     .get(url, options)
//     .then(printResponse)
//     .catch((e) => {
//       console.log(e);
//     });
// };

const handleFindSubmit = (event) => {
  event.preventDefault();

  const data = getFormData(formFind);
  const id = data.get("id");
  const url = apiUser(id);

  axios
    .get(url)
    .then(printResponse)
    .catch((error) => {
      if (error.response) {
        console.log("error.response.data", error.response.data);
        console.log("error.response.headers", error.response.headers);
        console.log("error.response.status", error.response.status);

        alert(`A resposta da requisição foi ${error.response.status}`);
      }

      if (error.request) {
        console.log("error.request", error.response.request);
      }

      if (error.config) {
        console.log("error.config", error.config);
      }

      console.log("Error", error.message);
    });
};

formFind.addEventListener("submit", handleFindSubmit);
