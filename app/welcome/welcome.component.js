"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(page, router, currentRoute) {
        this.page = page;
        this.router = router;
        this.currentRoute = currentRoute;
        page.actionBarHidden = true;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.startGame = function () {
        this.router.navigate(["home"], { relativeTo: this.currentRoute });
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: "Welcome",
            moduleId: module.id,
            templateUrl: "./welcome.component.html",
            styleUrls: ['./welcome.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, router_1.ActivatedRoute])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsMENBQXlEO0FBU3pEO0lBRUksMEJBQW9CLElBQVUsRUFBVSxNQUFjLEVBQVUsWUFBNEI7UUFBeEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDeEYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFFRyxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQVpRLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdEMsQ0FBQzt5Q0FHNEIsV0FBSSxFQUFrQixlQUFNLEVBQXdCLHVCQUFjO09BRm5GLGdCQUFnQixDQWE1QjtJQUFELHVCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJXZWxjb21lXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vd2VsY29tZS5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi93ZWxjb21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXZWxjb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0eyBcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjdXJyZW50Um91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgfVxuICAgIFxuICAgIHN0YXJ0R2FtZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiXSwge3JlbGF0aXZlVG86IHRoaXMuY3VycmVudFJvdXRlfSk7XG4gICAgfVxufVxuIl19