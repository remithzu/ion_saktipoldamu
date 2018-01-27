var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Menu06Page } from './menu06';
var Menu06PageModule = /** @class */ (function () {
    function Menu06PageModule() {
    }
    Menu06PageModule = __decorate([
        NgModule({
            declarations: [
                Menu06Page,
            ],
            imports: [
                IonicPageModule.forChild(Menu06Page),
            ],
        })
    ], Menu06PageModule);
    return Menu06PageModule;
}());
export { Menu06PageModule };
//# sourceMappingURL=menu06.module.js.map