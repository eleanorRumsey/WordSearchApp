"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(page, router, currentRoute) {
        this.page = page;
        this.router = router;
        this.currentRoute = currentRoute;
        page.actionBarHidden = true;
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent.prototype.startGame = function () {
        this.router.navigate(["grid"], {
            relativeTo: this.currentRoute,
            animated: true,
            transition: {
                name: "slideLeft",
                duration: 300,
                curve: "easeIn"
            }
        });
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: "Welcome",
            moduleId: module.id,
            templateUrl: "./welcome.component.html",
            styleUrls: ['./welcome.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_2.RouterExtensions, router_1.ActivatedRoute])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsMENBQXlEO0FBQ3pELHNEQUErRDtBQVMvRDtJQUVJLDBCQUFvQixJQUFVLEVBQVUsTUFBd0IsRUFBVSxZQUE0QjtRQUFsRixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDbEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELG1DQUFRLEdBQVIsY0FBa0IsQ0FBQztJQUVoQixvQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDN0IsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWxCUSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3RDLENBQUM7eUNBRzRCLFdBQUksRUFBa0IseUJBQWdCLEVBQXdCLHVCQUFjO09BRjdGLGdCQUFnQixDQW1CNUI7SUFBRCx1QkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIldlbGNvbWVcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi93ZWxjb21lLmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL3dlbGNvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdlbGNvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7IFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBjdXJyZW50Um91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge31cbiAgICBcbiAgICBzdGFydEdhbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImdyaWRcIl0sIHtcbiAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMuY3VycmVudFJvdXRlLCBcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLCBcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHsgXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==