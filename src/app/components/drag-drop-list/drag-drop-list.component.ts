import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DashboardComponent } from "../dashboard/dashboard.component";
@Component({
  selector: 'app-drag-drop-list',
  standalone: true,
  imports: [NgFor, DragDropModule, MatButtonToggleModule, DashboardComponent],
  templateUrl: './drag-drop-list.component.html',
  styleUrl: './drag-drop-list.component.css'
})
export class DragDropListComponent {
  items = ["Banana","Melância","Maracujá","Mamão","Abacate"]
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>, array:string[]){
    const previousIndex = event.previousIndex
    const currentIndex = event.currentIndex

    moveItemInArray(array, previousIndex, currentIndex)


  }


}
