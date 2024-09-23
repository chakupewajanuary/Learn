import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';


@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports:[ProductCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent   {
  
  constructor() {}


}
