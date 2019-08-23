import { Component } from '@angular/core';
import { MenuItem } from '../../domain/layout/menu-item.interface';
import { RoutesEnum } from '../../routing/routes.enum';

@Component({
  selector: 'app-page',
  templateUrl: './page-component.html'
})
export class PageComponent {
  menuItems: MenuItem[] = [
    {title: 'Home', route: RoutesEnum.HOME},
    {title: 'Gallery', route: RoutesEnum.GALLERY},
    {title: 'Contact', route: RoutesEnum.CONTACT},
  ];
}
