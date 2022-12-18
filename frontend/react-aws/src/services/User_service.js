import AjaxService from "./AJAX_service.js";
class UserService {
    instance = null;
    #ajax = null;
    constructor() {
        this.#ajax = AjaxService.getInstance();
    }
    static getInstance() {
        if(this.instance==null) {
            this.instance = new UserService();
        }
        return this.instance;
    }
    async getAllUser() {
        try {
            const data = await this.#ajax.get('/users');
            return Promise.resolve(data);
        } catch(error) {
            return Promise.reject(error);
        }
    }
}
export default UserService;