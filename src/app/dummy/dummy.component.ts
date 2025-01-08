import { Component } from '@angular/core';


@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent {

  list:any[]= [
    {
      id: 1,
      name: 'shailesh'
    },
    {
      id: 2,
      name: 'nitin'
    },
    {
      id: 3,
      name: 'rahul'
    },
    {
      id: 4,
      name: 'amit'
    },
    {
      id: 5,
      name: 'ajay'
    }
  ] 
  constructor(){

  }
 
 

}
