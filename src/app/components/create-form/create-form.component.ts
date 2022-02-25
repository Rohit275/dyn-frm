import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentService } from '../component.service';
import { GenerateFormComponent } from '../generate-form/generate-form.component';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  public field: any[] = [
    {
      id: 1,
      Title: '',
      name: '',
      type: '',
      required: false,
    },
  ];
  constructor(
    private dialog: MatDialog,
    private componentService: ComponentService
  ) {}

  id: any;
  id_isOption: boolean = false;

  ngOnInit(): void {
    this.id = this.componentService.currentId;
  }

  public sample: any[] = ['Male', 'Female'];

  public options: any[] = [];

  currentField: any;

  addAddress() {
    this.field.push({
      id: this.field.length + 1,
      name: '',
      type: '',
      required: false,
    });
  }

  removeAddress(i: number) {
    this.field.splice(i, 1);
  }

  logValue() {
    // this.router.navigate(['/generateform'], { state: this.field });
    // console.log('Options:', this.options);
    // this.router.navigate(['/user', this.id, 'view'], { state: this.field });
    // let view = 'view';
    // this.router.navigate(['../view'], {
    //   relativeTo: this.route,
    //   state: this.field,
    // });

    this.componentService.values = this.field;

    console.log('create-comp', this.field);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(GenerateFormComponent, dialogConfig);
  }

  onAddOpt(id: any) {
    var optid: any;
    var index = id - 1;
    optid = this.field[index].options.length;
    this.field.map((x, i) => {
      if (x.id == id) {
        this.field[i].options.push({ id: optid + 1, Name: '' });
      }
    });
    console.log('Field after adding option :', this.field);
  }

  onDelOption(id: any, i: any) {
    console.log('id:', id, i);

    this.field[id - 1].options.splice(i - 1, 1);
  }

  mySelectHandler(e: any, id: any) {
    var val = [
      { id: '1', Name: '' },
      { id: '2', Name: '' },
    ];
    this.currentField = id - 1;
    console.log('currentField:', this.currentField);
    if (e == 'radio' || e == 'checkbox') {
      this.field.map((x, i) => {
        if (x.id == id) {
          this.field[i].options = val;
        }
      });

      console.log('Fields:', this.field);
    } else if (e == 'text') {
      this.field.map((x, i) => {
        if (x.id == id) {
          this.field[i].chartype = '';
        }
      });
    }
  }
}
