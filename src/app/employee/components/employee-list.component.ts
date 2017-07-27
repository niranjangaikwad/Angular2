import { Component } from "@angular/core";

@Component({
    selector: "employee-list",
    templateUrl: "app/employee/views/employee.list.html"
})

export class EmployeeListComponent {
    title:string="Employee Portal";
    subtitle:string="Displaying the list of employees";
    employee:any={
        name: "Niranjan",
        dept: "UI",
        proj: "Angular"
    }
}