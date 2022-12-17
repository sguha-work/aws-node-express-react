import DBService from './db_service.js';
import * as UserModel from './../models/user_model.js';
class UserService {
    classInstance = null;
    constructor() {
        this.dbService = DBService.instance;
    }
    static get instance() {
        if (this.classInstance == null) {
            this.classInstance = new UserService();
        }
        return this.classInstance;
    }
    findAllUser() {
        return new Promise(async (resolve, reject) => {
            try {
                await this.dbService.connect('user');
                const result = await this.dbService.find(UserModel.default);
                resolve(result);
            } catch (error) {
                reject(error);
            } finally {
                this.dbService.disConnect();
            }
        });
    }

    createUser({ name, phonenumber, address, sex }) {
        return new Promise(async (resolve, reject) => {
            try {
                await this.dbService.connect('user');
                const user = new UserModel({ name, phonenumber, address, sex });
                const result = await this.dbService.save(user);
                resolve(result);
            } catch (error) {
                reject(error);
            } finally {
                this.dbService.disConnect();
            }
        });
    }
}
export default UserService;