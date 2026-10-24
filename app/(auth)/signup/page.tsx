import {Button, Input, Link} from "@nextui-org/react";

export default function SignupPage() {
    return (
        <div className="bg-orange-500 px-10 py-2 rounded-md">
            <p className="text-2xl my-4">Registrarse en la plataforma</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" type="email" isRequired={true} size="sm"/>
                <Input label="Password" type="password" isRequired={true} size="sm"/>
                <Input label="Confirm Password" type="password" isRequired={true} size="sm"/>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button color="primary">Registrarse</Button>
                <p>¿Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link></p>
            </div>
        </div>
    )
}