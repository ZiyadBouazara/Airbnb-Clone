import { ENDPOINT } from "./endpoint";
import favorites from "./favorites";

export const getUsers = async (): Promise<Response> => {
    const request = new Request(
        `${ENDPOINT}/users`, {
            method: "GET",
        }
    );
    const response = await fetch(request);
    return await response.json();
}

export const getUser = async (userId: string) => {
    const request = new Request(
        `${ENDPOINT}/users/${userId}`, {
            method: "GET",
        }
    );
    const response = await fetch(request);
    return await response.json();
}

export const getFavorites = async (userId: string): Promise<Response> => {
    return await favorites.getFavorites(userId);
}
