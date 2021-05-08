import { Component } from '@angular/core';
import {User} from './user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularforms';
  topics=['angular','React js','vu js'];
  user=new User("vamsi", "uideveloper@gamilcom", 9866164308,"","morning");
}
