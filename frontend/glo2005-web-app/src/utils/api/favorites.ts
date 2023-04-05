import { ENDPOINT } from "./endpoint";

export const getFavorites = async (userId: string): Promise<Response> => {
    const request = new Request(
        `${ENDPOINT}/users/${userId}/favorites`, {
            method: "GET",
        }
    );
    const response = await fetch(request);
    return response;
}