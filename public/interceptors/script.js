const formFind = document.querySelector("[data-form-find]");

axios.interceptors.request.use(
  (config) => {
    config.url = `${config.url}?emerson=broga`;
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    response.data.dob = "xx/xx/xxxx";
    return response;
  },
  (error) => Promise.reject(error)
);

const handleFindSubmit = (event) => {
  event.preventDefault();

  const data = getFormData(formFind);
  const id = data.get("id");
  const url = apiUser(id);

  axios.get(url).then(printResponse);
};

formFind.addEventListener("submit", handleFindSubmit);
