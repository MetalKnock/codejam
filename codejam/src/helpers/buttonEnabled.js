function buttonEnabled(buttonClass) {
  const button = document.querySelector(`.${buttonClass}`);
  button.style.disabled = false;
  let children = button.childNodes;
  for (const node of children) {
    node.style.color = "#e6ba43";
    node.style.cursor = "pointer";
  }
}
export default buttonEnabled;
