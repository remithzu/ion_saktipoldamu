var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Menu10Page } from './menu10';
var Menu10PageModule = /** @class */ (function () {
    function Menu10PageModule() {
    }
    Menu10PageModule = __decorate([
        NgModule({
            declarations: [
                Menu10Page,
            ],
            imports: [
                IonicPageModule.forChild(Menu10Page),
            ],
        })
    ], Menu10PageModule);
    return Menu10PageModule;
}());
export { Menu10PageModule };
//# sourceMappingURL=menu10.module.js.map