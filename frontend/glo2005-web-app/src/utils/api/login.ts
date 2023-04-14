import { ENDPOINT } from "./endpoint";

export const login = async (email: string, password: string): Promise<Response> => {
    const request: Request = new Request(
        `${ENDPOINT}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: email,
                password: password,
            })
        }
    );
    const response = await fetch(request);
    return await response.json();
}