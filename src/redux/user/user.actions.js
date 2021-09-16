import { SET_CURRENT_USER } from "../../constants/user.action-types";

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user,
});
