import { Component } from '@angular/core';

@Component({
  selector: 'app-home-emp',
  templateUrl: './home-emp.component.html',
  styleUrls: ['./home-emp.component.css']
})
export class HomeEmpComponent {
  testDA:boolean=false;
  testSupp:boolean=false;
  testCong:boolean=false;
  openDA()
  {
    this.testDA=!this.testDA;
    
  }
  openSupp()
  {
    this.testSupp=!this.testSupp;
    
  }
  openCong()
  {
    this.testCong=!this.testCong;
    
  }

}

