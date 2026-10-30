import {Button, Input} from "@nextui-org/react";
import {createLocation} from "@/actions/locations/create";
import {API_URL, TOKEN_NAME} from "@/constants";
import {cookies} from "next/headers";
import axios from "axios";
import SelectManager from "@/app/dashboard/@locations/_components/SelectManager";

export default async function FormNewLocation({searchParams}: {searchParams: {[key: string]: string | string[] | undefined}}) {
    if(searchParams.store) return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManagers = await axios.get(`${API_URL}/managers`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const responseLocations = await axios.get(`${API_URL}/location`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return(
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center"> Crear tienda </h1>
            <Input label="Nombre de la tienda" placeholder="Ingrese el nombre de la tienda" name="locationName" />
            <Input label="Direccion" placeholder="Ingrese la direccion" name="locationAddress" />
            <Input label="Latitud" placeholder="Ingrese la latitud" name="locationLat" />
            <Input label="Longitud" placeholder="Ingrese la longitud" name="locationLng" />
            <SelectManager managers={responseManagers.data} locations={responseLocations.data} />
            <Button type="submit" color="primary">Subir</Button>
        </form>
    );
}