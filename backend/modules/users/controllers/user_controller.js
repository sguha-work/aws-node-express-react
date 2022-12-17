import UserService from "../services/user_service.js";
class UserController {
    classInstance = null;
    constructor() {
        this.userService = UserService.instance;
    }
    static get instance() {
        if (this.classInstance == null) {
            this.classInstance = new UserController();
        }
        return this.classInstance;
    }
    async get({ query, limit = 10, sort = "createdAt", order = "desc", page = 1 }) {
        try {
            const result = await this.userService.get({ query, limit, sort, order, page });
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async create({ name, phonenumber, address, sex }) {
        try {
            const result = await this.userService.create({ name, phonenumber, address, sex });
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
export default UserController;