import { endpoint } from "./endpoint";

export const login = async (email: string, password: string): Promise<Response> => {
    const request: Request = new Request(
        `${endpoint}/login`, {
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