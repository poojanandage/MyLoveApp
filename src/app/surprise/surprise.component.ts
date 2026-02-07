import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surprise',
  standalone: true,
  imports: [],
  templateUrl: './surprise.component.html',
  styleUrl: './surprise.component.scss'
})
export class SurpriseComponent {
constructor(private route : Router){

}
  onHome(){
this.route.navigate(['/'])
  }
}
