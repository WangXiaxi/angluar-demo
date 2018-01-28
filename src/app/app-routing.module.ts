import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsContentComponent } from './components/news-content/news-content.component';
import {ContentComponent } from './components/content/content.component';
import {HeaderComponent } from './components/header/header.component';
import {FooterComponent } from './components/footer/footer.component';

import {HeaderFirstComponent } from './components/header/header-first/header-first.component';
import {HeaderTwoComponent } from './components/header/header-two/header-two.component';


const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent,
    children: [
      {path: 'HeaderFirst', component: HeaderFirstComponent},
      {path: 'HeaderTwo', component: HeaderFirstComponent},
      {
        path: '**', /*任意的路由 不存在路由*/
        // component:HomeComponent
        redirectTo:'HeaderFirst'
      }
    ]
  },
  {
    path: 'content', 
    component: ContentComponent
  },
  {path: 'footer', component: FooterComponent},
  {path: 'NewsContent/:id', component: NewsContentComponent},
  {path: '', redirectTo: 'content', pathMatch: 'full'}, // 空路由 
  {
    path: '**', /*任意的路由 不存在路由*/
    // component:HomeComponent
    redirectTo:'header'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
