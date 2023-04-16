import { ENDPOINT } from "./endpoint";
import logement from "./logement";

export const getImmeubles = async (search: string, type: string[]): Promise<Response> => {
    search = search.trim()
    search.replace(" ", "+")

    const request = new Request(
        `${ENDPOINT}/immeubles?search=${search}&type=${type.join()}`, {
            method: "GET",
        }
    );
    const response = await fetch(request);
    return await response.json();
}

export const getImmeuble = async (immeubleId: string): Promise<Response> => {
    const request = new Request(
        `${ENDPOINT}/immeubles/${immeubleId}`, {
            method: "GET"
        }
    );
    const response = await fetch(request);
    return await response.json();
}

export const getLogements = async (immeubleId: string, search: string): Promise<Response> => {
    return await logement.getLogements(immeubleId, search);
}

export const getLogement = async (immeubleId: string, logementId: string) => {
    return await logement.getLogement(immeubleId, logementId);
}
