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

export const getUser = async (userId: string) => {
    const request = new Request(
        `${endpoint}/users/${userId}`, {
            method: "GET"
        }
    );
    const response = await fetch(request);
    return response;
}