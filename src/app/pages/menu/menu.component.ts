import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
  }

  tentar(){
    console.log('tentar');
    this.menuService.getData().subscribe();
  }

}
