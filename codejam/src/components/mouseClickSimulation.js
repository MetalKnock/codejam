function mouseClickSimulation(id) {
  const element = document.getElementById(id);
  setInterval(() => {
    element.click();
    console.log(1);
  }, 1000);
}
export default mouseClickSimulation;
