import axios from "axios";
import {TOKEN_NAME} from "@/constants";
import {cookies} from "next/headers";
import {Location} from "@/entities";
import SelectLocation from "@/app/dashboard/@locations/_components/SelectLocation";

const ConstPage = async() => {
    const userCookies = cookies();
    const token = userCookies.get(TOKEN_NAME)?.value;
    const {data} = await axios.get<Location[]>("http://localhost:4000/location",{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return (
        <div className="w-8/12">
            <div className="w-full flex flex-col items-center h-[90vh] bg-red-50">
                <div className="w-1/2 my-10">
                    <SelectLocation locations={data} />
                </div>
            </div>
        </div>)
}

export default ConstPage;