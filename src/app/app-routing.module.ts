import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkilsComponent } from './skils/skils.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', component: AboutComponent},
  {path: 'skils',component: SkilsComponent},
  {path: 'education', component: EducationComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0,64]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
