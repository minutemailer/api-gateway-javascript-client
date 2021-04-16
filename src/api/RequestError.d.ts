export default class RequestError extends Error {
    name: string;
    status: number;
    response: Object;
    constructor(message: string, response?: {}, status?: number);
}
