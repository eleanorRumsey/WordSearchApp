"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LetterComponent = /** @class */ (function () {
    function LetterComponent(isInWord, value) {
        this.isInWord = false;
        this.value = "";
        this.clickNum = 0;
        this.row = -1;
        this.col = -1;
        this.isInWord = isInWord;
        this.value = value;
        this.clickNum = 0;
    }
    LetterComponent.prototype.ngOnInit = function () {
        this.clickNum = 0;
    };
    LetterComponent = __decorate([
        core_1.Component({
            selector: "Letter",
            moduleId: module.id,
            templateUrl: "./letter.component.html",
            styleUrls: ['./letter.component.css']
        }),
        __metadata("design:paramtypes", [Boolean, String])
    ], LetterComponent);
    return LetterComponent;
}());
exports.LetterComponent = LetterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0dGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxldHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFTbEQ7SUFRQyx5QkFBWSxRQUFpQixFQUFFLEtBQWE7UUFQckMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsUUFBRyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLFFBQUcsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUl2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFoQlcsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDckMsQ0FBQzs7T0FFVyxlQUFlLENBaUIzQjtJQUFELHNCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJMZXR0ZXJcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9sZXR0ZXIuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vbGV0dGVyLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExldHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHB1YmxpYyBpc0luV29yZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWMgdmFsdWU6IHN0cmluZyA9IFwiXCI7XG5cdHB1YmxpYyBjbGlja051bTogbnVtYmVyID0gMDtcblx0cHVibGljIHJvdzogbnVtYmVyID0gLTE7XG5cdHB1YmxpYyBjb2w6IG51bWJlciA9IC0xO1xuXHRwdWJsaWMgaW5kZXhJblNlbGVjdGlvbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGlzSW5Xb3JkOiBib29sZWFuLCB2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5pc0luV29yZCA9IGlzSW5Xb3JkO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmNsaWNrTnVtID0gMDtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuY2xpY2tOdW0gPSAwO1xuXHR9XG59Il19