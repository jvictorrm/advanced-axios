const formFind = document.querySelector("[data-form-find]");

const getUniqueIds = (value) => {
  return [
    ...new Set(
      value
        .split(",")
        .map((id) => Number.parseInt(id, 10))
        .filter(Boolean)
    ),
  ];
};

const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const ids = getUniqueIds(data.get("id"));
  const promises = ids.map((id) =>
    axios.get(apiUser(id)).catch((error) => error)
  );

  Promise.all(promises)
    .then((responses) => {
      const combinedData = responses.map(({ data }) => data);
      const combinedHeaders = responses.map(({ headers }) => headers);

      printResponse({
        status: 200,
        data: combinedData,
        headers: combinedHeaders,
      });
    })
    .catch((error) => {
      console.log("Alguma promise falhou", error);
    });
};

formFind.addEventListener("submit", handleFindSubmit);
