import EmployeeLocation from "@/app/dashboard/@locations/_components/EmployeeLocation";

export default function DashboardPage({
                                          searchParams,
                                      }: {
    searchParams: {[key: string]: string | string[] | undefined}}){
    return (
        <>
            <div className="h-full w-4/12 bg-red-100">
                <div className="h-[90vh] overflow-hidden overflow-y-auto first:mt-0 last:mb-0">{
                    searchParams.store ? (
                        <EmployeeLocation store={searchParams?.store} />
                    ): <p className="w-full text-xl px-2 text-center mt-10">"Seleccione una tienda para ver los empleados"</p>
                }
                </div>
            </div>
        </>
    );
}
