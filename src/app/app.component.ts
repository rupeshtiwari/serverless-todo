import { Component, OnInit } from '@angular/core';
import awsmobile from './aws-exports';
import Amplify from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message = '';

  ngOnInit() {
    Amplify.configure(awsmobile);
    console.log('Amplify Initialised');
    this.message = 'Amplify Initialised';
  }
}
