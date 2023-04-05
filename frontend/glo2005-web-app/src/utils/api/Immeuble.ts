import { ENDPOINT } from "./endpoint";

export const getImmeubles = async () => {
    const request = new Request(
        `${ENDPOINT}/Immeubles`, {
            method: "GET",
        }
    );
    const response = await fetch(request);
    return response;
}