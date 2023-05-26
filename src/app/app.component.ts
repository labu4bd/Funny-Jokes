import { Component, OnInit, Inject } from '@angular/core';
import { Joke } from './joke';
import { AppService } from './app.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  joke: string;
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Funny-Jokes';
  joke: string = 'Here is a Joke';

  constructor(private appService: AppService, public dialog: MatDialog) {}
  ngOnInit() {
    //this.getJokes();
  }

  //get jokes
  getJokes(): void {

    this.appService.getJokes().subscribe((jokes) => {

      console.log('Joke: ',jokes);
    });
  }
  openDialogWithJoke(enterAnimationDuration: string, exitAnimationDuration: string): void{
    this.appService.getJokes().subscribe((jokes) => {
      this.joke=jokes[0].joke;
      console.log('Joke: ',jokes);
      this.dialog.open(ShowJokeDialog, {
        data: {joke: this.joke},
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    });
    
  }
}


@Component({
  selector: 'show-joke-dialog',
  templateUrl: 'show-joke-dialog.html',
  styleUrls: ['./app.component.css']
})
export class ShowJokeDialog {
  constructor(public dialogRef: MatDialogRef<ShowJokeDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData,) {}
}