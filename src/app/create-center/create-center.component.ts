import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Center } from '../center';
import { CenterService } from '../center.service';

@Component({
  selector: 'app-create-center',
  templateUrl: './create-center.component.html',
  styleUrls: ['./create-center.component.css']
})
export class CreateCenterComponent implements OnInit {

  center: Center = new Center();

  constructor(private centerService: CenterService,private router: Router) { }

  ngOnInit(): void {
  }
  saveCenter() {
    this.centerService.createCenter(this.center).subscribe(data=>{
      console.log(data);
      this.goToCenterList();
    },
    error => console.log(error));
  }

  goToCenterList() {
     this.router.navigate(['/centers'])

  }

  OnSubmit() {
    console.log(this.center);
    this.saveCenter();
  }
}
