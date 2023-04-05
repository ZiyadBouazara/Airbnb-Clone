import { ENDPOINT } from "./endpoint"

export const contact = async (name: string, email: string, subject: string, message: string): Promise<Response> => {
    const request = new Request(
        `${ENDPOINT}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message,
            })
        }
    );
    const response = await fetch(request);
    return response;
}