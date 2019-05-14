"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var angular_3 = require("nativescript-ui-calendar/angular");
var angular_4 = require("nativescript-ui-chart/angular");
var angular_5 = require("nativescript-ui-dataform/angular");
var angular_6 = require("nativescript-ui-autocomplete/angular");
var angular_7 = require("nativescript-ui-gauge/angular");
var forms_1 = require("nativescript-angular/forms");
var welcome_routing_module_1 = require("./welcome-routing.module");
var welcome_component_1 = require("./welcome.component");
var home_component_1 = require("~/home/home.component");
var home_routing_module_1 = require("~/home/home-routing.module");
var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        core_1.NgModule({
            imports: [
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUICalendarModule,
                angular_4.NativeScriptUIChartModule,
                angular_5.NativeScriptUIDataFormModule,
                angular_6.NativeScriptUIAutoCompleteTextViewModule,
                angular_7.NativeScriptUIGaugeModule,
                common_1.NativeScriptCommonModule,
                welcome_routing_module_1.WelcomeRoutingModule,
                home_routing_module_1.HomeRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                welcome_component_1.WelcomeComponent,
                home_component_1.HomeComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], WelcomeModule);
    return WelcomeModule;
}());
exports.WelcomeModule = WelcomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWxjb21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsOERBQW9GO0FBQ3BGLDREQUFnRjtBQUNoRiw0REFBZ0Y7QUFDaEYseURBQTBFO0FBQzFFLDREQUFnRjtBQUNoRixnRUFBZ0c7QUFDaEcseURBQTBFO0FBQzFFLG9EQUFxRTtBQUVyRSxtRUFBZ0U7QUFDaEUseURBQXVEO0FBQ3ZELHdEQUFzRDtBQUN0RCxrRUFBK0Q7QUF3Qi9EO0lBQUE7SUFFQSxDQUFDO0lBRlksYUFBYTtRQXRCekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUE4QjtnQkFDOUIsc0NBQTRCO2dCQUM1QixzQ0FBNEI7Z0JBQzVCLG1DQUF5QjtnQkFDekIsc0NBQTRCO2dCQUM1QixrREFBd0M7Z0JBQ3hDLG1DQUF5QjtnQkFDekIsaUNBQXdCO2dCQUN4Qiw2Q0FBb0I7Z0JBQ3BCLHVDQUFpQjtnQkFDakIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG9DQUFnQjtnQkFDaEIsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGFBQWEsQ0FFekI7SUFBRCxvQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBXZWxjb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3dlbGNvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFdlbGNvbWVDb21wb25lbnQgfSBmcm9tIFwiLi93ZWxjb21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCJ+L2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIn4vaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgV2VsY29tZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFdlbGNvbWVDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgV2VsY29tZU1vZHVsZSB7IFxuICAgIFxufVxuIl19