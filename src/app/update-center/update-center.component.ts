import { Component, OnInit } from '@angular/core';
import { CenterService } from '../center.service';
import { Center } from '../center';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-center',
  templateUrl: './update-center.component.html',
  styleUrls: ['./update-center.component.css']
})
export class UpdateCenterComponent implements OnInit {


  id!: number;
  center: Center = new Center();
  constructor(private centerService: CenterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.centerService.getCenterById(this.id).subscribe(data => {
      this.center = data;
    }, error => console.log(error));
  }

  OnSubmit(){
    this.centerService.updateCenter(this.id, this.center).subscribe( data =>{
      this.goToCenterList();
    }
    , error => console.log(error));
  }

  goToCenterList(){
    this.router.navigate(['/centers']);
  }
}
