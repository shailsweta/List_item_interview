import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListserviceService {
  constructor(private http: HttpClient) {}

  private data = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    description: `This is the description for item ${index + 1}`
  }));

  // Simulate API call with pagination
  getPaginatedData(page: number, pageSize: number): Observable<any> {
    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = this.data.slice(startIndex, endIndex);
    
    return of({
      data: paginatedData,
      total: this.data.length
    });
  }
}
