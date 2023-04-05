import { ENDPOINT } from "./endpoint";

namespace logement {
    export const getLogements = async (ImmeubleId: string): Promise<Response> => {
        const request = new Request(
            `${ENDPOINT}/Immeubles/${ImmeubleId}`, {
                method: "GET",
            }
        );
        const response = await fetch(request);
        return response;
    }
}

export default logement