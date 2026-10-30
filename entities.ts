export interface Location {
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatLong: number[];
    manager?: Manager;
    region?: any;
    employees?: any[];
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

export interface Manager{
    managerId: string;
    managerFullName: string;
    managerSalary: number;
    managerEmail: string;
    managerPhoneNumber: string;
    location: Location;
    user: any;
}