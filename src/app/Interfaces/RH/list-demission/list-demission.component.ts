import { Component } from '@angular/core';
import { Demission } from 'src/app/Classes/demission';
import { DemissionServiceService } from 'src/app/Services/demission-service.service';

@Component({
  selector: 'app-list-demission',
  templateUrl: './list-demission.component.html',
  styleUrls: ['./list-demission.component.css']
})
export class ListDemissionComponent {
  demissions: Demission[] = [];
  constructor(private demissionSer: DemissionServiceService) {}

}
