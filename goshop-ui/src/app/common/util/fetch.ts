import { API_URL } from "../constants/api";
import { getErrorMessage } from "./errors";
import { cookies } from "next/headers";

export const getHeaders = async () => {
    // Cookie: cookies().toString()
    const cookieStore = await cookies();
    return {
        Cookie: cookieStore.toString()
    };
}
export const post = async (path: string, formData: FormData) => {
     const res = await fetch(`${API_URL}/${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", ...( await getHeaders()),
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });

        const parsedRes = await res.json();
         console.log("NestJS API response:", parsedRes);
        if (!res.ok) {
            return { error: getErrorMessage(parsedRes) };
        }
        return { error: "", data: parsedRes };
}

export const get = async <T>(path: string, tags?: string[]) => {
    const res = await fetch(`${API_URL}/${path}`, {
        headers: { ...( await getHeaders())},
        next: { tags},
    });
    return res.json() as T;
}
