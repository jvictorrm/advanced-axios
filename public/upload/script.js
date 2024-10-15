const formFind = document.querySelector("[data-form-find]");
const formUser = document.querySelector("[data-form-user]");
const uploadInput = document.querySelector("[data-upload]");
const avatarInput = document.querySelector("[data-avatar]");

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get("id");
  const url = apiUser(id);

  axios.get(url).then(printResponse).then(populate);
};

const handleUserSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formUser);
  const id = data.get("id");
  const url = apiUser(id, "upload");

  const options = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  axios.patch(url, data, options).then(printResponse);
};

const handleUploadChange = (e) => {
  avatarInput.value = e.target.files[0].name;
};

formFind.addEventListener("submit", handleFindSubmit);
formUser.addEventListener("submit", handleUserSubmit);
uploadInput.addEventListener("change", handleUploadChange);
