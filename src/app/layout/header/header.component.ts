import { Component, Input } from '@angular/core';
import { MenuItem } from '../../domain/layout/menu-item.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() menuItems: MenuItem[] = [];
}
