var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sp2hpaddPage } from './sp2hpadd';
var Sp2hpaddPageModule = /** @class */ (function () {
    function Sp2hpaddPageModule() {
    }
    Sp2hpaddPageModule = __decorate([
        NgModule({
            declarations: [
                Sp2hpaddPage,
            ],
            imports: [
                IonicPageModule.forChild(Sp2hpaddPage),
            ],
        })
    ], Sp2hpaddPageModule);
    return Sp2hpaddPageModule;
}());
export { Sp2hpaddPageModule };
//# sourceMappingURL=sp2hpadd.module.js.map