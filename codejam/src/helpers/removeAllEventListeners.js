import { removeClickCell } from "../listeners/clickCell";
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
}
export default removeAllEventListeners;
