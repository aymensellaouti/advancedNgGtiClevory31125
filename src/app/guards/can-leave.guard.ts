import { CanDeactivateFn } from "@angular/router";
import { CanLeave } from "./can-leave.interface";

export const canLeaveGuard: CanDeactivateFn<CanLeave> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  // itha kan 3andou l'acces bech iokhrej => return true
  if (!component.canLeave()) {
    return confirm(`Etes vous sur de vouloir quitter la page`);
  }
  // sinon lanci confirm nech essayed ithabet i7ab iokhrej walla la
  return true;
};
