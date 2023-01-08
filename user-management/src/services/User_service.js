import axios from 'axios';
class UserService {
    userServiceInstance = null;
    static get instance() {
        if (this.userServiceInstance == null) {
            this.userServiceInstance = new UserService();
        }
        return this.userServiceInstance;
    }
    submitUser({ name = '', phonenumber = 0, address = '', sex = '' }) {
        const promise = new Promise((resolve, reject) => {
            try {
                if (name == '' || phonenumber == 0 || address == '' || sex == '') {
                    reject({
                        status: 500,
                        message: "validation error"
                    });
                } else {
                    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
                    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
                    axios.post('https://54.166.243.153:3005/users', {
                        name, phonenumber, address, sex
                    }).then((response) => {
                        resolve(response);
                    }).catch((error) => {
                        reject(error);
                    });

                }
            } catch (error) {
                reject(error);
            }
        });
        return promise;
    }
}
export default UserService;