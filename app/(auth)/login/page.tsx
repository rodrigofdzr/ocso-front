'use client';
import {Button, Input, Link, Spinner} from "@nextui-org/react";
import {API_URL} from "@/constants";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function LoginPage() {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e :  React.FormEvent<HTMLFormElement>) => {
        setSubmitting(true);
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    let authData: any = {}
        authData.userEmail = formData.get("userEmail");
        authData.userPassword = formData.get("userPassword");
    try{
        const response = await axios.post(`${API_URL}/auth/login`, {
            ...authData
        }, {
            withCredentials: true,
        });
        console.log(response.data);
        if(response.status === 201) router.push("/dashboard");
        setSubmitting(false);
    }catch(e){
        setSubmitting(false);
    }
    return;
    }
    return (
        <form className="bg-orange-500 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
            <p className="text-2xl my-4 text-white">
                Iniciar sesión
            </p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm"/>
                <Input label="Password" name="userPassword" type="password" isRequired={true} size="sm"/>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button color="primary" type="submit" isDisabled={submitting}>{submitting ? "Enviando..." : "Iniciar sesión"}</Button>
            </div>
            <p className="text-white">¿No tienes cuenta? <Link href="/signup" className="text-red-600 underline">Regístrate</Link></p>
        </form>
    )
}