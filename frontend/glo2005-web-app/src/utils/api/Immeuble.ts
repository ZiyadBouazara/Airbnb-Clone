import { ENDPOINT } from "./endpoint";
import logement from "./logement";

export const getImmeubles = async (): Promise<Response> => {
    const request = new Request(
        `${ENDPOINT}/Immeubles`, {
            method: "GET",
        }
    );
    const response = await fetch(request);
    return response;
}

export const getImmeuble = async (ImmeubleId: string): Promise<Response> => {
    const request = new Request(
        `${ENDPOINT}/Immeubles/${ImmeubleId}`, {
            method: "GET"
        }
    );
    const response = await fetch(request);
    return response;
}

export const getLogements = async (ImmeubleId: string): Promise<Response> => {
    return await logement.getLogements(ImmeubleId);
}
