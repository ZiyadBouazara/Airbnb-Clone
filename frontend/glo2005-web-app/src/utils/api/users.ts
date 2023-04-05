import { ENDPOINT } from "./endpoint";
import { getFavorites as getFavoritesFromUser } from "./favorites";

export const getUsers = async (): Promise<Response> => {
    const request = new Request(
        `${ENDPOINT}/users`, {
            method: "GET",
        }
    );
    const response = await fetch(request);
    return response;
}

export const getUser = async (userId: string): Promise<Response> => {
    const request = new Request(
        `${ENDPOINT}/users/${userId}`, {
            method: "GET",
        }
    );
    const response = await fetch(request);
    return response;
}

export const getFavorites = async (userId: string): Promise<Response> => {
    return getFavoritesFromUser(userId);
}
