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
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.startGame = function () {
        this.router.navigate(["home"], {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsMENBQXlEO0FBQ3pELHNEQUErRDtBQVMvRDtJQUVJLDBCQUFvQixJQUFVLEVBQVUsTUFBd0IsRUFBVSxZQUE0QjtRQUFsRixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDbEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFFRyxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQzdCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsUUFBUTthQUNsQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwQlEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN0QyxDQUFDO3lDQUc0QixXQUFJLEVBQWtCLHlCQUFnQixFQUF3Qix1QkFBYztPQUY3RixnQkFBZ0IsQ0FxQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJXZWxjb21lXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vd2VsY29tZS5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi93ZWxjb21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXZWxjb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0eyBcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgY3VycmVudFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cbiAgICBcbiAgICBzdGFydEdhbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIl0sIHtcbiAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMuY3VycmVudFJvdXRlLCBcbiAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLCBcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHsgXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==