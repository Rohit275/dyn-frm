import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cmpService: ComponentService
  ) {}
  public id: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      let currentId = params.get('id');
      this.id = currentId;
      // this.cmpService.currentId = currentId;
    });
    console.log(this.id);
  }

  createForm() {
    console.log('ID: ', this.id);
    this.router.navigate(['/user', this.id, 'create']);
  }
  viewForm() {
    console.log('ID: ', this.id);

    this.router.navigate(['/user', this.id, 'view']);
  }
}
