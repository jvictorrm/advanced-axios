const formFind = document.querySelector("[data-form-find]");

const handleFindSubmit = (event) => {
  event.preventDefault();

  const data = getFormData(formFind);
  const id = data.get("id");
  const url = apiUser(id);

  // modelo antigo
  //   const options = {
  //     transformResponse: axios.defaults.transformResponse.concat((data) => {
  //       data.isTransformed = true;
  //       return data;
  //     }),
  //   };

  // modelo novo
  const options = {
    transformResponse: [
      ...axios.defaults.transformResponse,
      (data) => {
        data.isTransformed = true;
        return data;
      },
    ],
  };

  axios.get(url, options).then(printResponse);
};

formFind.addEventListener("submit", handleFindSubmit);
