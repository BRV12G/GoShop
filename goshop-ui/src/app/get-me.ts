// server action for fetching current user on home page
"use server";
import { get } from "@/app/common/util/fetch";

export default async function getMe() {
    return get("users/me");
}
