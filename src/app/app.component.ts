import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ListserviceService } from './listservice.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatInputModule, MatButtonModule,MatIconModule,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource = new MatTableDataSource<any>();
  // items: any[] = [];
  searchQuery: string = '';
  // pageSize: number = 10;
  pageIndex: number = 0;
  totalItems: number = 0;
  pageSize: number = 10;  // Items per page
  currentPage: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private itemService: ListserviceService){}

  ngOnInit(): void {
    // Create a mock list of items
    // this.items = Array.from({ length: 100 }, (_, index) => ({
    //   id: index + 1,
    //   name: `Item ${index + 1}`,
    //   description: `This is the description for item ${index + 1}`
    // }));
    // this.dataSource.data = this.items;
    this.loadData();
    
  }
  loadData() {
    // Fetch paginated data from the service
    this.itemService.getPaginatedData(this.currentPage, this.pageSize).subscribe((response) => {
      this.dataSource.data = response.data;
      this.totalItems = response.total;
    });
  }
// getItem(){
//   this.service?.getItems().subscribe(res=>{
//     let items=res;
//     console.log(items)
//   })
// }
  // Method to filter the list based on search query
  applyFilter(): void {
    this.dataSource.filter = this.searchQuery.trim().toLowerCase();
  }

  // Method to handle pagination changes
  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  // Update the page data after filter and pagination
  updatePageData(): void {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    // this.dataSource.data = this.totalItems.slice(start, end);
  }

}
