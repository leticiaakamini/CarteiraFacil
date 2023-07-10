(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 6860:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageRoutingModule: () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 8221);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
let LoginPageRoutingModule = class LoginPageRoutingModule {};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LoginPageRoutingModule);


/***/ }),

/***/ 7660:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageModule: () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 8221);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 6860);







let LoginPageModule = class LoginPageModule {};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  exports: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage]
})], LoginPageModule);


/***/ }),

/***/ 8221:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 1720);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ 4606);
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario */ 3421);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 2288);


var _class;









let LoginPage = (_class = class LoginPage {
  constructor(formBuilder, service, router, alerta) {
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "formBuilder", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "service", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "router", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alerta", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "usuario", new _usuario__WEBPACK_IMPORTED_MODULE_5__.Usuario());
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "form", void 0);
    this.formBuilder = formBuilder;
    this.service = service;
    this.router = router;
    this.alerta = alerta;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [null],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)]]
    });
  }
  fazerLogin() {
    this.service.fazerLogin(this.usuario).subscribe(() => {
      this.service.usuarioAutenticado = true;
      this.navegar('/home');
    }, () => this.mostrarAlertaErro());
    // try{
    //   await this.service.fazerLogin(this.usuario);
    //   this.navegar('/home');      
    // } catch (error) {
    //   alert(error);
    //   //this.mostrarAlertaErro();
    // }
  }

  navegar(pagina) {
    this.router.navigate([pagina]);
  }
  mostrarAlertaErro() {
    var _this = this;
    return (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alerta.create({
        message: 'Email ou senha incorretos! Se você não possui uma conta, é necessário se cadastrar.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder
}, {
  type: _auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}]), _class);
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], LoginPage);


/***/ }),

/***/ 3421:
/*!**********************************!*\
  !*** ./src/app/login/usuario.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Usuario: () => (/* binding */ Usuario)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);

class Usuario {
  constructor() {
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "id", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "email", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "senha", void 0);
  }
}

/***/ }),

/***/ 1720:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: "Bitter", serif;
}

ion-content {
  --background: linear-gradient(to top, #33cccc 0%, #006666 100%);
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 10px;
  padding-left: 10px;
}

h1 {
  color: #fff;
  margin-top: 0;
  margin-bottom: 60px;
}

ion-list {
  --ion-item-background: transparent;
  margin: 0 20px;
}

ion-list ion-item {
  margin-bottom: 15px;
  --border-color: #004b4d;
}

.legenda {
  color: #fff;
  font-weight: 300;
}

#botao-entrar {
  color: #fff;
  --background: #004b4d;
  font-weight: 300;
  text-transform: uppercase;
  margin-top: 40px;
  margin-bottom: 20px;
}

#botao-entrar:hover {
  color: #000;
  transition: all 300ms ease-in-out;
}

ion-button[fill=outline] {
  --border-color: #004b4d;
  color: #004b4d;
  text-transform: uppercase;
}

ion-button[fill=outline]:hover {
  color: #fff;
  transition: all 300ms ease-in-out;
}`, "",{"version":3,"sources":["webpack://./src/app/login/login.page.scss"],"names":[],"mappings":"AAAA;EACE,4BAAA;AACF;;AAEA;EACE,+DAAA;AACF;;AAEA;EACE,kBAAA;EACA,kBAAA;EACA,OAAA;EACA,QAAA;EACA,QAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,kCAAA;EACA,cAAA;AACF;;AAEA;EACE,mBAAA;EACA,uBAAA;AACF;;AAEA;EACE,WAAA;EACA,gBAAA;AACF;;AAEA;EACE,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,yBAAA;EACA,gBAAA;EACA,mBAAA;AACF;;AAEA;EACE,WAAA;EACA,iCAAA;AACF;;AAEA;EACE,uBAAA;EACA,cAAA;EACA,yBAAA;AACF;;AAEA;EACE,WAAA;EACA,iCAAA;AACF","sourcesContent":["*{\n  font-family: 'Bitter', serif;\n}\n\nion-content{\n  --background: linear-gradient(to top, #33cccc 0%, #006666 100%); \n}\n \n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  padding-right: 10px;\n  padding-left: 10px; \n}\n\nh1{ \n  color: #fff;\n  margin-top: 0;\n  margin-bottom: 60px;\n}\n\nion-list{\n  --ion-item-background: transparent;\n  margin: 0 20px;\n}\n\nion-list ion-item{\n  margin-bottom: 15px;\n  --border-color: #004b4d;\n}\n\n.legenda{\n  color: #fff;\n  font-weight: 300;\n}\n\n#botao-entrar{\n  color:#fff;\n  --background: #004b4d;\n  font-weight: 300;\n  text-transform: uppercase;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n\n#botao-entrar:hover{\n  color:#000;\n  transition: all 300ms ease-in-out;\n}\n\nion-button[fill='outline']{\n  --border-color: #004b4d;\n  color: #004b4d;\n  text-transform: uppercase;\n}\n\nion-button[fill='outline']:hover{\n  color: #fff;\n  transition: all 300ms ease-in-out;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\n  <div id=\"container\">\n    <form [formGroup]=\"form\">\n      <h1>CARTEIRA FÁCIL</h1>\n      <ion-list>\n        <ion-item>\n          <ion-label class=\"legenda\">Email</ion-label>\n          <ion-input [(ngModel)]=\"usuario.email\" type=\"email\" formControlName=\"email\">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label class=\"legenda\">Senha</ion-label>\n          <ion-input [(ngModel)]=\"usuario.senha\" type=\"password\" formControlName=\"senha\">\n          </ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-button id=\"botao-entrar\" type=\"submit\" size=\"full\" shape=\"round\" (click)=\"fazerLogin()\">\n        Entrar\n      </ion-button>\n      <ion-button size=\"full\" shape=\"round\" fill=\"outline\" (click)=\"navegar('/cadastro')\">\n        Criar nova conta\n      </ion-button>\n    </form>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map