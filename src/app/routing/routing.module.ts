import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from '../layout/page/page.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { GalleryItemComponent } from '../pages/gallery-item/gallery-item.component';
import { GalleryComponent } from '../pages/gallery/gallery.component';
import { HomeComponent } from '../pages/home/home.component';
import { RoutesEnum } from './routes.enum';


const routes: Routes = [
  {
    path: '', component: PageComponent, children: [
      {path: RoutesEnum.GALLERY, component: GalleryComponent},
      {path: RoutesEnum.GALLERY_ITEM, component: GalleryItemComponent},
      {path: RoutesEnum.CONTACT, component: ContactComponent},
      {path: RoutesEnum.HOME, component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
