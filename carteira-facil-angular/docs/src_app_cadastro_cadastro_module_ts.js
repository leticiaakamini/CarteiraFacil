(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cadastro_cadastro_module_ts"],{

/***/ 8224:
/*!*****************************************************!*\
  !*** ./src/app/cadastro/cadastro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CadastroPageRoutingModule: () => (/* binding */ CadastroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro.page */ 7778);




const routes = [{
  path: '',
  component: _cadastro_page__WEBPACK_IMPORTED_MODULE_0__.CadastroPage
}];
let CadastroPageRoutingModule = class CadastroPageRoutingModule {};
CadastroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CadastroPageRoutingModule);


/***/ }),

/***/ 5773:
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CadastroPageModule: () => (/* binding */ CadastroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro-routing.module */ 8224);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page */ 7778);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 6208);








let CadastroPageModule = class CadastroPageModule {};
CadastroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__.CadastroPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
  declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_1__.CadastroPage]
})], CadastroPageModule);


/***/ }),

/***/ 7778:
/*!*******************************************!*\
  !*** ./src/app/cadastro/cadastro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CadastroPage: () => (/* binding */ CadastroPage)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _cadastro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.page.html?ngResource */ 307);
/* harmony import */ var _cadastro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.page.scss?ngResource */ 4830);
/* harmony import */ var _cadastro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cadastro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _services_cadastro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/cadastro.service */ 7341);
/* harmony import */ var _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/validacoes-form */ 7004);
/* harmony import */ var _shared_form_base_form_base_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/form-base/form-base.directive */ 2685);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);


var _class;










let CadastroPage = (_class = class CadastroPage extends _shared_form_base_form_base_directive__WEBPACK_IMPORTED_MODULE_6__.FormBaseDirective {
  //form: FormGroup;
  constructor(formBuilder, service, toastController, location) {
    super();
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "formBuilder", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "service", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toastController", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "location", void 0);
    this.formBuilder = formBuilder;
    this.service = service;
    this.toastController = toastController;
    this.location = location;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [null],
      nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
      telefone: ['', _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__.ValidacoesForm.telefoneValidator],
      senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10)]],
      confirmarSenha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__.ValidacoesForm.igualA('senha')]]
    });
  }
  adicionar() {
    this.service.adicionar(this.form.value).subscribe(() => this.mensagemSucesso(), () => this.mensagemErro());
  }
  mensagemSucesso() {
    var _this = this;
    return (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: 'Cadastro realizado com sucesso!',
        duration: 5000
      });
      yield toast.present();
      _this.cancelar();
    })();
  }
  mensagemErro() {
    var _this2 = this;
    return (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: 'Email já cadastrado!',
        duration: 5000
      });
      yield toast.present();
    })();
  }
  cancelar() {
    this.location.back();
  }
  verificaTelefone(telefone) {
    return !this.form.get(telefone).valid;
  }
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder
}, {
  type: _services_cadastro_service__WEBPACK_IMPORTED_MODULE_4__.CadastroService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location
}]), _class);
CadastroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-cadastro',
  template: _cadastro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [(_cadastro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], CadastroPage);


/***/ }),

