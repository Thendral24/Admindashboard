import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { Service } from '../service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {

  id!: number;
  service: Service = new Service();
  constructor(private servicesService: ServicesService,
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.servicesService.getServiceById(this.id).subscribe(data => {
      this.service = data;
    }, error => console.log(error));
  }

  OnSubmit(){
    this.servicesService.updateService(this.id, this.service).subscribe( data =>{
      this.goToServiceList();
    }
    , error => console.log(error));
  }

  goToServiceList(){
    this.router.navigate(['/services']);
  }
  

}
