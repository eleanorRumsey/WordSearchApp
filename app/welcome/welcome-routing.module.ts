import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { WelcomeComponent } from "./welcome.component";
import { HomeComponent } from "~/home/home.component";

const routes: Routes = [
    { path: "", component: WelcomeComponent },
    { path: "home", component: HomeComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class WelcomeRoutingModule { }
