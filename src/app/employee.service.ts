import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private baseUrl = "http://localhost:8080/api"
  constructor(private httpClient:HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}/employee`)
  }
  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/addnew`,employee)
  }
  getEmployeeById(id:string):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/employee/${id}`);
  }
  updateEmployee(id:string,employee:Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/update/${id}`,employee);
  }
  deleteEmployee(id:string):Observable<Object>{
     return this.httpClient.delete(`${this.baseUrl}/delete/${id}`,{responseType: 'text'})
  }
}
