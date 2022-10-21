import handleClickNavigation from "../components/handleClickNavigation";

function clickNavigation(matrix, transition, size) {
  const navigation = document.querySelector(".navigation");
  navigation.addEventListener(
    "click",
    handleClickNavigation(matrix, transition, size)
  );
}
export default clickNavigation;
