import handleClickNavigation from "../components/handleClickNavigation";

function clickNavigation(matrix, animationAvailable, transition) {
  const navigation = document.querySelector(".navigation");
  navigation.addEventListener(
    "click",
    handleClickNavigation(matrix, animationAvailable, transition)
  );
}
export default clickNavigation;
