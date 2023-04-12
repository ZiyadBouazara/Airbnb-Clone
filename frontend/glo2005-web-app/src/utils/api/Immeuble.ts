import { ENDPOINT } from "./endpoint";
import logement from "./logement";

export const getImmeubles = async (): Promise<Response> => {
    const request = new Request(
        `${ENDPOINT}/immeubles`, {
            method: "GET",
        }
    );
    const response = await fetch(request);
    return response;
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

export const getLogements = async (immeubleId: string): Promise<Response> => {
    return await logement.getLogements(immeubleId);
}

export const getLogement = async (immeubleId: string, logementId: string) => {
    return await logement.getLogement(immeubleId, logementId);
}
