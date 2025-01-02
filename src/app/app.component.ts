import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatInputModule, MatButtonModule,MatIconModule,FormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource = new MatTableDataSource<any>();
  items: any[] = [];
  searchQuery: string = '';
  pageSize: number = 10;
  pageIndex: number = 0;

  ngOnInit(): void {
    // Create a mock list of items
    this.items = Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      name: `Item ${index + 1}`,
      description: `This is the description for item ${index + 1}`
    }));
    this.dataSource.data = this.items;
  }

  // Method to filter the list based on search query
  applyFilter(): void {
    this.dataSource.filter = this.searchQuery.trim().toLowerCase();
  }

  // Method to handle pagination changes
  onPageChanged(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePageData();
  }

  // Update the page data after filter and pagination
  updatePageData(): void {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.dataSource.data = this.items.slice(start, end);
  }

}
