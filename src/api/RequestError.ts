export default class RequestError extends Error {
    name: string;
    status: number;
    response: Object;

    constructor(message: string, response = {}, status = 500) {
        super();

        this.name = this.constructor.name;
        this.status = status;
        this.response = response;
    }
}
