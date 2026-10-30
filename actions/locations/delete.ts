"use server";

import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {API_URL, TOKEN_NAME} from "@/constants";
import axios from "axios";

export default async function deleteLocation(formData: FormData) {
    const locationId = formData.get("deleteValue");
    if(!locationId) return;
    const token = cookies().get(TOKEN_NAME)?.value;
    await axios.delete(`${API_URL}/location/${locationId}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    redirect("/dashboard");
}
