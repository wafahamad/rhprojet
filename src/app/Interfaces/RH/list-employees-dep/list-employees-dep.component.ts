import { Component } from '@angular/core';

@Component({
  selector: 'app-list-employees-dep',
  templateUrl: './list-employees-dep.component.html',
  styleUrls: ['./list-employees-dep.component.css']
})
export class ListEmployeesDepComponent {
  testM: boolean = false;
  openM() {
    this.testM = !this.testM;

  }
}