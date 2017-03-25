/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {NavBarComponent} from './navbar.component';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home.component';

@RouteConfig([
    {path:'/home',name:'Home',component:HomeComponent,useAsDefault:true},
    {path:'/*other',name:'Other',redirectTo:['Home']}
])

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        
    
    `,
    directives:[NavBarComponent,ROUTER_DIRECTIVES]
})
export class AppComponent {
    constructor(){
    }
}