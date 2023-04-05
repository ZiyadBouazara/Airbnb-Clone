import { endpoint } from "./endpoint";

export const login = async (username: string, password: string) => {
    const request: Request = new Request(
        `${endpoint}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }
    );
    const response = await fetch(request);
    return await response.json()
}