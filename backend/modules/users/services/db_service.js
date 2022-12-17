import mongoose from 'mongoose';
class DBService {
    classInstance = null;
    constructor() {
        this.db = null;
    }
    static get instance() {
        if (this.classInstance == null) {
            this.classInstance = new DBService();
        }
        return this.classInstance;
    }
    connectionString(dbName = 'test') {
        const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${dbName}?authSource=admin&replicaSet=atlas-gfk4y7-shard-0&readPreference=primary&ssl=true`;
        console.log(connectionString);
        return connectionString;
    }

    connect(DBName) {
        return new Promise(async (resolve, reject) => {
            try {
                await mongoose.connect(this.connectionString(DBName)); // await on a step makes process to wait until it's done/ err'd out.
                this.db = mongoose.connection;
                console.log('db connectionn established');
                resolve(this.db);
            } catch (error) {
                reject(error);
            }
        });
    }

    disConnect(obj) {
        try {
            this.db.close();
        } catch (error) {
            console.log('db connection close error-->', error);
        }
    }

    async find(dataModel, query, limit = 10, sort = "createdAt", order = "desc", page = 1) {
        if (
            typeof dataModel.find === "undefined" ||
            typeof dataModel.find !== "function"
        ) {
            return Promise.reject({
                message: "Not a valid data model",
            });
        } else {
            try {
                let sortObj = {};
                sortObj[sort] = order;
                let docs;
                if (limit !== 0) {
                    page = page - 1;
                    docs = await dataModel.find(query).sort(sortObj).limit(limit).skip(limit * page);
                } else {
                    docs = await dataModel.find(query).sort(sortObj);
                }
                return Promise.resolve(docs);
            } catch (err) {
                return Promise.reject({
                    message: err.message,
                    status: err.code === 11000 ? 409 : 500,
                });
            }
        }
    }


    async save(dataModel) {
        if (typeof dataModel.save === "undefined" || typeof dataModel.save !== "function") {
            return Promise.reject({
                message: "Not a valid data model",
            });
        } else {
            try {
                let dbResp = await dataModel.save();
                return Promise.resolve(dbResp);
            } catch (err) {
                console.log(err);
                return Promise.reject({ message: err.message, status: (err.code === 11000) ? 409 : 500 });
            }
        }

    }

    findAndDelete(dataModel, query = {}) {
        return new Promise(async (resolve, reject) => {
            if (
                typeof dataModel.delete === "undefined" ||
                typeof dataModel.find !== "function"
            ) {
                reject({
                    message: "Not a valid data model",
                });
            } else {
                try {
                    const response = await dataModel.find(query).remove();
                    resolve(response);
                } catch (err) {
                    reject({
                        message: err.message,
                        status: err.code === 11000 ? 409 : 500,
                    });
                }
            }
        });
    }
}
export default DBService;