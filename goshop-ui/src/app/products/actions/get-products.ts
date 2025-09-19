// server actions to get products on screen
"use server";

import { get } from "@/app/common/util/fetch";

export default async function getProducts() {
   return get("products");
}
