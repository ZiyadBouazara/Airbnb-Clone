import { ENDPOINT } from "./endpoint";

export const signup = async (email: string, password: string, name: string, phoneNumber: string, age: number): Promise<Response> => {
    const request = new Request(
        `${ENDPOINT}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                nom: name,
                phoneNumber: phoneNumber,
                age: age
            })
        }
    );
    const response = await fetch(request);
    return await response.json();
}