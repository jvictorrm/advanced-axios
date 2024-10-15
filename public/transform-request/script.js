const formUser = document.querySelector("[data-form-user]");

const transformRequest = (data, headers) => {
  headers.authorization = "Bearer TOKEN_JV";
  return data;
};

const handleFormUser = (e) => {
  e.preventDefault();

  const data = getFormData(formUser);
  const url = apiUser();

  const options = {
    transformRequest: [...axios.defaults.transformRequest, transformRequest],
  };

  axios.post(url, data, options).then(printResponse);
};

formUser.addEventListener("submit", handleFormUser);
