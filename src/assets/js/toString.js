const getTitlePage = (view) => {
  const titlePage = `${view}`;
  document.querySelector("title").innerHTML = titlePage + " | HeibertOcaña";
};

const addEffectString = (text, classes = "") => {
  let newText = [];
  for (let i = 0; i < text.length; i++) {
    newText.push(
      `<span class="effect-text-banner ${classes} text-effect">${text[i]}</span>`
    );
  }

  let textString = newText.join().replace(/,/g, "");
  return textString;
};

export { getTitlePage, addEffectString };
