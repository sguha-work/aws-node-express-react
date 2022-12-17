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
        if(error.code) {
            response.status = error.code;
        } else {
            response.status = 500;
        }
        if(error.message) {
            response.message = error.message;
        } else {
            response.message = "Internal server error";
        }
        return response;
    }
}
export default ErrorHandler;