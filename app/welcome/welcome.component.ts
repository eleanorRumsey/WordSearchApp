import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
	selector: "Welcome",
	moduleId: module.id,
	templateUrl: "./welcome.component.html",
	styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{ 

    constructor(private page: Page, private router: Router, private currentRoute: ActivatedRoute) {
        page.actionBarHidden = true;
	}

	ngOnInit(): void {

    }
    
    startGame(): void {
        this.router.navigate(["home"], {relativeTo: this.currentRoute});
    }
}
