import { Component, OnInit } from '@angular/core';
import { Joke } from './joke';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Funny-Jokes';

  constructor(private appService: AppService) {}
  ngOnInit() {
    this.getJokes();
  }

  //get jokes
  getJokes(): void {

    this.appService.getJokes().subscribe((jokes) => {

      console.log('Users: ',jokes);
    });
  }
}
