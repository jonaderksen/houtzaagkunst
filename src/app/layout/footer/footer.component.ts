import { Component, Input } from '@angular/core';
import { MenuItem } from '../../domain/layout/menu-item.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @Input() text = '';
  @Input() menuItems: MenuItem[] = [];
}
