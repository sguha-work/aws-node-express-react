class AjaxService {
    instance = null;
    #urlPrefix = `http://localhost:3000/dev`;
    static getInstance() {
        if (this.instance == null) {
            this.instance = new AjaxService();
        }
        return this.instance;
    }
    async get(url) {
        try {
            const dataFromDB = await fetch(this.#urlPrefix + url);
            return Promise.resolve(dataFromDB.json());// no async promise handler
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
export default AjaxService;