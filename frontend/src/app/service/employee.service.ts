import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { HOST_URL } from '../utils/utils';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
   
    private apiUrl = `${HOST_URL}/api/employees`;

    constructor(private http: HttpClient) { }

    getAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.apiUrl);
    }

    getEmployeeById(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.apiUrl}/${id}`);
    }

    addEmployee( employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.apiUrl, employee);
    }
    
    updateEmployee(id: number, employee: Employee): Observable<Employee> {
<<<<<<< HEAD
        return this.http.patch<Employee>(`${this.apiUrl}/${id}`, employee);
=======
        // // Debugging
        // console.log(`${this.apiUrl}/${id}`);
        // console.log("employeeee:", employee);
        return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee);
        // return this.http.patch<Employee>(`${this.apiUrl}/${id}`, employee);
>>>>>>> 1669103b6b7ebc1c0c654c62022a79ee7d7851d1
    }
    

    deleteEmployee(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
