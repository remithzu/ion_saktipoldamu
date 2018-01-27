var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sp2hpformPage } from './sp2hpform';
var Sp2hpformPageModule = /** @class */ (function () {
    function Sp2hpformPageModule() {
    }
    Sp2hpformPageModule = __decorate([
        NgModule({
            declarations: [
                Sp2hpformPage,
            ],
            imports: [
                IonicPageModule.forChild(Sp2hpformPage),
            ],
        })
    ], Sp2hpformPageModule);
    return Sp2hpformPageModule;
}());
export { Sp2hpformPageModule };
//# sourceMappingURL=sp2hpform.module.js.map