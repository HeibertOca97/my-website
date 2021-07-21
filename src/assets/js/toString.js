const getTitlePage = (view) => {
  const titlePage = `${view} | HeibertOcaña`;
  document.querySelector("title").innerHTML = titlePage;
};

export { getTitlePage };
