import UserService from "../services/user_service.js";
class UserController {
    classInstance = null;
    constructor() {
        this.userService = UserService.instance;
    }
    static instance() {
        if (this.classInstance == null) {
            this.classInstance = new UserController();
        }
        return this.classInstance;
    }
    findAllUsers() {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.userService.findAllUser();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    createUser({ name, phonenumber, address, sex }) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.userService.createUser({ name, phonenumber, address, sex });
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }
}
export default UserController;