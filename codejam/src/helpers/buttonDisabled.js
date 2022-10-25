function buttonDisabled(buttonClass) {
  const button = document.querySelector(`.${buttonClass}`);
  button.style.disabled = true;
  let children = button.childNodes;
  for (const node of children) {
    node.style.color = "grey";
    node.style.cursor = "not-allowed";
  }
}
export default buttonDisabled;
