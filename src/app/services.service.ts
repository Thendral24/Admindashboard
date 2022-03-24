import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8081/api/v1/services";

  getServicesList(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(`${this.baseURL}`);
  }

  createService(service: Service): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, service);
  }
   getServiceById(id: number): Observable<Service>{
     return this.httpClient.get<Service>(`${this.baseURL}/${id}`);
   }

   updateService(id: number, service: Service): Observable<Object>{
     return this.httpClient.put(`${this.baseURL}/${id}`, service);
   }
   deleteService(id: number): Observable<Object> {
     return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
