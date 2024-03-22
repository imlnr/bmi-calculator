import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./action-types";
const url = "https://bmi-json-server-thkt.onrender.com";
export const getSignup = (name, email, age, phone, gender, dob, avatar, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${url}/users`, {
                name,
                email,
                age,
                phone,
                gender,
                dob,
                avatar,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
};

export const getLogged = (email, pass) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        try {
            let res = (await axios.get(`${url}/users`)).data;
            console.log(res);

            const user = res.find(
                (u) =>
                    (u.username === email || u.email === email) && u.password === pass
            );
            if (user) {
                dispatch({ type: LOGIN_SUCCESS, payload: user });
                //   dispatch({ type: CHANGE_LOGIN_STATUS, payload: true });
                console.log("successfully logged in");
            } else {
                //   dispatch({ type: GET_USER_FAILURE });
                //   dispatch({ type: CHANGE_LOGIN_LOGOUT });
            }
        } catch (e) {
            // dispatch({ type: GET_USER_FAILURE });
            dispatch({ type: LOGIN_FAILURE });
        }
    };
};