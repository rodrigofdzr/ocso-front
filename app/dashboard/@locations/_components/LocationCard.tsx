import {Location} from "@/entities";
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";
import {cookies} from "next/headers";
import {API_URL, TOKEN_NAME} from "@/constants";
import axios from "axios";
import Link from "next/link";

export default async function LocationCard({store}: {store: string | string[] | undefined}) {
    if (!store) return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const {data} = await axios.get<Location>(`${API_URL}/location/${store}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    });
    return (
        <Link>
            <CardHeader>
                <p className="w-full"> Tienda: <b>{data.locationName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className="w-full" > Manager:<Link href={{pathname =  '/dashboard/employees'}} <b>{data.manager?.managerFullName}</b></p></Link>
            </CardBody>
        </Card>
    )
}