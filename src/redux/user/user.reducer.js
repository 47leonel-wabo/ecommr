import * as actionTypes from "../../constants/action-types";

const USER_INITIAL_STATE = {
    loggedUser: null,
};

const userReducer = (prevState = USER_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_USER:
            return {
                ...prevState,
                loggedUser: action.payload,
            };

        default:
            return prevState;
    }
};

export default userReducer;
