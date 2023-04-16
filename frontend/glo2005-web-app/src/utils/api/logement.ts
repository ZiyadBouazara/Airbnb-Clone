import { ENDPOINT } from "./endpoint";

namespace logement {
    export const getLogements = async (immeubleId: string, search: string): Promise<Response> => {
        search = search.trim()
        search.replace(" ", "+")

        const request = new Request(
            `${ENDPOINT}/immeubles/${immeubleId}/logements?search=${search}`, {
                method: "GET",
            }
        );
        const response = await fetch(request);
        return await response.json();
    }

    export const getLogement = async (immeubleId: string, logementId: string): Promise<Response> => {
        const request = new Request(
            `${ENDPOINT}/immeubles/${immeubleId}/logements/${logementId}`, {
                method: "GET",
            }
        );
        const response = await fetch(request);
        return await response.json();
    }
}

export default logement