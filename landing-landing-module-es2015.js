(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function LandingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("userName", post_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("@username", post_r1.id, "", post_r1.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.body);
} }
class LandingComponent {
    constructor(serv) {
        this.serv = serv;
    }
    ngOnInit() {
        this.subscribe = this.serv.getValues().subscribe(res => {
            this.posts = res;
        });
        this.subscribe = this.serv.getCommentsValues().subscribe(ress => {
            this.comments = ress;
        });
    }
    ngOnDestroy() {
        this.subscribe.unsubscribe();
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 3, vars: 1, consts: [[1, "container", "postsComponent"], [1, "row"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "item"], [1, "card"], [1, "header"], ["src", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"], [1, "user"], [1, "username"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "footer", "text-center"], [1, "col-4"], [1, "icon"], [1, "fa", "fa-heart"], [1, "fa", "fa-retweet"], [1, "fa", "fa-comment"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LandingComponent_div_2_Template, 25, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".card[_ngcontent-%COMP%]{\r\n    width: 65%;\r\n    margin: 5px auto;\r\n    background-color: #FFF;\r\n}\r\n.postsComponent[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  \r\n}\r\n.card[_ngcontent-%COMP%]:hover{\r\n    background-color: #f5f8fa;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n    float: left;\r\n    margin-right: 10px;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    padding: 10px 0px 0 10px;\r\n}\r\nspan.user[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n    font-size: 17px;\r\n    color:#14171a;\r\n}\r\nspan.username[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    color: #616161;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n    padding-left: 70px;\r\n    margin-top: -45px;\r\n}\r\n.footer[_ngcontent-%COMP%]{\r\n    padding: 0 0 15px 0;\r\n}\r\n.footer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\ncursor: pointer;\r\nfont-size: 18px;\r\ncolor:#8e43d2;\r\ntransition: 0.3s;\r\n}\r\n.footer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n    font-size: 21px;\r\n}\r\n@media(max-width:768px){\r\n    .card[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n      \r\n    }\r\n}\r\n@media(max-width:330px){\r\n    .card-body[_ngcontent-%COMP%]{\r\n        padding-left: 10px;\r\n        margin-top: 0px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsZUFBZTtBQUNmLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJO1FBQ0ksV0FBVzs7SUFFZjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG59XHJcbi5wb3N0c0NvbXBvbmVudHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgXHJcbn1cclxuLmNhcmQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAwIDEwcHg7XHJcbn1cclxuXHJcbnNwYW4udXNlcntcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjojMTQxNzFhO1xyXG59XHJcbnNwYW4udXNlcm5hbWV7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM2MTYxNjE7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICAgIHBhZGRpbmctbGVmdDogNzBweDtcclxuICAgIG1hcmdpbi10b3A6IC00NXB4O1xyXG59XHJcbi5mb290ZXJ7XHJcbiAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xyXG59XHJcbi5mb290ZXIgLmljb24gaXtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG5mb250LXNpemU6IDE4cHg7XHJcbmNvbG9yOiM4ZTQzZDI7XHJcbnRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuLmZvb3RlciAuaWNvbiBpOmhvdmVye1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6MzMwcHgpe1xyXG4gICAgLmNhcmQtYm9keXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return [{ type: _services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.component */ "./src/app/landing/landing.component.ts");






const routes = [
    { path: '**', component: _landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] }
];
class LandingModule {
}
LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingModule });
LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingModule_Factory(t) { return new (t || LandingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=landing-landing-module-es2015.js.map