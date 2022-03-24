import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-serviceslist',
  templateUrl: './serviceslist.component.html',
  styleUrls: ['./serviceslist.component.css']
})
export class ServiceslistComponent implements OnInit {
  title ='List of Services';
  services!: Service[];
  constructor(private servicesService: ServicesService,private router: Router) { }

  ngOnInit(): void {
    this.getServices();
  }
  private getServices(){
    this.servicesService.getServicesList().subscribe(data =>{
      this.services=data;
    });
  }

   serviceDetails(id: number) {
     this.router.navigate(['service-details', id]);
  }
  updateService(id: number) {
    this.router.navigate(['update-service', id ]);
 }
   deleteService(id: number) {
    this.servicesService.deleteService(id).subscribe(data => {
       console.log(data);
      this.getServices();
     })
  }
}
