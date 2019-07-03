import { Component, OnInit } from '@angular/core';
import awsmobile from '../aws-exports';
import Amplify, { API } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos = [];
  loading = false;

  ngOnInit() {
    Amplify.configure(awsmobile);
    const myInit = {
      // OPTIONAL
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, // OPTIONAL
      response: true
    };
    this.loading = true;
    API.get('sampleCloudApi', '/items', myInit).then(data => {
      this.loading = false;
      this.todos = data;
    });
  }
}
