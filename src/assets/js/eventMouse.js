const getRandomColors = () => {
  const cadena = "abcdef0123456789";
  const numElement = 6;
  let color = "#";
  for (let i = 0; i < numElement; i++) {
    color += cadena[Math.floor(Math.random() * 6)];
  }
  return color;
};

const setTranslateElement = ({ x, y }) => {
  const elDiv = document.createElement("div");
  document.body.appendChild(elDiv);
  elDiv.classList.add("effect-mouse");
  elDiv.style.zIndex = "5";
  elDiv.style.position = "fixed";
  elDiv.style.width = "25px";
  elDiv.style.height = "25px";
  elDiv.style.border = `1px solid ${getRandomColors()}`;
  elDiv.style.top = y - 10 + "px";
  elDiv.style.left = x + 10 + "px";
  setTimeout(() => {
    document.body.removeChild(elDiv);
  }, 300);
};

export { getRandomColors, setTranslateElement };
