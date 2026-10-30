"use server";
import {API_URL, TOKEN_NAME} from "@/constants";
import axios from "axios";
import {cookies} from "next/headers";

export async function createLocation(formData: FormData) {
    const token = cookies().get(TOKEN_NAME)?.value;
    if(!token) return;
    let location : any = {};
    let locationLatLong = [0,0];
    for (const key of Array.from(formData.keys())) {
        const value = formData.get(key);
        if (value) {
            if(key==="locationLat"){
                locationLatLong[0] = +value;
            }else if (key==="locationLng"){
                locationLatLong[1] = +value;
            }else if (key==="manager"){
                location.manager = {managerId: value};
            }else {
                location[key] = value;
            }
        }
    }

    location.locationLatLong = locationLatLong;
    await axios.post(`${API_URL}/location`, location, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
