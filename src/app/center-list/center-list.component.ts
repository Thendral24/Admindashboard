import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Center } from '../center';
import { CenterService } from '../center.service';


@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.css']
})
export class CenterListComponent implements OnInit {
  title='List of centers';

  centers!: Center[];

  

  constructor(private centerService: CenterService,private router: Router) { }

  ngOnInit(): void {
    this.getCenters();
  }   
  
  private getCenters(){
    this.centerService.getCentersList().subscribe(data =>{
      this.centers=data;
    });
  }

   centerDetails(id: number) {
     this.router.navigate(['center-details', id]);
  }
  updateCenter(id: number) {
    this.router.navigate(['update-center', id ]);
 }
   deleteCenter(id: number) {
    this.centerService.deleteCenter(id).subscribe(data => {
       console.log(data);
      this.getCenters();
     })
  }

  
}