var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Menu09Page } from './menu09';
var Menu09PageModule = /** @class */ (function () {
    function Menu09PageModule() {
    }
    Menu09PageModule = __decorate([
        NgModule({
            declarations: [
                Menu09Page,
            ],
            imports: [
                IonicPageModule.forChild(Menu09Page),
            ],
        })
    ], Menu09PageModule);
    return Menu09PageModule;
}());
export { Menu09PageModule };
//# sourceMappingURL=menu09.module.js.map