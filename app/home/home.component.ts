import { Component, OnInit } from "@angular/core";
import { LetterComponent } from "./letter.component";
import { Page, EventData } from "tns-core-modules/ui/page/page";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    private test: string = "Testing";
    private rows: number = 10;
    private cols: number = 10;
    private alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    private words = ["OBJECTIVEC", "VARIABLE", "KOTLIN", "MOBILE", "SWIFT", "JAVA"];
    private selectedLetters: LetterComponent[] = [];
    private foundWords = [];
    private grid: LetterComponent[][] = [[]];
    private validationMessage = "";

    constructor(private router: RouterExtensions) { }

    ngOnInit(): void {
        this.selectedLetters = [];
        this.buildGrid()
    }

    letterClick(col: LetterComponent) {
        this.validationMessage = "";
        
        if (typeof col != undefined) {
            col.clickNum++;
            if (col.clickNum % 2 != 0) { //odd numbers mean it has been selected
                this.selectedLetters.push(col);
                col.indexInSelection = this.selectedLetters.length - 1;
            } else if (col.clickNum > 0) { //it has been unselected
                //find it in selectedLetters, confirm that it is the same letter, and remove it
                let indexToRemove = col.indexInSelection;
                if (this.selectedLetters[indexToRemove].value === col.value) {
                    this.selectedLetters.splice(indexToRemove, 1);

                    //decrement index of all proceeding selected letters
                    for (let i = indexToRemove; i < this.selectedLetters.length; i++) {
                        this.selectedLetters[i].indexInSelection--;
                    }
                }
            }
        }
    }

    validateSelection(): boolean {
        let selectedWord = ""
        let isValid = true;
        for (let letter of this.selectedLetters) {
            selectedWord = selectedWord.concat(letter.value);

            //check that letters appear all in straight row, column, or diagonal
            //row and col differences should always either be 1 or 0
            let i = this.selectedLetters.indexOf(letter);
            if (i > 0) {
                let colDiff = this.selectedLetters[i].col - this.selectedLetters[i - 1].col;
                let rowDiff = this.selectedLetters[i].row - this.selectedLetters[i - 1].row;
                if (colDiff > 1 || colDiff < 0 || rowDiff > 1 || rowDiff < 0) {
                    this.validationMessage = "Not quite! Try again.";
                    isValid = false;
                }
            }

        }

        if(!isValid) {
            for (let letter of this.selectedLetters){
                this.grid[letter.row][letter.col].clickNum = 0;
            }
        }

        this.selectedLetters = [];

        if (isValid) {
            if (typeof this.words.indexOf(selectedWord) !== undefined && this.words.indexOf(selectedWord) > -1) {
                this.foundWords.push(this.words.splice(this.words.indexOf(selectedWord), 1));
                this.validationMessage = "Word found!";

                if (this.words.length === 0) {
                    this.validationMessage = "Congratulations! You found all the words!";
                }

                return true;
            }
        } 
        return false;
    }

    buildGrid() {
        let newGrid = [[]];
        newGrid.length = 0;

        for (let i = 0; i < this.rows; i++) {
            let currentRow = [];
            for (let j = 0; j < this.cols; j++) {
                let rand = this.getRandomInt(26);
                let letter = this.alphabet[rand].toString().toUpperCase();
                let currentSpace = new LetterComponent(false, letter);
                currentSpace.row = i;
                currentSpace.col = j;
                currentRow.push(currentSpace);
            }
            newGrid.push(currentRow);
        }

        this.grid = newGrid;

        this.placeWords();
    }

    placeWords(): void {
        //sort words by length first; longest words will be hardest to place so should be done first

        for (let word of this.words) {
            let wordAsComponents = []
            for (let letter of word) {
                wordAsComponents.push(new LetterComponent(true, letter));
            }

            //randomly determine orientation
            let orientation = this.getRandomInt(3);
            let placedWord = this.getIndexes(wordAsComponents, orientation);

            for (let letter of placedWord) {
                this.grid[letter.row][letter.col] = letter;
            }
        }
    }

    getIndexes(word: LetterComponent[], orientation: number): LetterComponent[] {
        let rowIndex: number = 0;
        let colIndex: number = 0;

        switch (orientation) {
            case 0: { //horizontal
                //need to limit colIndex to make sure word fits
                colIndex = this.getRandomIndex(word);
                //rowIndex can be any index on vertical axis of grid
                rowIndex = this.getRandomInt(this.rows);

                let i = 0;
                while (i < word.length) {
                    let currIndex = this.grid[rowIndex][colIndex];
                    if (typeof currIndex !== 'undefined' && currIndex.value !== word[i].value && currIndex.isInWord) {
                        //restart word, one row down
                        rowIndex = this.getRandomInt(this.rows);
                        colIndex = this.getRandomIndex(word);
                        i = 0;
                        continue;
                    } else {
                        word[i].row = rowIndex;
                        word[i].col = colIndex;
                        colIndex++;
                        i++;
                    }
                }
                break;
            }
            case 1: { //vertical
                //need to limit rowIndex to make sure word fits
                rowIndex = this.getRandomIndex(word);
                //rowIndex can be any index on vertical axis of grid
                colIndex = this.getRandomInt(this.rows);

                let i = 0;
                while (i < word.length) {
                    let currIndex = this.grid[rowIndex][colIndex];
                    if (typeof currIndex !== 'undefined' && currIndex.value !== word[i].value && currIndex.isInWord) {
                        //restart word, one col over
                        colIndex = this.getRandomInt(this.cols);
                        rowIndex = this.getRandomIndex(word);
                        i = 0;
                        continue;
                    } else {
                        word[i].row = rowIndex;
                        word[i].col = colIndex;
                        rowIndex++;
                        i++;
                    }
                }
                break;
            }
            case 2: { //diagonal
                rowIndex = this.getRandomIndex(word);
                colIndex = this.getRandomIndex(word);

                let i = 0;
                while (i < word.length) {
                    let currIndex = this.grid[rowIndex][colIndex];
                    if (typeof currIndex !== 'undefined' && currIndex.value !== word[i].value && currIndex.isInWord) {
                        //restart word, one col over and one row down
                        colIndex = this.getRandomIndex(word);
                        rowIndex = this.getRandomIndex(word);
                        i = 0;
                        continue;
                    } else {
                        word[i].row = rowIndex;
                        word[i].col = colIndex;
                        rowIndex++;
                        colIndex++;
                        i++;
                    }
                }
                break;
            }
            default: {
                break;
            }
        }
        return word;
    }

    getRandomIndex(word: LetterComponent[]): number {
        //assume this.rows = this.cols
        let possibleSpaces = this.rows - word.length
        let index = this.getRandomInt(possibleSpaces + 1);
        return index;
    }

    getRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    returnHome(): void {
        this.router.back();
    }
}
