import axios from "axios";

export const getSignup = (name, email, age, phone, gender, dob, avatar, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('https://bmi-json-server-thkt.onrender.com/users', {
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
