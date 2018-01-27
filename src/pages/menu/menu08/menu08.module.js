var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Menu08Page } from './menu08';
var Menu08PageModule = /** @class */ (function () {
    function Menu08PageModule() {
    }
    Menu08PageModule = __decorate([
        NgModule({
            declarations: [
                Menu08Page,
            ],
            imports: [
                IonicPageModule.forChild(Menu08Page),
            ],
        })
    ], Menu08PageModule);
    return Menu08PageModule;
}());
export { Menu08PageModule };
//# sourceMappingURL=menu08.module.js.map