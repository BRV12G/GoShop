// server action
"use server";

import { API_URL } from "@/app/constants/api";
import { getErrorMessage } from "@/app/util/errors";
import { redirect } from "next/navigation";
import { post } from "@/app/util/fetch";

export default async function createUser(
    _prevState: any,
    formData: FormData
) {
   const { error } = await post("users", formData)
   if (error) {
    return { error };
   }
   redirect("/")

}