/***/ 4830:
/*!********************************************************!*\
  !*** ./src/app/cadastro/cadastro.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  border: 0;
  padding: 0;
  font-family: "Bitter", serif;
}

ion-content {
  --background: linear-gradient(to top, #33cccc 0%, #006666 100%);
}

ion-toolbar {
  --background: none;
  color: #fff;
  text-transform: uppercase;
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

ion-button {
  margin-top: 20px;
}

ion-icon {
  color: rgb(255, 255, 255);
  margin: 10px;
}

h1 {
  color: #fff;
  margin-bottom: 70px;
}

ion-list {
  --ion-item-background: transparent;
  margin: 0 20px;
}

ion-list ion-item {
  margin-bottom: 15px;
  --border-color: #004b4d;
}

ion-button[size=full]:hover {
  color: #fff;
  transition: all 300ms ease-in-out;
}

ion-input {
  font-size: 15px;
}

#botao-cadastro {
  margin-top: 15%;
  padding-left: 20px;
  padding-right: 20px;
  text-transform: uppercase;
  font-weight: 300;
  color: #fff;
  --background: #004b4d;
}`, "",{"version":3,"sources":["webpack://./src/app/cadastro/cadastro.page.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,SAAA;EACA,UAAA;EACA,4BAAA;AACJ;;AAEA;EACI,+DAAA;AACJ;;AAEA;EACI,kBAAA;EACA,WAAA;EACA,yBAAA;AACJ;;AAEA;EACE,kBAAA;EACA,kBAAA;EACA,OAAA;EACA,QAAA;EACA,QAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;AACF;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,yBAAA;EACA,YAAA;AACJ;;AAEA;EACI,WAAA;EACA,mBAAA;AACJ;;AAEA;EACI,kCAAA;EACA,cAAA;AACJ;;AAEA;EACI,mBAAA;EACA,uBAAA;AACJ;;AAEA;EACI,WAAA;EACA,iCAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,WAAA;EACA,qBAAA;AACJ","sourcesContent":["*{\r\n    margin: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    font-family: 'Bitter', serif;\r\n}\r\n\r\nion-content{\r\n    --background: linear-gradient(to top, #33cccc 0%, #006666 100%); \r\n}\r\n\r\nion-toolbar{\r\n    --background: none;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#container{\r\n  text-align: center;\r\n  position: absolute; \r\n  left: 0;\r\n  right: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n}\r\n\r\nion-button{\r\n    margin-top: 20px;\r\n}\r\n\r\nion-icon{\r\n    color: rgb(255, 255, 255);\r\n    margin: 10px;\r\n}\r\n\r\nh1{\r\n    color: #fff;\r\n    margin-bottom: 70px;\r\n}\r\n\r\nion-list {\r\n    --ion-item-background: transparent;\r\n    margin: 0 20px;\r\n}\r\n\r\nion-list ion-item{\r\n    margin-bottom: 15px;\r\n    --border-color: #004b4d;\r\n}\r\n\r\nion-button[size='full']:hover {\r\n    color:#fff;\r\n    transition: all 300ms ease-in-out;\r\n}\r\n\r\nion-input{\r\n    font-size: 15px;\r\n}\r\n\r\n#botao-cadastro{\r\n    margin-top: 15%;\r\n    padding-left: 20px; \r\n    padding-right: 20px;\r\n    text-transform: uppercase;\r\n    font-weight: 300;\r\n    color:#fff;\r\n    --background: #004b4d;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 307:
/*!********************************************************!*\
  !*** ./src/app/cadastro/cadastro.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancelar()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <div id=\"container\">\n    <h1>CARTEIRA FÁCIL</h1>\n    <form [formGroup]=\"form\">\n      <ion-list>\n        <div [ngClass]=\"aplicaCssErro('nome')\"> \n          <ion-item>\n            <ion-input formControlName=\"nome\" placeholder=\"Seu nome\"></ion-input>\n            <app-controle-erro\n              [mostrarErro]=\"verificaValidTouched('nome')\"\n              mensagemErro=\"Nome inválido\">\n            </app-controle-erro>\n          </ion-item>\n        </div>\n        <ion-item>\n          <ion-input formControlName=\"email\" placeholder=\"Seu email\"></ion-input>\n          <app-controle-erro\n            [mostrarErro]=\"verificaValidTouched('email')\"\n            mensagemErro=\"Email inválido\">\n          </app-controle-erro>\n        </ion-item>\n        <ion-item>\n          <ion-input formControlName=\"telefone\" placeholder=\"Seu telefone\"></ion-input>\n          <app-controle-erro\n            [mostrarErro]=\"verificaTelefone('telefone')\"\n            mensagemErro=\"Telefone inválido\">\n          </app-controle-erro>\n        </ion-item>\n        <ion-item>\n          <ion-input id=\"senha\" type=\"password\" formControlName=\"senha\" placeholder=\"Nova senha\"></ion-input>\n          <!-- <app-mensagem-erro [control]=\"$any(form.get('senha'))\" label=\"Senha\"></app-mensagem-erro> -->\n          <app-controle-erro [mostrarErro]=\"verificaSenha('senha')\"\n            mensagemErro=\"Senha inválida!\">\n          </app-controle-erro>\n        </ion-item>\n        <ion-item>\n          <ion-input id=\"confirmarSenha\" type=\"password\" formControlName=\"confirmarSenha\" placeholder=\"Confirmar senha\"></ion-input>\n          <app-controle-erro [mostrarErro]=\"form.get('confirmarSenha').hasError('igualA')\"\n            mensagemErro=\"Senhas não são iguais.\">\n          </app-controle-erro>\n        </ion-item>\n      </ion-list>\n      <ion-button (click)=\"adicionar()\" type=\"submit\" \n        id=\"botao-cadastro\" size=\"full\" shape=\"round\"\n        [disabled]=\"!form.valid\">\n        Cadastre-se\n      </ion-button>\n    </form>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_cadastro_cadastro_module_ts.js.map