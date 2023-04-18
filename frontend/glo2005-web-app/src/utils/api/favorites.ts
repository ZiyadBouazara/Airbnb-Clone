import { ENDPOINT } from "./endpoint";

namespace favorites {
    export const getFavorites = async (userId: string, search:string): Promise<Response> => {
        search = search.trim()
        search.replace(" ", "+")
        
        const request = new Request(
            `${ENDPOINT}/users/${userId}/favorites?search=${search}`, {
                method: "GET",
            }
        );
        const response = await fetch(request);
        return response;
    }

    export const addFavorite = async (userId: string, logementId: number): Promise<Response> => {
        const request = new Request(
            `${ENDPOINT}/users/${userId}/favorites/${logementId}`, {
                method: "POST",
            }
        );
        const response = await fetch(request);
        return response;
    }

    export const deleteFavorite = async (userId: string, logementId: number): Promise<Response> => {
        const request = new Request(
            `${ENDPOINT}/users/${userId}/favorites/${logementId}`, {
                method: "DELETE",
            }
        );
        const response = await fetch(request);
        return response;
    }

    export const isFavorite = async (userId: string, logementId: number): Promise<Response> => {
        const request = new Request(
            `${ENDPOINT}/users/${userId}/favorites/${logementId}`, {
                method: "GET",
            }
        );
        const response = await fetch(request);
        return response;
    }
}

export default favorites