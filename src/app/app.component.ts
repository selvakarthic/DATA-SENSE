import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ExceptionHandler } from './shared/Exception_Handler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@ExceptionHandler
export class AppComponent implements OnInit {
  title = 'EKFRAZO';
constructor(private navController: NavController){}
ngOnInit(): void {

}

}
