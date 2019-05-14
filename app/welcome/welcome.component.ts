import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
	selector: "Welcome",
	moduleId: module.id,
	templateUrl: "./welcome.component.html",
	styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{ 

    constructor(private page: Page, private router: RouterExtensions, private currentRoute: ActivatedRoute) {
        page.actionBarHidden = true;
	}

	ngOnInit(): void {}
    
    startGame(): void {
        this.router.navigate(["grid"], {
            relativeTo: this.currentRoute, 
            animated: true, 
            transition: { 
                name: "slideLeft",
                duration: 300,
                curve: "easeIn"
            }
        });
    }
}
