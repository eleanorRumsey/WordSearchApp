import { Component, OnInit } from "@angular/core";

@Component({
	selector: "Letter",
	moduleId: module.id,
	templateUrl: "./letter.component.html",
	styleUrls: ['./letter.component.css']
})

export class LetterComponent implements OnInit {
	public isInWord: boolean = false;
	public value: string = "";
	public clickNum: number = 0;
	public row: number = -1;
	public col: number = -1;
	public indexInSelection: number;

	constructor(isInWord: boolean, value: string) {
		this.isInWord = isInWord;
		this.value = value;
		this.clickNum = 0;
	}

	ngOnInit(): void {
		this.clickNum = 0;
	}
}