import axios from "axios";
import {TOKEN_NAME} from "@/constants";
import {cookies} from "next/headers";
import {Location} from "@/entities";
import SelectLocation from "@/app/dashboard/@locations/_components/SelectLocation";

const ConstPage = async({searchParams} : {
    searchParams: {[key: string]: string | string[] | undefined}})=> {
    const userCookies = cookies();
    const token = userCookies.get(TOKEN_NAME)?.value;
    let {data} = await axios.get<Location[]>("http://localhost:4000/location",{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    data = [
    {
        locationId: 0,
            locationName: "Ninguna",
        locationLatLong: [0,0],
        locationAddress: "No existe"
    },
        ...data
    ]
    return (
        <div className="w-8/12">
            <div className="w-full flex flex-col items-center h-[90vh] bg-red-50">
                <div className="w-1/2 my-10">
                    <SelectLocation locations={data} store={searchParams?.store} />
                </div>
            </div>
        </div>)
}

export default ConstPage;