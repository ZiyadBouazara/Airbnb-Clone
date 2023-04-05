import { endpoint } from "./endpoint";

export const getUsers = async (): Promise<Response> => {
    const request = new Request(
        `${endpoint}/users`, {
            method: "GET",
        }
    );
    const response = await fetch(request);
    return response;
}