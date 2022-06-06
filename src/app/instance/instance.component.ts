import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordcounterApiService } from '../wordcounter-api.service';

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.css']
})
export class InstanceComponent implements OnInit {

  instancesList$!:Observable<any[]>;

  constructor(private service:WordcounterApiService) { }

  ngOnInit(): void {
    this.instancesList$ = this.service.returnAllInstances();
  }

}
