import HttpClient from "./HttpClient";
export default class Contact extends HttpClient {
    index(): Promise<Response>;
}
