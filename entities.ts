export interface Location {
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatLong: number[];
    manager: any;
    region: any;
    employees: any[];
}

export interface Employee{
    employeeId: string;
    employeeName: string;
    employeelastName: string;
    employeeEmail: string;
    employeePhoneNumber: string;
    employeePhoto?: string;
    location?: Location;
    user?: any;
}