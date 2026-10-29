import axios from "axios";
import {TOKEN_NAME} from "@/constants";
import {cookies} from "next/headers";

const ConstPage = async() => {
    const userCookies = cookies();
    const token = userCookies.get(TOKEN_NAME)?.value;
    const countLocations = await axios.get("http://localhost:4000/location",{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return countLocations?.data.length;
}

export default ConstPage;