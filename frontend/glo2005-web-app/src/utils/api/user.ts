import { ENDPOINT } from "./endpoint";
import favorites from "./favorites";

export const getUsers = async (): Promise<Response> => {
    const request = new Request(
        `${ENDPOINT}/users`, {
            method: "GET",
        }
    );
    const response = await fetch(request);
    return response;
}

export const getUser = async (userId: string) => {
    const request = new Request(
        `${ENDPOINT}/users/${userId}`, {
            method: "GET",
        }
    );
    const response = await fetch(request);
    return response;
}

export const getFavorites = async (userId: string, search: string): Promise<Response> => {
    return await favorites.getFavorites(userId, search);
}

export const addFavorite = async (userId: string, logementId: number): Promise<Response> => {
    return await favorites.addFavorite(userId, logementId);
}

export const deleteFavorite = async (userId: string, logementId: number): Promise<Response> => {
    return await favorites.deleteFavorite(userId, logementId);
}

export const isFavorite = async (userId: string, logementId: number): Promise<Response> => {
    return await favorites.isFavorite(userId, logementId);
}

export const getLocations = async (userId: string): Promise<Response> => {
    const request = new Request(
        `${ENDPOINT}/users/${userId}/locations`, {
            method: "GET",
        }
    );
    const response = await fetch(request);
    return response;
}
