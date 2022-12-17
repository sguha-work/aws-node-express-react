import DBService from './db_service.js';
import * as UserModel from './../models/user_model.js';
const UM = UserModel.default; 
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
    async get({query, limit = 10, sort = "createdAt", order = "desc", page = 1}) {
        try {
            await this.dbService.connect('user');
            const result = await this.dbService.find(UM);
            this.dbService.disConnect();
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async create({ name, phonenumber, address, sex }) {
        try {
            await this.dbService.connect('user');
            const user = new UM({ name, phonenumber, address, sex });
            const result = await this.dbService.save(user);
            this.dbService.disConnect();
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
export default UserService;