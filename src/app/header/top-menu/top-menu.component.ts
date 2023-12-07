import { Component } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {
 topMenuItemsList:string[]=["Help","Exchange & Returns","Order Tracker","SignUp/Login"]
}