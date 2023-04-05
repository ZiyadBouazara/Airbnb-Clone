import { ENDPOINT } from "./endpoint";

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
