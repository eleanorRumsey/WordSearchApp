import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/welcome", pathMatch: "full" },
    { path: "welcome", loadChildren: "./welcome/welcome.module#WelcomeModule" },
    { path: "grid", loadChildren: "./grid/grid.module#GridModule"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
