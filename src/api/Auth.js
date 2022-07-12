import Api from "../config/Api";

export default class Auth {
    static login = async (request) => {
        const { token } = (await Api.post('/login', request));
        localStorage.setItem('token', token);
    };
}
