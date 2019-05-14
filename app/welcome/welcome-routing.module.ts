import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { WelcomeComponent } from "./welcome.component";
import { GridComponent } from "~/grid/grid.component";

const routes: Routes = [
    { path: "", component: WelcomeComponent },
    { path: "grid", component: GridComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class WelcomeRoutingModule { }
