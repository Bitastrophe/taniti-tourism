import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { Attractions } from './attractions/attractions';
import { Lodging } from './lodging/lodging';
import { IslandCalendar } from './island-calendar/island-calendar';
import { ContactUs } from './contact-us/contact-us';
import { Footer } from './footer/footer';

export const routes: Routes = [
    { path: 'header', component: Header },
    { path: 'home', component: Home, title:'Taniti Tourism | Home' },
    { path: 'attractions', component: Attractions, title:'Taniti Tourism | Atrractions' },
    { path: 'lodging', component: Lodging, title:'Taniti Tourism | Lodging' },
    { path: 'islandcalendar', component: IslandCalendar, title:'Taniti Tourism | Island Calendar' },
    { path: 'contactus', component: ContactUs, title:'Taniti Tourism | Contact Us' },
    { path: 'footer', component: Footer },
    { path: '' , redirectTo:'/home', pathMatch:'full' }
];
