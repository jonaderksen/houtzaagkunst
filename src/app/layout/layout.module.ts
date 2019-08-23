import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    PageComponent
  ]
})
export class LayoutModule {

}
