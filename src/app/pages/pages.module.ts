import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { ContactComponent } from './contact/contact.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:[
    ComponentsModule
  ],
  declarations: [
    HomeComponent,
    GalleryComponent,
    GalleryItemComponent,
    ContactComponent
  ]
})
export class PagesModule {

}
