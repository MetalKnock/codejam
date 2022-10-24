import { removeClickBurgerMenu } from "../listeners/clickBurgerMenu";
import { removeClickBurgerMenuButton } from "../listeners/clickBurgerMenuButton";
import { removeClickCell } from "../listeners/clickCell";
import { removeClickCloseResult } from "../listeners/clickCloseResult";
import { removeclickCurtainMenu } from "../listeners/clickCurtainMenu";
import { removeClickNavigation } from "../listeners/clickNavigation";
import { removeClickSizeMenu } from "../listeners/clickSizeMenu";
import { removeResizeWindow } from "../listeners/resizeWindow";

function removeAllEventListeners() {
  removeResizeWindow();
  removeClickCell();
  removeClickNavigation();
  removeClickSizeMenu();
  removeclickCurtainMenu();
  removeClickCloseResult();
  removeClickBurgerMenuButton();
  removeClickBurgerMenu();
}
export default removeAllEventListeners;
