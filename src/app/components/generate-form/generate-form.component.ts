import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ReturnStatement } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.css'],
})
export class GenerateFormComponent implements OnInit {
  Field: any;
  Title: any;
  isSubmitted: boolean = false;
  constructor(private componentService: ComponentService) {
    //console.log(this.route.getCurrentNavigation().extras.state);
  }

  //@Input() Field: any;

  ngOnInit(): void {
    this.Field = this.componentService.values;
    this.Title = this.Field[0].Title;
    console.log('Field val : ', this.Field);
  }

  isError(name: any) {
    console.log('Name:', name);
    return name.invalid;
  }

  isDragDrop(object: any): object is CdkDragDrop<string[]> {
    return 'previousIndex' in object;
  }

  drop(event: CdkDragDrop<string[]>) {
    // console.log('Field:', this.Field, event.previousIndex, event.currentIndex);
    // moveItemInArray(this.Field, event.previousIndex, event.currentIndex);
    if (this.isDragDrop(event)) {
      moveItemInArray(this.Field, event.previousIndex, event.currentIndex);
    }
  }

  onSubmit(f: NgForm) {
    this.isSubmitted = true;
    // this.generateFormService.addForm(this.Title, this.Field);
  }
}
