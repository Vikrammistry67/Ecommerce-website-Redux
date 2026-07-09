import _axios from "../../../services/axiosConfig";

export const getUser = async () => {
    try {
        const users = await _axios.get('/users');
    } catch (error) {
        new Error('failed to get users');
    }
};


export const registerUser = async (user) => {
    try {
        const registerResponse = await _axios.post('/users', user);
        console.log('registerResponse --> ', registerResponse);

    } catch (error) {
        new Error('failed to register users');
    }
}