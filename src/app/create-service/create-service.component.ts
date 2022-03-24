import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { Service } from '../service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  service: Service = new Service();
  constructor(private servicesService: ServicesService,private router: Router) { }

  ngOnInit(): void {
  }
  saveService() {
    this.servicesService.createService(this.service).subscribe(data=>{
      console.log(data);
      this.goToServiceList();
    },
    error => console.log(error));
  }

  goToServiceList() {
     this.router.navigate(['/services'])

  }

  OnSubmit() {
    console.log(this.service);
    this.saveService();
  }
}
