import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { GridComponent } from "./grid.component";
import { WelcomeComponent } from "~/welcome/welcome.component";

const routes: Routes = [
    { path: "grid", component: GridComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class GridRoutingModule { }
