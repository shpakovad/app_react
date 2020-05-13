export const AUTH_DATA = "AUTH-DATA";
export const CHANGED_USERNAME = "CHANGED-USERNAME";
export const CHANGED_PASSWORD = "CHANGED-PASSWORD";
export const ERROR = "ERROR";

const initialState = {
    username: "",
    password: "",
    error: false,
    logged: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_DATA :
            return {
                ...state,
                error:action.error,
                logged: action.logged,
            };
        case CHANGED_USERNAME:
            return {
                ...state,
                username: action.username,
            };
        case CHANGED_PASSWORD:
            return {
                ...state,
                password: action.password,
            };
        case ERROR:
            return {
                ...state,
                error: action.error,
            };

        default:
            return state
    }
};

export const authorizationDataAC = (error,logged) => {
    return {type: AUTH_DATA, error,logged}
};
export const handleUsernameAC = (username) => {
    return {type: CHANGED_USERNAME, username}
};
export const handleIPasswordAC = (password) => {
    return {type: CHANGED_PASSWORD, password}
};
export const checkedErrorAC = (error) => {
    return {type: ERROR, error}
};

export default reducer