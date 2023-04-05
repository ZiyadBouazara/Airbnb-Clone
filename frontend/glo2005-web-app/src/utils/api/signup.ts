import { endpoint } from "./endpoint";

export const signup = async (email: string, password: string): Promise<Response> => {
    const request = new Request(
        `${endpoint}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        }
    );
    const response = await fetch(request);
    return response;
}