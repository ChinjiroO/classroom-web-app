import * as actionTypes from '../constant/actionTypes'

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case actionTypes.AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            // console.log(action?.data);
            console.log("Login successful");
            return { ...state, authData: action.data, loading: false, errors: null };
        case actionTypes.LOGOUT:
            localStorage.clear();
            console.log("Logout successful");
            return { ...state, authData: null, loading: false, errors: null };
        default: 
            return state;
    }
};

export default authReducer;