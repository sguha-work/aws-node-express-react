class ErrorHandler {
    instance = null;
    static getInstance() {
        if(this.instance==null) {
            this.instance = new ErrorHandler();
        }
        return this.instance;
    }
    handle(error) {
        let response = {};
    }
}