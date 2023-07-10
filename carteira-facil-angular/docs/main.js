(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 7660)).then(m => m.LoginPageModule)
}, {
  path: 'cadastro',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cadastro_cadastro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cadastro/cadastro.module */ 5773)).then(m => m.CadastroPageModule)
}, {
  path: 'home',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 4320)).then(m => m.HomeModule)
  //canActivate: [AuthGuardService]
}];

let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);

var _class;




let AppComponent = (_class = class AppComponent {
  constructor() {}
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/auth.service */ 4606);
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth-guard.service */ 592);
/* harmony import */ var _gastos_receitas_gastos_receitas_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gastos-receitas/gastos-receitas.module */ 9764);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ 4093);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/pt */ 7595);














(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.registerLocaleData)(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__["default"]);
let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _gastos_receitas_gastos_receitas_module__WEBPACK_IMPORTED_MODULE_4__.GastosReceitasModule],
  providers: [
  // {
  //     provide: RouteReuseStrategy,
  //     useClass: IonicRouteStrategy
  // },
  {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.LOCALE_ID,
    useValue: 'pt-BR'
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__.HashLocationStrategy
  }, _login_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuardService, _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__.HTTP],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 6233:
/*!*******************************************************************************************!*\
  !*** ./src/app/gastos-receitas/components/adicionar-desejo/adicionar-desejo.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdicionarDesejoComponent: () => (/* binding */ AdicionarDesejoComponent)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _adicionar_desejo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adicionar-desejo.component.html?ngResource */ 135);
/* harmony import */ var _adicionar_desejo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adicionar-desejo.component.scss?ngResource */ 6270);
/* harmony import */ var _adicionar_desejo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_adicionar_desejo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_form_base_form_base_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/form-base/form-base.directive */ 2685);
/* harmony import */ var _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/validacoes-form */ 7004);
/* harmony import */ var _services_desejo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/desejo.service */ 9267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);


var _class;











let AdicionarDesejoComponent = (_class = class AdicionarDesejoComponent extends _shared_form_base_form_base_directive__WEBPACK_IMPORTED_MODULE_4__.FormBaseDirective {
  constructor(formBuilder, service, toastController, location, route, cdRef) {
    super();
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "formBuilder", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "service", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toastController", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "location", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "route", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cdRef", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "adicionarOuEditar", '');
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tipoDesejo", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "desejoViagem", false);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totalViagem", 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "totalViagemFormatado", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "prazoMesAno", '');
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "desejoConcluido", 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "camposViagem", [['passagem', ''], ['hospedagem', ''], ['alimentacao', ''], ['transporte', ''], ['compras', ''], ['lazer', ''], ['burocracia', ''], ['gastosExtras', ''], ['total', '']]);
    this.formBuilder = formBuilder;
    this.service = service;
    this.toastController = toastController;
    this.location = location;
    this.route = route;
    this.cdRef = cdRef;
  }
  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }
  ngOnInit() {
    this.tipoAdicionarEditar();
    this.form = this.formBuilder.group({
      id: [null],
      nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      tipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      economizar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__.ValidacoesForm.valorValidator]],
      quantiaEconomizada: ['', _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__.ValidacoesForm.valorValidator],
      valor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__.ValidacoesForm.valorValidator]],
      hospedagem: ['', _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__.ValidacoesForm.valorValidator],
      alimentacao: ['', _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__.ValidacoesForm.valorValidator],
      passagem: ['', _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__.ValidacoesForm.valorValidator],
      transporte: ['', _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__.ValidacoesForm.valorValidator],
      compras: ['', _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__.ValidacoesForm.valorValidator],
      lazer: ['', _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__.ValidacoesForm.valorValidator],
      gastosExtras: ['', _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__.ValidacoesForm.valorValidator],
      burocracia: ['', _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_5__.ValidacoesForm.valorValidator],
      prazo: [''],
      concluido: [0],
      idUsuario: [null]
    });
    if (this.adicionarOuEditar == 'editar') {
      this.service.buscarPorId(this.route.snapshot.params.id).subscribe(resposta => {
        this.form.setValue({
          id: resposta.id,
          nome: resposta.nome,
          tipo: resposta.tipo,
          economizar: resposta.economizar.toFixed(2),
          quantiaEconomizada: resposta.quantiaEconomizada.toFixed(2),
          valor: resposta.valor.toFixed(2),
          hospedagem: resposta.hospedagem.toFixed(2),
          alimentacao: resposta.alimentacao.toFixed(2),
          passagem: resposta.passagem.toFixed(2),
          transporte: resposta.transporte.toFixed(2),
          compras: resposta.compras.toFixed(2),
          lazer: resposta.lazer.toFixed(2),
          gastosExtras: resposta.gastosExtras.toFixed(2),
          burocracia: resposta.burocracia.toFixed(2),
          prazo: resposta.prazo,
          concluido: resposta.concluido,
          idUsuario: resposta.idUsuario
        });
        this.setTipoDesejo(resposta.tipo);
        this.calcularTotalViagem(resposta.hospedagem.toFixed(2), 'hospedagem');
        this.calcularTotalViagem(resposta.alimentacao.toFixed(2), 'alimentacao');
        this.calcularTotalViagem(resposta.passagem.toFixed(2), 'passagem');
        this.calcularTotalViagem(resposta.transporte.toFixed(2), 'transporte');
        this.calcularTotalViagem(resposta.compras.toFixed(2), 'compras');
        this.calcularTotalViagem(resposta.lazer.toFixed(2), 'lazer');
        this.calcularTotalViagem(resposta.gastosExtras.toFixed(2), 'gastosExtras');
        this.calcularTotalViagem(resposta.burocracia.toFixed(2), 'burocracia');
      });
    }
  }
  setTipoDesejo(tipo) {
    this.tipoDesejo = tipo;
    this.escolhaTipoDesejo();
  }
  escolhaTipoDesejo() {
    if (this.tipoDesejo == 'viagem') {
      this.desejoViagem = true;
    } else {
      this.desejoViagem = false;
    }
  }
  adicionar() {
    this.calcularPrazo();
    this.form.patchValue({
      economizar: parseFloat(this.form.controls['economizar'].value.replace(",", ".")).toFixed(2),
      quantiaEconomizada: parseFloat(this.verificaCampoVazio('quantiaEconomizada')).toFixed(2),
      valor: parseFloat(this.form.controls['valor'].value.replace(",", ".")).toFixed(2),
      prazo: this.form.controls['prazo'].value.replace(this.form.controls['prazo'].value, this.prazoMesAno),
      concluido: this.desejoConcluido
    });
    if (this.desejoViagem) {
      this.form.patchValue({
        hospedagem: parseFloat(this.verificaCampoVazio('hospedagem')).toFixed(2),
        alimentacao: parseFloat(this.verificaCampoVazio('alimentacao')).toFixed(2),
        passagem: parseFloat(this.verificaCampoVazio('passagem')).toFixed(2),
        transporte: parseFloat(this.verificaCampoVazio('transporte')).toFixed(2),
        compras: parseFloat(this.verificaCampoVazio('compras')).toFixed(2),
        lazer: parseFloat(this.verificaCampoVazio('lazer')).toFixed(2),
        gastosExtras: parseFloat(this.verificaCampoVazio('gastosExtras')).toFixed(2),
        burocracia: parseFloat(this.verificaCampoVazio('burocracia')).toFixed(2)
      });
    }
    this.service.salvar(this.form.value).subscribe(() => this.mensagemSucesso(), () => this.mensagemErro());
  }
  verificaCampoVazio(campo) {
    if (this.form.get(campo).value == '') {
      return '0.00';
    } else {
      return this.form.controls[campo].value.replace(",", ".");
    }
  }
  cancelar() {
    this.location.back();
  }
  mensagemSucesso() {
    var _this = this;
    return (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: 'Salvo com sucesso!',
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
        message: 'Erro ao salvar!',
        duration: 5000
      });
      yield toast.present();
    })();
  }
  calcularTotalViagem(event, campo) {
    let valor;
    if (typeof event == 'string') {
      valor = event;
    } else {
      valor = event.target.value;
    }
    if (this.form.get(campo).valid) {
      for (const element of this.camposViagem) {
        if (element[0] == campo && element[1] != '') {
          this.totalViagem = this.totalViagem - parseFloat(element[1]);
        }
        if (element[0] == campo) {
          if (valor == '') {
            valor = "0.00";
          }
          valor = valor.replace(',', '.');
          element[1] = valor;
          this.totalViagem = this.totalViagem + parseFloat(valor);
          this.totalViagemFormatado = this.totalViagem.toFixed(2);
        }
      }
    }
  }
  calcularPrazo() {
    let dataAtual = new Date(Date.now());
    let prazoMes = Math.round(parseFloat(this.form.controls['valor'].value.replace(",", ".")) / parseFloat(this.form.controls['economizar'].value.replace(",", ".")));
    let auxAno = 0;
    prazoMes = prazoMes + (dataAtual.getMonth() + 1);
    while (prazoMes > 12) {
      auxAno++;
      prazoMes = prazoMes - 12;
    }
    this.prazoMesAno = prazoMes + '/' + (dataAtual.getFullYear() + auxAno);
  }
  verificarConcluido(event) {
    if (event.detail.checked) {
      this.desejoConcluido = 1;
    } else {
      this.desejoConcluido = 0;
    }
  }
  tipoAdicionarEditar() {
    if (this.route.snapshot.url[0].path == 'adicionar') {
      this.adicionarOuEditar = 'adicionar';
    } else if (this.route.snapshot.url[0].path == 'editar') {
      this.adicionarOuEditar = 'editar';
    }
  }
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder
}, {
  type: _services_desejo_service__WEBPACK_IMPORTED_MODULE_6__.DesejoService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
}]), _class);
AdicionarDesejoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-adicionar-desejo',
  template: _adicionar_desejo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectionStrategy.OnPush,
  styles: [(_adicionar_desejo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], AdicionarDesejoComponent);


/***/ }),

/***/ 2034:
/*!*****************************************************************************!*\
  !*** ./src/app/gastos-receitas/components/adicionar/adicionar.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdicionarComponent: () => (/* binding */ AdicionarComponent)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _adicionar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adicionar.component.html?ngResource */ 3176);
/* harmony import */ var _adicionar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adicionar.component.scss?ngResource */ 9293);
/* harmony import */ var _adicionar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_adicionar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 2687);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ 2245);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_gasto_receita_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/gasto-receita.service */ 6828);
/* harmony import */ var _shared_form_base_form_base_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/form-base/form-base.directive */ 2685);
/* harmony import */ var _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/validacoes-form */ 7004);


var _class;












let AdicionarComponent = (_class = class AdicionarComponent extends _shared_form_base_form_base_directive__WEBPACK_IMPORTED_MODULE_5__.FormBaseDirective {
  constructor(formBuilder, service, toastController, location, route) {
    super();
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "formBuilder", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "service", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toastController", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "location", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "route", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "showPicker", false);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dateValue", '');
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "formattedString", '');
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "movimentacao", '');
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "adicionarOuEditar", '');
    this.formBuilder = formBuilder;
    this.service = service;
    this.toastController = toastController;
    this.location = location;
    this.route = route;
    this.setToday();
  }
  ngOnInit() {
    this.tipoMovimentacao();
    if (this.movimentacao == 'Gasto') {
      this.form = this.formBuilder.group({
        id: [null],
        tipo: ['Gasto'],
        data: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        tipoGasto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        valor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_6__.ValidacoesForm.valorValidator]],
        idUsuario: [null]
      });
    } else {
      this.form = this.formBuilder.group({
        id: [null],
        tipo: ['Receita'],
        data: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        tipoGasto: [null],
        valor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _shared_validacoes_form__WEBPACK_IMPORTED_MODULE_6__.ValidacoesForm.valorValidator]],
        idUsuario: [null]
      });
    }
    if (this.adicionarOuEditar == 'editar') {
      this.service.buscarPorId(this.route.snapshot.params.id).subscribe(resposta => {
        this.form.setValue({
          id: resposta.id,
          nome: resposta.nome,
          data: resposta.data,
          tipo: resposta.tipo,
          tipoGasto: resposta.tipoGasto,
          valor: resposta.valor.toFixed(2),
          idUsuario: resposta.idUsuario
        });
      });
    }
  }
  adicionar() {
    this.form.patchValue({
      data: this.formattedString,
      valor: parseFloat(this.form.controls['valor'].value.replace(",", ".")).toFixed(2)
    });
    this.service.salvar(this.form.value).subscribe(() => this.mensagemSucesso(), () => this.mensagemErro());
  }
  cancelar() {
    this.location.back();
  }
  mensagemSucesso() {
    var _this = this;
    return (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: 'Salvo com sucesso!',
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
        message: 'Erro ao salvar!',
        duration: 5000
      });
      yield toast.present();
    })();
  }
  setToday() {
    this.formattedString = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(new Date(), 'dd/MM/yyyy');
    this.dateValue = this.formattedString;
  }
  dateChanged(valor) {
    this.dateValue = valor;
    this.formattedString = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(valor), 'dd/MM/yyyy');
  }
  tipoMovimentacao() {
    if (this.route.snapshot.pathFromRoot[1].routeConfig.path == 'gasto') {
      this.movimentacao = 'Gasto';
    } else if (this.route.snapshot.pathFromRoot[1].routeConfig.path == 'receita') {
      this.movimentacao = 'Receita';
    }
    if (this.route.snapshot.url[0].path == 'adicionar') {
      this.adicionarOuEditar = 'adicionar';
    } else if (this.route.snapshot.url[0].path == 'editar') {
      this.adicionarOuEditar = 'editar';
    }
  }
  validaValor(valor) {
    return !this.form.get(valor).valid && this.verificaValidTouched(valor);
  }
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder
}, {
  type: _services_gasto_receita_service__WEBPACK_IMPORTED_MODULE_4__.GastoReceitaService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
}]), _class);
AdicionarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-adicionar',
  template: _adicionar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [(_adicionar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], AdicionarComponent);


/***/ }),

/***/ 2116:
/*!****************************************************************!*\
  !*** ./src/app/gastos-receitas/components/gasto/gasto.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GastoPage: () => (/* binding */ GastoPage)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _gasto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gasto.page.html?ngResource */ 6230);
/* harmony import */ var _gasto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gasto.page.scss?ngResource */ 7783);
/* harmony import */ var _gasto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gasto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_gasto_receita_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/gasto-receita.service */ 6828);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9736);


var _class;








let GastoPage = (_class = class GastoPage {
  constructor(service, router, route, alerta, toastController) {
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "service", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "router", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "route", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alerta", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toastController", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "gastosEssenciais$", null);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "gastosEventuais$", null);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "abaSelecionada", 'eventual');
    this.service = service;
    this.router = router;
    this.route = route;
    this.alerta = alerta;
    this.toastController = toastController;
  }
  ngOnInit() {
    this.atualizarGastoEssencial();
    this.atualizarGastoEventual();
  }
  navegar(pagina) {
    this.router.navigate([pagina]);
  }
  adicionar() {
    this.router.navigate(['adicionar'], {
      relativeTo: this.route
    });
  }
  editar(gasto) {
    this.router.navigate(['editar', gasto.id], {
      relativeTo: this.route
    });
    if (this.route.params && this.route.params['id']) {
      return this.service.buscarPorId(this.route.params['id']);
    }
  }
  excluir(gasto) {
    var _this = this;
    return (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alerta.create({
        message: 'Tem certeza de que deseja excluir esse gasto?',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'OK',
          role: 'confirm'
        }]
      });
      yield alert.present();
      if ((yield alert.onDidDismiss()).role == 'confirm') {
        _this.service.deletar(gasto.id).subscribe(() => {
          if (gasto.tipoGasto == 'essencial') {
            _this.atualizarGastoEssencial();
          } else {
            _this.atualizarGastoEventual();
          }
          _this.excluidoSucesso();
        });
      }
    })();
  }
  excluidoSucesso() {
    var _this2 = this;
    return (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: 'Gasto removido com sucesso!',
        duration: 5000
      });
      yield toast.present();
    })();
  }
  atualizarGastoEssencial() {
    this.gastosEssenciais$ = this.service.listar().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(gasto => gasto.filter(gastoEssencial => gastoEssencial.tipoGasto == 'Essencial')));
  }
  atualizarGastoEventual() {
    this.gastosEventuais$ = this.service.listar().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(gasto => gasto.filter(gastoEventual => gastoEventual.tipoGasto != 'Essencial' && gastoEventual.tipoGasto != null)));
  }
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _services_gasto_receita_service__WEBPACK_IMPORTED_MODULE_4__.GastoReceitaService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}]), _class);
GastoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-gasto',
  template: _gasto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [(_gasto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], GastoPage);


/***/ }),

/***/ 1290:
/*!******************************************************************************!*\
  !*** ./src/app/gastos-receitas/components/lista-desejo/lista-desejo.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListaDesejoPage: () => (/* binding */ ListaDesejoPage)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _lista_desejo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista-desejo.page.html?ngResource */ 2794);
/* harmony import */ var _lista_desejo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-desejo.page.scss?ngResource */ 9830);
/* harmony import */ var _lista_desejo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lista_desejo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_desejo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/desejo.service */ 9267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);


var _class;







let ListaDesejoPage = (_class = class ListaDesejoPage {
  constructor(router, route, service, alerta, toastController) {
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "router", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "route", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "service", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alerta", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toastController", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "desejos$", null);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "desejoConcluido", false);
    this.router = router;
    this.route = route;
    this.service = service;
    this.alerta = alerta;
    this.toastController = toastController;
  }
  ngOnInit() {
    this.atualizarListaDesejos();
  }
  navegar(pagina) {
    this.router.navigate([pagina]);
  }
  adicionar() {
    this.router.navigate(['adicionar'], {
      relativeTo: this.route
    });
  }
  atualizarListaDesejos() {
    this.desejos$ = this.service.listar().pipe();
  }
  editar(desejo) {
    this.router.navigate(['editar', desejo.id], {
      relativeTo: this.route
    });
    if (this.route.params && this.route.params['id']) {
      return this.service.buscarPorId(this.route.params['id']);
    }
  }
  calcularPorcentagem(valor, quantiaEconomizada) {
    return (quantiaEconomizada / valor * 100).toFixed(1);
  }
  excluir(desejo) {
    var _this = this;
    return (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alerta.create({
        message: 'Tem certeza de que deseja excluir esse desejo?',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'OK',
          role: 'confirm'
        }]
      });
      yield alert.present();
      if ((yield alert.onDidDismiss()).role == 'confirm') {
        _this.service.deletar(desejo.id).subscribe(() => {
          _this.atualizarListaDesejos(), _this.excluidoSucesso();
        });
      }
    })();
  }
  excluidoSucesso() {
    var _this2 = this;
    return (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: 'Desejo removido com sucesso!',
        duration: 5000
      });
      yield toast.present();
    })();
  }
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _services_desejo_service__WEBPACK_IMPORTED_MODULE_4__.DesejoService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}]), _class);
ListaDesejoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-lista-desejo',
  template: _lista_desejo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [(_lista_desejo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], ListaDesejoPage);


/***/ }),

/***/ 7033:
/*!********************************************************************!*\
  !*** ./src/app/gastos-receitas/components/receita/receita.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReceitaPage: () => (/* binding */ ReceitaPage)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _receita_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receita.page.html?ngResource */ 1969);
/* harmony import */ var _receita_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receita.page.scss?ngResource */ 5913);
/* harmony import */ var _receita_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_receita_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_gasto_receita_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/gasto-receita.service */ 6828);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9736);


var _class;








let ReceitaPage = (_class = class ReceitaPage {
  constructor(service, router, route, alerta, toastController) {
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "service", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "router", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "route", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "alerta", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "toastController", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "receitas$", null);
    this.service = service;
    this.router = router;
    this.route = route;
    this.alerta = alerta;
    this.toastController = toastController;
  }
  ngOnInit() {
    this.atualizarReceita();
  }
  navegar(pagina) {
    this.router.navigate([pagina]);
  }
  adicionar() {
    this.router.navigate(['adicionar'], {
      relativeTo: this.route
    });
  }
  editar(receita) {
    this.router.navigate(['editar', receita.id], {
      relativeTo: this.route
    });
    if (this.route.params && this.route.params['id']) {
      return this.service.buscarPorId(this.route.params['id']);
    }
  }
  excluir(receita) {
    var _this = this;
    return (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alerta.create({
        message: 'Tem certeza de que deseja excluir essa receita?',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'OK',
          role: 'confirm'
        }]
      });
      yield alert.present();
      if ((yield alert.onDidDismiss()).role == 'confirm') {
        _this.service.deletar(receita.id).subscribe(() => {
          _this.atualizarReceita();
          _this.excluidoSucesso();
        });
      }
    })();
  }
  excluidoSucesso() {
    var _this2 = this;
    return (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: 'Receita removida com sucesso!',
        duration: 5000
      });
      yield toast.present();
    })();
  }
  atualizarReceita() {
    this.receitas$ = this.service.listar().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(receitas => receitas.filter(receita => receita.tipo == 'Receita')));
  }
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, "ctorParameters", () => [{
  type: _services_gasto_receita_service__WEBPACK_IMPORTED_MODULE_4__.GastoReceitaService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}]), _class);
ReceitaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-receita',
  template: _receita_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [(_receita_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3___default())]
})], ReceitaPage);


/***/ }),

/***/ 6807:
/*!*******************************************************************!*\
  !*** ./src/app/gastos-receitas/gastos-receitas-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GastosReceitasRoutingModule: () => (/* binding */ GastosReceitasRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_adicionar_adicionar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/adicionar/adicionar.component */ 2034);
/* harmony import */ var _components_receita_receita_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/receita/receita.page */ 7033);
/* harmony import */ var _components_gasto_gasto_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gasto/gasto.page */ 2116);
/* harmony import */ var _components_lista_desejo_lista_desejo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/lista-desejo/lista-desejo.page */ 1290);
/* harmony import */ var _components_adicionar_desejo_adicionar_desejo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/adicionar-desejo/adicionar-desejo.component */ 6233);








const routes = [{
  path: 'gasto',
  children: [{
    path: '',
    component: _components_gasto_gasto_page__WEBPACK_IMPORTED_MODULE_2__.GastoPage
  }, {
    path: 'adicionar',
    component: _components_adicionar_adicionar_component__WEBPACK_IMPORTED_MODULE_0__.AdicionarComponent
  }, {
    path: 'editar/:id',
    component: _components_adicionar_adicionar_component__WEBPACK_IMPORTED_MODULE_0__.AdicionarComponent
  }]
}, {
  path: 'receita',
  children: [{
    path: '',
    component: _components_receita_receita_page__WEBPACK_IMPORTED_MODULE_1__.ReceitaPage
  }, {
    path: 'adicionar',
    component: _components_adicionar_adicionar_component__WEBPACK_IMPORTED_MODULE_0__.AdicionarComponent
  }, {
    path: 'editar/:id',
    component: _components_adicionar_adicionar_component__WEBPACK_IMPORTED_MODULE_0__.AdicionarComponent
  }]
}, {
  path: 'lista-desejos',
  children: [{
    path: '',
    component: _components_lista_desejo_lista_desejo_page__WEBPACK_IMPORTED_MODULE_3__.ListaDesejoPage
  }, {
    path: 'adicionar',
    component: _components_adicionar_desejo_adicionar_desejo_component__WEBPACK_IMPORTED_MODULE_4__.AdicionarDesejoComponent
  }, {
    path: 'editar/:id',
    component: _components_adicionar_desejo_adicionar_desejo_component__WEBPACK_IMPORTED_MODULE_4__.AdicionarDesejoComponent
  }]
}];
let GastosReceitasRoutingModule = class GastosReceitasRoutingModule {};
GastosReceitasRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
})], GastosReceitasRoutingModule);


/***/ }),

/***/ 9764:
/*!***********************************************************!*\
  !*** ./src/app/gastos-receitas/gastos-receitas.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GastosReceitasModule: () => (/* binding */ GastosReceitasModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _gastos_receitas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gastos-receitas-routing.module */ 6807);
/* harmony import */ var _components_receita_receita_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/receita/receita.page */ 7033);
/* harmony import */ var _components_gasto_gasto_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gasto/gasto.page */ 2116);
/* harmony import */ var _components_adicionar_adicionar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/adicionar/adicionar.component */ 2034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _components_lista_desejo_lista_desejo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/lista-desejo/lista-desejo.page */ 1290);
/* harmony import */ var _components_adicionar_desejo_adicionar_desejo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/adicionar-desejo/adicionar-desejo.component */ 6233);












let GastosReceitasModule = class GastosReceitasModule {};
GastosReceitasModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_components_receita_receita_page__WEBPACK_IMPORTED_MODULE_1__.ReceitaPage, _components_gasto_gasto_page__WEBPACK_IMPORTED_MODULE_2__.GastoPage, _components_adicionar_adicionar_component__WEBPACK_IMPORTED_MODULE_3__.AdicionarComponent, _components_lista_desejo_lista_desejo_page__WEBPACK_IMPORTED_MODULE_5__.ListaDesejoPage, _components_adicionar_desejo_adicionar_desejo_component__WEBPACK_IMPORTED_MODULE_6__.AdicionarDesejoComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _gastos_receitas_routing_module__WEBPACK_IMPORTED_MODULE_0__.GastosReceitasRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
})], GastosReceitasModule);


/***/ }),

/***/ 9267:
/*!************************************************************!*\
  !*** ./src/app/gastos-receitas/services/desejo.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesejoService: () => (/* binding */ DesejoService)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);

var _class;



let DesejoService = (_class = class DesejoService {
  constructor(httpClient) {
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "httpClient", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "API", 'http://ec2-15-228-254-200.sa-east-1.compute.amazonaws.com:8080/api/desejo');
    this.httpClient = httpClient;
  }
  listar() {
    return this.httpClient.get(this.API);
  }
  buscarPorId(id) {
    return this.httpClient.get(`${this.API}/${id}`);
  }
  adicionar(desejo) {
    return this.httpClient.post(this.API, desejo);
  }
  atualizar(desejo) {
    return this.httpClient.put(`${this.API}/${desejo.id}`, desejo);
  }
  salvar(desejo) {
    if (desejo.id) {
      return this.atualizar(desejo);
    }
    return this.adicionar(desejo);
  }
  deletar(id) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
DesejoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], DesejoService);


/***/ }),

/***/ 6828:
/*!*******************************************************************!*\
  !*** ./src/app/gastos-receitas/services/gasto-receita.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GastoReceitaService: () => (/* binding */ GastoReceitaService)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);

var _class;



let GastoReceitaService = (_class = class GastoReceitaService {
  constructor(httpClient) {
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "httpClient", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "API", 'http://ec2-15-228-254-200.sa-east-1.compute.amazonaws.com:8080/api/gasto-receita');
    this.httpClient = httpClient;
  }
  listar() {
    return this.httpClient.get(this.API);
  }
  buscarPorId(id) {
    return this.httpClient.get(`${this.API}/${id}`);
  }
  salvar(gastoReceita) {
    if (gastoReceita.id) {
      return this.atualizar(gastoReceita);
    }
    return this.adicionar(gastoReceita);
  }
  adicionar(gastoReceita) {
    return this.httpClient.post(this.API, gastoReceita);
  }
  atualizar(gastoReceita) {
    return this.httpClient.put(`${this.API}/${gastoReceita.id}`, gastoReceita);
  }
  deletar(id) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
GastoReceitaService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], GastoReceitaService);


/***/ }),

/***/ 592:
/*!**********************************************!*\
  !*** ./src/app/guards/auth-guard.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuardService: () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/auth.service */ 4606);

var _class;




let AuthGuardService = (_class = class AuthGuardService {
  constructor(service, router) {
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "service", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    this.service = service;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.service.usuarioEstaAutenticado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _login_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
}]), _class);
AuthGuardService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], AuthGuardService);


/***/ }),

/***/ 4606:
/*!***************************************!*\
  !*** ./src/app/login/auth.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);

var _class;



let AuthService = (_class = class AuthService {
  constructor(httpClient) {
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "httpClient", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "API", 'http://ec2-15-228-254-200.sa-east-1.compute.amazonaws.com:8080/api/usuario');
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "usuarioAutenticado", void 0);
    this.httpClient = httpClient;
    this.usuarioAutenticado = false;
  }
  fazerLogin(usuarioLogin) {
    return this.httpClient.post(this.API, usuarioLogin);
  }
  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], AuthService);


/***/ }),

/***/ 9462:
/*!*****************************************************************!*\
  !*** ./src/app/shared/controle-erro/controle-erro.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControleErroComponent: () => (/* binding */ ControleErroComponent)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _controle_erro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controle-erro.component.html?ngResource */ 6613);
/* harmony import */ var _controle_erro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controle-erro.component.scss?ngResource */ 1176);
/* harmony import */ var _controle_erro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_controle_erro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);

var _class;




let ControleErroComponent = (_class = class ControleErroComponent {
  constructor() {
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mensagemErro", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mostrarErro", void 0);
  }
  ngOnInit() {}
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  mensagemErro: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  mostrarErro: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }]
}), _class);
ControleErroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-controle-erro',
  template: _controle_erro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_controle_erro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ControleErroComponent);


/***/ }),

/***/ 2685:
/*!*********************************************************!*\
  !*** ./src/app/shared/form-base/form-base.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormBaseDirective: () => (/* binding */ FormBaseDirective)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);

var _class;


let FormBaseDirective = (_class = class FormBaseDirective {
  constructor() {
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "form", void 0);
  }
  ngOnInit() {}
  verificaValidTouched(campo) {
    return !this.form.get(campo).valid && (this.form.get(campo).touched || this.form.get(campo).dirty);
  }
  verificaSenha(senha) {
    return !this.form.get(senha).valid && this.form.get(senha).touched && this.form.get(senha).dirty;
  }
  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
FormBaseDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({
  selector: '[appFormBase]'
})], FormBaseDirective);


/***/ }),

/***/ 1083:
/*!*****************************************************************!*\
  !*** ./src/app/shared/mensagem-erro/mensagem-erro.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MensagemErroComponent: () => (/* binding */ MensagemErroComponent)
/* harmony export */ });
/* harmony import */ var C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _mensagem_erro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mensagem-erro.component.html?ngResource */ 5534);
/* harmony import */ var _mensagem_erro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mensagem-erro.component.scss?ngResource */ 8756);
/* harmony import */ var _mensagem_erro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mensagem_erro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _validacoes_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validacoes-form */ 7004);

var _class;





let MensagemErroComponent = (_class = class MensagemErroComponent {
  constructor() {
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "control", void 0);
    (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "label", void 0);
  }
  ngOnInit() {}
  get mensagemErro() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return _validacoes_form__WEBPACK_IMPORTED_MODULE_3__.ValidacoesForm.getMensagemErro(this.label, propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}, (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), (0,C_Users_letic_carteira_facil_angular_spring_carteira_facil_angular_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  control: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }]
}), _class);
MensagemErroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-mensagem-erro',
  template: _mensagem_erro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_mensagem_erro_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MensagemErroComponent);


/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _controle_erro_controle_erro_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controle-erro/controle-erro.component */ 9462);
/* harmony import */ var _mensagem_erro_mensagem_erro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mensagem-erro/mensagem-erro.component */ 1083);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);







let SharedModule = class SharedModule {};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_controle_erro_controle_erro_component__WEBPACK_IMPORTED_MODULE_0__.ControleErroComponent, _mensagem_erro_mensagem_erro_component__WEBPACK_IMPORTED_MODULE_1__.MensagemErroComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  exports: [_controle_erro_controle_erro_component__WEBPACK_IMPORTED_MODULE_0__.ControleErroComponent, _mensagem_erro_mensagem_erro_component__WEBPACK_IMPORTED_MODULE_1__.MensagemErroComponent]
})], SharedModule);


/***/ }),

/***/ 7004:
/*!*******************************************!*\
  !*** ./src/app/shared/validacoes-form.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidacoesForm: () => (/* binding */ ValidacoesForm)
/* harmony export */ });
class ValidacoesForm {
  static getMensagemErro(nomeCampo, nomeValidator, valorValidator) {
    const config = {
      'required': `${nomeCampo} é obrigatório.`,
      'minlength': `${nomeCampo} precisa ter no mínimo ${valorValidator.requiredLength} caracteres.`,
      'maxlength': `${nomeCampo} precisa ter no máximo ${valorValidator.requiredLength} caracteres.`,
      'emailInvalido': 'Email já cadastrado!',
      'equalsTo': 'Campos não são iguais',
      'pattern': 'Campo inválido'
    };
    return config[nomeValidator];
  }
  static igualA(outroCampo) {
    const validator = formControl => {
      if (outroCampo == null) {
        throw new Error('É necessário informar um campo.');
      }
      if (!formControl.root || !formControl.root.controls) {
        return null;
      }
      const campo = formControl.root.get(outroCampo);
      if (!campo) {
        throw new Error('É necessário informar um campo válido.');
      }
      if (campo.value !== formControl.value) {
        return {
          igualA: outroCampo
        };
      }
      return null;
    };
    return validator;
  }
  static telefoneValidator(telefone) {
    const tel = telefone.value;
    if (tel && tel !== '') {
      const validaTel = /^[0-9]{10,11}$/;
      return validaTel.test(tel) ? null : {
        telInvalido: true
      };
    }
    return null;
  }
  static valorValidator(valor) {
    const preco = valor.value;
    if (preco && preco !== '') {
      const validaPreco = /^[0-9]{1,10}[,]|[.][0-9]{2}$/;
      return validaPreco.test(preco) ? null : {
        precoInvalido: true
      };
    }
  }
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		1006,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		6470,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		5690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		8508,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		3438,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9119,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		8004,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		4848,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		4752,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		9870,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		5892,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		9118,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9538,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		4969,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		1835,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		6719,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		3121,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3025,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3914,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		3761,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		6138,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2063,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		4950,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		9707,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		234,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		7209,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3068,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9215,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		5635,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		1497,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5922,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3549,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		5966,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		3187,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		9092,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		7600,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		1449,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		6152,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1657,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		8394,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4574,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		3514,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7502,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		7832,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9805,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7393,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		370,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6270:
/*!********************************************************************************************************!*\
  !*** ./src/app/gastos-receitas/components/adicionar-desejo/adicionar-desejo.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "Bitter", serif;
}

ion-content {
  --background: linear-gradient(to top, #33cccc 0%, #006666 100%);
}

ion-header {
  height: 40px;
  margin-top: 20px;
}

ion-toolbar {
  --background: none;
  color: #fff;
}

.icon-header {
  color: #fff;
  margin: 10px;
}

#titulo {
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  margin-right: 40px;
}

#container {
  padding: 20px;
}

.legenda {
  color: #004b4d;
  padding-left: 10px;
  margin-right: 20px;
}

.legenda-radio {
  margin-left: 10px;
}

ion-list {
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding-bottom: 15px;
}

ion-list ion-item {
  margin-top: 20px;
  margin-right: 20px;
}

.botao-full {
  text-transform: uppercase;
  font-weight: 300;
  color: #fff;
  --background: #004b4d;
}

ion-button[fill=outline] {
  margin-top: 5px;
  color: #004b4d;
  --border-color: #004b4d;
  text-transform: uppercase;
  font-weight: 500;
}

ion-checkbox {
  --size: 20px;
  margin-right: 10px;
}`, "",{"version":3,"sources":["webpack://./src/app/gastos-receitas/components/adicionar-desejo/adicionar-desejo.component.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,SAAA;EACA,4BAAA;AACJ;;AAEA;EACI,+DAAA;AACJ;;AAEA;EACI,YAAA;EACA,gBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,WAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;AACJ;;AAEA;EACI,eAAA;EACA,WAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,cAAA;EACA,kBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,iBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,oBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,yBAAA;EACA,gBAAA;EACA,WAAA;EACA,qBAAA;AACJ;;AAEA;EACI,eAAA;EACA,cAAA;EACA,uBAAA;EACA,yBAAA;EACA,gBAAA;AACJ;;AAEA;EACI,YAAA;EACA,kBAAA;AACJ","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-family: 'Bitter', serif;\r\n}\r\n\r\nion-content{\r\n    --background: linear-gradient(to top, #33cccc 0%, #006666 100%);\r\n}\r\n\r\nion-header{\r\n    height: 40px;\r\n    margin-top: 20px;\r\n}\r\n\r\nion-toolbar{\r\n    --background: none;\r\n    color: #fff;\r\n}\r\n\r\n.icon-header{\r\n    color: #fff;\r\n    margin: 10px;\r\n}\r\n\r\n#titulo{\r\n    font-size: 20px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    margin-right: 40px;\r\n}\r\n\r\n#container{\r\n    padding: 20px;\r\n}\r\n\r\n.legenda{\r\n    color: #004b4d;\r\n    padding-left: 10px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.legenda-radio{\r\n    margin-left: 10px;\r\n}\r\n\r\nion-list{\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n    border-radius: 10px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nion-list ion-item{\r\n    margin-top: 20px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.botao-full{\r\n    text-transform: uppercase;\r\n    font-weight: 300;\r\n    color:#fff;\r\n    --background: #004b4d;\r\n}\r\n\r\nion-button[fill='outline']{\r\n    margin-top: 5px;\r\n    color: #004b4d;\r\n    --border-color: #004b4d;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n}\r\n\r\nion-checkbox{\r\n    --size: 20px;\r\n    margin-right: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9293:
/*!******************************************************************************************!*\
  !*** ./src/app/gastos-receitas/components/adicionar/adicionar.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "Bitter", serif;
}

ion-content {
  --background: linear-gradient(to top, #33cccc 0%, #006666 100%);
}

ion-header {
  height: 40px;
  margin-top: 20px;
}

ion-toolbar {
  --background: none;
  color: #fff;
}

.icon-header {
  color: #fff;
  margin: 10px;
}

#titulo {
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  margin-right: 40px;
}

#container {
  padding: 20px;
}

.legenda {
  color: #004b4d;
  padding-left: 10px;
  margin-right: 20px;
}

ion-select {
  font-size: 14px;
  --placeholder-opacity: 60%;
}

ion-list {
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding-bottom: 15px;
}

ion-list ion-item {
  margin-top: 20px;
  margin-right: 20px;
}

.botao-full {
  text-transform: uppercase;
  font-weight: 300;
  color: #fff;
  --background: #004b4d;
}

ion-button[fill=outline] {
  margin-top: 5px;
  color: #004b4d;
  --border-color: #004b4d;
  text-transform: uppercase;
  font-weight: 500;
}`, "",{"version":3,"sources":["webpack://./src/app/gastos-receitas/components/adicionar/adicionar.component.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,SAAA;EACA,4BAAA;AACJ;;AAEA;EACI,+DAAA;AACJ;;AAEA;EACI,YAAA;EACA,gBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,WAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;AACJ;;AAEA;EACI,eAAA;EACA,WAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,cAAA;EACA,kBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,eAAA;EACA,0BAAA;AACJ;;AAEA;EACI,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,oBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,yBAAA;EACA,gBAAA;EACA,WAAA;EACA,qBAAA;AACJ;;AAEA;EACI,eAAA;EACA,cAAA;EACA,uBAAA;EACA,yBAAA;EACA,gBAAA;AACJ","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-family: 'Bitter', serif;\r\n}\r\n\r\nion-content{\r\n    --background: linear-gradient(to top, #33cccc 0%, #006666 100%);\r\n}\r\n\r\nion-header{\r\n    height: 40px;\r\n    margin-top: 20px;\r\n}\r\n\r\nion-toolbar{\r\n    --background: none;\r\n    color: #fff;\r\n}\r\n\r\n.icon-header{\r\n    color: #fff;\r\n    margin: 10px;\r\n}\r\n\r\n#titulo{\r\n    font-size: 20px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    margin-right: 40px;\r\n}\r\n\r\n#container{\r\n    padding: 20px;\r\n}\r\n\r\n.legenda{\r\n    color: #004b4d;\r\n    padding-left: 10px;\r\n    margin-right: 20px;\r\n}\r\n\r\nion-select{\r\n    font-size: 14px;\r\n    --placeholder-opacity: 60%; \r\n}\r\n\r\nion-list{\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n    border-radius: 10px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nion-list ion-item{\r\n    margin-top: 20px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.botao-full{\r\n    text-transform: uppercase;\r\n    font-weight: 300;\r\n    color:#fff;\r\n    --background: #004b4d;\r\n}\r\n\r\nion-button[fill='outline']{\r\n    margin-top: 5px;\r\n    color: #004b4d;\r\n    --border-color: #004b4d;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7783:
/*!*****************************************************************************!*\
  !*** ./src/app/gastos-receitas/components/gasto/gasto.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "Bitter", serif;
}

ion-content {
  --background: linear-gradient(to top, #33cccc 0%, #006666 100%);
}

ion-header {
  height: 40px;
  margin-top: 20px;
}

ion-toolbar {
  --background: none;
  color: #fff;
}

.icon-header {
  color: #fff;
  margin: 10px;
}

.icon-header[name=add-outline] {
  font-size: 32px;
}

#titulo {
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
}

#container {
  padding: 20px;
}

ion-card {
  margin-top: 15px;
  border-radius: 10px;
  height: 150px;
}

ion-card-title {
  padding: 20px;
  font-size: 18px;
  color: #004b4d;
  font-weight: 500;
  display: flex;
}

.nome-gasto {
  align-items: center;
}

ion-card-subtitle {
  padding-left: 20px;
  color: #004b4d;
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
}

ion-card-content {
  color: #000;
  padding: 20px;
  font-size: 18px;
}

.botao-editar-excluir {
  height: 25px;
  width: 50px;
  color: #004b4d;
  padding: 0;
}

.icones {
  height: 20px;
  float: right;
}`, "",{"version":3,"sources":["webpack://./src/app/gastos-receitas/components/gasto/gasto.page.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,SAAA;EACA,4BAAA;AACJ;;AAEA;EACI,+DAAA;AACJ;;AAEA;EACI,YAAA;EACA,gBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,WAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI,eAAA;EACA,WAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,gBAAA;EACA,mBAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,aAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,0BAAA;AACJ;;AAEA;EACI,WAAA;EACA,aAAA;EACA,eAAA;AACJ;;AAEA;EACI,YAAA;EACA,WAAA;EACA,cAAA;EACA,UAAA;AACJ;;AAEA;EACI,YAAA;EACA,YAAA;AACJ","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-family: 'Bitter', serif;\r\n}\r\n\r\nion-content{\r\n    --background: linear-gradient(to top, #33cccc 0%, #006666 100%);\r\n}\r\n\r\nion-header{\r\n    height: 40px;\r\n    margin-top: 20px;\r\n}\r\n\r\nion-toolbar{\r\n    --background: none;\r\n    color: #fff;\r\n}\r\n\r\n.icon-header{\r\n    color: #fff;\r\n    margin: 10px;\r\n}\r\n\r\n.icon-header[name='add-outline']{\r\n    font-size: 32px;\r\n}\r\n\r\n#titulo{\r\n    font-size: 20px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    text-align: center;  \r\n}\r\n\r\n#container{\r\n    padding: 20px;\r\n}\r\n\r\nion-card{\r\n    margin-top: 15px;\r\n    border-radius: 10px;\r\n    height: 150px;\r\n}\r\n\r\nion-card-title{\r\n    padding: 20px;\r\n    font-size: 18px;\r\n    color: #004b4d;\r\n    font-weight: 500;\r\n    display: flex;\r\n}\r\n\r\n.nome-gasto{\r\n    align-items: center;\r\n}\r\n\r\nion-card-subtitle{\r\n    padding-left: 20px;\r\n    color: #004b4d;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n}\r\n\r\nion-card-content{\r\n    color: #000;\r\n    padding: 20px;\r\n    font-size: 18px;\r\n}\r\n\r\n.botao-editar-excluir{\r\n    height: 25px;\r\n    width: 50px;\r\n    color: #004b4d;\r\n    padding: 0;\r\n}\r\n\r\n.icones{\r\n    height: 20px;\r\n    float: right;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9830:
/*!*******************************************************************************************!*\
  !*** ./src/app/gastos-receitas/components/lista-desejo/lista-desejo.page.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "Bitter", serif;
}

ion-content {
  --background: linear-gradient(to top, #33cccc 0%, #006666 100%);
}

ion-header {
  height: 40px;
  margin-top: 20px;
}

ion-toolbar {
  --background: none;
  color: #fff;
}

.icon-header {
  color: #fff;
  margin: 10px;
}

.icon-header[name=add-outline] {
  font-size: 32px;
}

#titulo {
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
}

#container {
  padding: 20px;
}

ion-card {
  margin-top: 15px;
  border-radius: 10px;
  height: 210px;
  padding: 10px 0px;
}

.card-viagem {
  height: 420px;
}

.botao-concluir {
  width: 100px;
  height: 40px;
  float: right;
  margin-right: 20px;
  color: #004b4d;
  --border-color: #004b4d;
}

ion-card-title {
  padding: 10px 20px;
  font-size: 18px;
  color: #004b4d;
  font-weight: 500;
  display: flex;
}

.nome-gasto {
  align-items: center;
}

ion-card-subtitle {
  padding-left: 20px;
  color: #004b4d;
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
}

ion-card-content {
  color: #000;
  padding: 20px 20px 0px 20px;
  font-size: 18px;
}

.botao-editar-excluir {
  height: 25px;
  width: 50px;
  color: #004b4d;
}

.icones {
  height: 20px;
}

.progresso {
  padding-top: 10px;
  width: 50%;
}`, "",{"version":3,"sources":["webpack://./src/app/gastos-receitas/components/lista-desejo/lista-desejo.page.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,SAAA;EACA,4BAAA;AACJ;;AAEA;EACI,+DAAA;AACJ;;AAEA;EACI,YAAA;EACA,gBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,WAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI,eAAA;EACA,WAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,gBAAA;EACA,mBAAA;EACA,aAAA;EACA,iBAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,YAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,uBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,aAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,0BAAA;AACJ;;AAEA;EACI,WAAA;EACA,2BAAA;EACA,eAAA;AACJ;;AAEA;EACI,YAAA;EACA,WAAA;EACA,cAAA;AACJ;;AAEA;EACI,YAAA;AACJ;;AAEA;EACI,iBAAA;EACA,UAAA;AACJ","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-family: 'Bitter', serif;\r\n}\r\n\r\nion-content{\r\n    --background: linear-gradient(to top, #33cccc 0%, #006666 100%);\r\n}\r\n\r\nion-header{\r\n    height: 40px;\r\n    margin-top: 20px;\r\n}\r\n\r\nion-toolbar{\r\n    --background: none;\r\n    color: #fff;\r\n}\r\n\r\n.icon-header{\r\n    color: #fff;\r\n    margin: 10px;\r\n}\r\n\r\n.icon-header[name='add-outline']{\r\n    font-size: 32px;\r\n}\r\n\r\n#titulo{\r\n    font-size: 20px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    text-align: center;\r\n}\r\n\r\n#container{\r\n    padding: 20px;\r\n}\r\n\r\nion-card{\r\n    margin-top: 15px;\r\n    border-radius: 10px;\r\n    height: 210px;\r\n    padding: 10px 0px;\r\n}\r\n\r\n.card-viagem{\r\n    height: 420px;\r\n}\r\n\r\n.botao-concluir{\r\n    width: 100px;\r\n    height: 40px;\r\n    float: right;\r\n    margin-right: 20px;\r\n    color: #004b4d;\r\n    --border-color: #004b4d;\r\n}\r\n\r\nion-card-title{\r\n    padding: 10px 20px;\r\n    font-size: 18px;\r\n    color: #004b4d;\r\n    font-weight: 500;\r\n    display: flex;\r\n}\r\n\r\n.nome-gasto{\r\n    align-items: center;\r\n}\r\n\r\nion-card-subtitle{\r\n    padding-left: 20px;\r\n    color: #004b4d;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    text-transform: capitalize;\r\n}\r\n\r\nion-card-content{\r\n    color: #000;\r\n    padding: 20px 20px 0px 20px;\r\n    font-size: 18px;\r\n}\r\n\r\n.botao-editar-excluir{\r\n    height: 25px;\r\n    width: 50px;\r\n    color: #004b4d;\r\n}\r\n\r\n.icones{\r\n    height: 20px;\r\n}\r\n\r\n.progresso{\r\n    padding-top: 10px;\r\n    width: 50%;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5913:
/*!*********************************************************************************!*\
  !*** ./src/app/gastos-receitas/components/receita/receita.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "Bitter", serif;
}

ion-content {
  --background: linear-gradient(to top, #33cccc 0%, #006666 100%);
}

ion-header {
  height: 40px;
  margin-top: 20px;
}

ion-toolbar {
  --background: none;
  color: #fff;
}

.icon-header {
  color: #fff;
  margin: 10px;
}

.icon-header[name=add-outline] {
  font-size: 32px;
}

#titulo {
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
}

#container {
  padding: 20px;
}

ion-card {
  margin-top: 15px;
  border-radius: 10px;
  height: 140px;
}

ion-card-title {
  padding: 20px;
  font-size: 18px;
  color: #004b4d;
  font-weight: 500;
  display: flex;
}

.nome-gasto {
  align-items: center;
}

ion-card-subtitle {
  padding-left: 20px;
  color: #004b4d;
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
}

ion-card-content {
  color: #000;
  padding: 20px;
  font-size: 18px;
}

.botao-editar-excluir {
  height: 25px;
  width: 50px;
  color: #004b4d;
}

.icones {
  height: 20px;
}`, "",{"version":3,"sources":["webpack://./src/app/gastos-receitas/components/receita/receita.page.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,SAAA;EACA,4BAAA;AACJ;;AAEA;EACI,+DAAA;AACJ;;AAEA;EACI,YAAA;EACA,gBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,WAAA;AACJ;;AAEA;EACI,WAAA;EACA,YAAA;AACJ;;AAEA;EACI,eAAA;AACJ;;AAEA;EACI,eAAA;EACA,WAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,gBAAA;EACA,mBAAA;EACA,aAAA;AACJ;;AAEA;EACI,aAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,aAAA;AACJ;;AAEA;EACI,mBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,0BAAA;AACJ;;AAEA;EACI,WAAA;EACA,aAAA;EACA,eAAA;AACJ;;AAEA;EACI,YAAA;EACA,WAAA;EACA,cAAA;AACJ;;AAEA;EACI,YAAA;AACJ","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-family: 'Bitter', serif;\r\n}\r\n\r\nion-content{\r\n    --background: linear-gradient(to top, #33cccc 0%, #006666 100%);\r\n}\r\n\r\nion-header{\r\n    height: 40px;\r\n    margin-top: 20px;\r\n}\r\n\r\nion-toolbar{\r\n    --background: none;\r\n    color: #fff;\r\n}\r\n\r\n.icon-header{\r\n    color: #fff;\r\n    margin: 10px;\r\n}\r\n\r\n.icon-header[name='add-outline']{\r\n    font-size: 32px;\r\n}\r\n\r\n#titulo{\r\n    font-size: 20px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    text-align: center;\r\n}\r\n\r\n#container{\r\n    padding: 20px;\r\n}\r\n\r\nion-card{\r\n    margin-top: 15px;\r\n    border-radius: 10px;\r\n    height: 140px;\r\n}\r\n\r\nion-card-title{\r\n    padding: 20px;\r\n    font-size: 18px;\r\n    color: #004b4d;\r\n    font-weight: 500;\r\n    display: flex;\r\n}\r\n\r\n.nome-gasto{\r\n    align-items: center;\r\n}\r\n\r\nion-card-subtitle{\r\n    padding-left: 20px;\r\n    color: #004b4d;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    text-transform: capitalize;\r\n}\r\n\r\nion-card-content{\r\n    color: #000;\r\n    padding: 20px;\r\n    font-size: 18px;\r\n}\r\n\r\n.botao-editar-excluir{\r\n    height: 25px;\r\n    width: 50px;\r\n    color: #004b4d;\r\n}\r\n\r\n.icones{\r\n    height: 20px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1176:
/*!******************************************************************************!*\
  !*** ./src/app/shared/controle-erro/controle-erro.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.errorDiv {
  margin-bottom: 0px;
  color: #000;
  font-size: 13px;
  font-family: "Bitter", serif;
  font-weight: 500;
}`, "",{"version":3,"sources":["webpack://./src/app/shared/controle-erro/controle-erro.component.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,WAAA;EACA,eAAA;EACA,4BAAA;EACA,gBAAA;AACJ","sourcesContent":[".errorDiv {\r\n    margin-bottom: 0px;\r\n    color: #000;\r\n    font-size: 13px;\r\n    font-family: 'Bitter', serif;\r\n    font-weight: 500;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8756:
/*!******************************************************************************!*\
  !*** ./src/app/shared/mensagem-erro/mensagem-erro.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.errorDiv {
  margin-bottom: 0px;
}`, "",{"version":3,"sources":["webpack://./src/app/shared/mensagem-erro/mensagem-erro.component.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ","sourcesContent":[".errorDiv {\r\n    margin-bottom: 0px;\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 135:
/*!********************************************************************************************************!*\
  !*** ./src/app/gastos-receitas/components/adicionar-desejo/adicionar-desejo.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-header collapse=\"fade\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"cancelar()\">\n          <ion-icon class=\"icon-header\" name=\"arrow-back-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title id=\"titulo\">{{ adicionarOuEditar }} Desejo</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <ion-list id=\"form-desejo\">\n      <form [formGroup]=\"form\">\n        <ion-item>\n          <ion-label class=\"legenda\">Nome</ion-label>\n          <ion-input formControlName=\"nome\"></ion-input>\n          <!-- <app-controle-erro\n            [mostrarErro]=\"verificaValidTouched('nome')\"\n            mensagemErro=\"Insira um nome\">\n          </app-controle-erro> -->\n        </ion-item>\n\n        <ion-radio-group formControlName=\"tipo\" [(ngModel)]=\"tipoDesejo\" (ionChange)=\"escolhaTipoDesejo()\">\n          <ion-item lines=\"none\">\n            <ion-label class=\"legenda\">Tipo</ion-label>\n            <ion-label class=\"legenda-radio\" slot=\"end\">Bem material</ion-label>\n            <ion-radio value=\"bem-material\" justify=\"end\" [disabled]=\"adicionarOuEditar == 'editar'\"></ion-radio>\n\n            <!-- <app-controle-erro\n                [mostrarErro]=\"verificaValidTouched('nome')\"\n                mensagemErro=\"Insira um nome\">\n              </app-controle-erro> -->\n          </ion-item>\n          <ion-item>\n            <ion-label class=\"legenda\"></ion-label>\n            <ion-label class=\"legenda-radio\" slot=\"end\">Viagem</ion-label>\n            <ion-radio value=\"viagem\" justify=\"end\" [disabled]=\"adicionarOuEditar == 'editar'\"></ion-radio>\n\n            <!-- <app-controle-erro\n                [mostrarErro]=\"verificaValidTouched('nome')\"\n                mensagemErro=\"Insira um nome\">\n              </app-controle-erro> -->\n          </ion-item>\n        </ion-radio-group>\n\n        <div *ngIf=\"desejoViagem; else desejoBemMaterial\">\n          <ion-item>\n            <ion-label class=\"legenda\">Passagem</ion-label>\n            <ion-input formControlName=\"passagem\" placeholder=\"Ex: R$20,00\" (ionBlur)=\"calcularTotalViagem($event, 'passagem')\"></ion-input>\n            <!-- <app-controle-erro\n              [mostrarErro]=\"validaValor('valor')\"\n              mensagemErro=\"Insira um valor válido\">\n            </app-controle-erro> -->\n          </ion-item>\n\n          <ion-item>\n            <ion-label class=\"legenda\">Hospedagem</ion-label>\n            <ion-input formControlName=\"hospedagem\" placeholder=\"Ex: R$20,00\" (ionBlur)=\"calcularTotalViagem($event, 'hospedagem')\"></ion-input>\n            <!-- <app-controle-erro\n              [mostrarErro]=\"validaValor('valor')\"\n              mensagemErro=\"Insira um valor válido\">\n            </app-controle-erro> -->\n          </ion-item>\n\n          <ion-item>\n            <ion-label class=\"legenda\">Alimentação</ion-label>\n            <ion-input formControlName=\"alimentacao\" placeholder=\"Ex: R$20,00\" (ionBlur)=\"calcularTotalViagem($event, 'alimentacao')\"></ion-input>\n            <!-- <app-controle-erro\n              [mostrarErro]=\"validaValor('valor')\"\n              mensagemErro=\"Insira um valor válido\">\n            </app-controle-erro> -->\n          </ion-item>\n\n          <ion-item>\n            <ion-label class=\"legenda\">Transporte</ion-label>\n            <ion-input formControlName=\"transporte\" placeholder=\"Ex: R$20,00\" (ionBlur)=\"calcularTotalViagem($event, 'transporte')\"></ion-input>\n            <!-- <app-controle-erro\n              [mostrarErro]=\"validaValor('valor')\"\n              mensagemErro=\"Insira um valor válido\">\n            </app-controle-erro> -->\n          </ion-item>\n\n          <ion-item>\n            <ion-label class=\"legenda\">Compras</ion-label>\n            <ion-input formControlName=\"compras\" placeholder=\"Ex: R$20,00\" (ionBlur)=\"calcularTotalViagem($event, 'compras')\"></ion-input>\n            <!-- <app-controle-erro\n              [mostrarErro]=\"validaValor('valor')\"\n              mensagemErro=\"Insira um valor válido\">\n            </app-controle-erro> -->\n          </ion-item>\n\n          <ion-item>\n            <ion-label class=\"legenda\">Lazer</ion-label>\n            <ion-input formControlName=\"lazer\" placeholder=\"Ex: R$20,00\" (ionBlur)=\"calcularTotalViagem($event, 'lazer')\"></ion-input>\n            <!-- <app-controle-erro\n              [mostrarErro]=\"validaValor('valor')\"\n              mensagemErro=\"Insira um valor válido\">\n            </app-controle-erro> -->\n          </ion-item>\n\n          <ion-item>\n            <ion-label class=\"legenda\">Burocracia</ion-label>\n            <ion-input formControlName=\"burocracia\" placeholder=\"Ex: R$20,00\" (ionBlur)=\"calcularTotalViagem($event, 'burocracia')\"></ion-input>\n            <!-- <app-controle-erro\n              [mostrarErro]=\"validaValor('valor')\"\n              mensagemErro=\"Insira um valor válido\">\n            </app-controle-erro> -->\n          </ion-item>\n\n          <ion-item>\n            <ion-label class=\"legenda\">Gastos Extras</ion-label>\n            <ion-input formControlName=\"gastosExtras\" placeholder=\"Ex: R$20,00\" (ionBlur)=\"calcularTotalViagem($event, 'gastosExtras')\"></ion-input>\n            <!-- <app-controle-erro\n              [mostrarErro]=\"validaValor('valor')\"\n              mensagemErro=\"Insira um valor válido\">\n            </app-controle-erro> -->\n          </ion-item>\n\n          <ion-item>\n            <ion-label class=\"legenda\">Total</ion-label>\n            <ion-input formControlName=\"valor\" [readonly]=\"true\" placeholder=\"Ex: R$20,00\" [(ngModel)]=\"totalViagemFormatado\"></ion-input>\n            <!-- <app-controle-erro\n              [mostrarErro]=\"validaValor('valor')\"\n              mensagemErro=\"Insira um valor válido\">\n            </app-controle-erro> -->\n          </ion-item>\n        </div>\n\n        <ng-template #desejoBemMaterial>\n          <ion-item>\n            <ion-label class=\"legenda\">Valor</ion-label>\n            <ion-input formControlName=\"valor\" placeholder=\"Ex: R$20,00\"></ion-input>\n            <!-- <app-controle-erro\n              [mostrarErro]=\"validaValor('valor')\"\n              mensagemErro=\"Insira um valor válido\">\n            </app-controle-erro> -->\n          </ion-item>\n        </ng-template>\n\n        <ion-item>\n          <ion-label class=\"legenda\">Economizar (mês)</ion-label>\n          <ion-input formControlName=\"economizar\" placeholder=\"Ex: R$20,00\"></ion-input>\n          <!-- <app-controle-erro\n            [mostrarErro]=\"validaValor('valor')\"\n            mensagemErro=\"Insira um valor válido\">\n          </app-controle-erro> -->\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=\"legenda\">Quanto já economizei</ion-label>\n          <ion-input formControlName=\"quantiaEconomizada\" placeholder=\"Ex: R$400,00\"></ion-input>\n          <!-- <app-controle-erro\n            [mostrarErro]=\"validaValor('valor')\"\n            mensagemErro=\"Insira um valor válido\">\n          </app-controle-erro> -->\n        </ion-item>\n\n        <ion-item>\n          <ion-button (click)=\"calcularPrazo()\" shape=\"round\">\n            Calcular prazo\n          </ion-button>\n          <ion-label class=\"legenda\">Prazo</ion-label>\n          <ion-input formControlName=\"prazo\" [readonly]=\"true\" placeholder=\"\" [(ngModel)]=\"prazoMesAno\"></ion-input>\n          <!-- <app-controle-erro\n            [mostrarErro]=\"validaValor('valor')\"\n            mensagemErro=\"Insira um valor válido\">\n          </app-controle-erro> -->\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-checkbox formControlName=\"concluido\" (ionChange)=\"verificarConcluido($event)\"></ion-checkbox>\n          <ion-label>Desejo concluído</ion-label>\n        </ion-item>\n      </form>\n    </ion-list>\n\n    <ion-button (click)=\"adicionar()\" class=\"botao-full\" size=\"full\" shape=\"round\" [disabled]=\"!form.valid\">\n      Adicionar\n    </ion-button>\n    <ion-button (click)=\"cancelar()\" size=\"full\" shape=\"round\" fill=\"outline\">Cancelar</ion-button>\n  </div>\n</ion-content>";

/***/ }),

/***/ 3176:
/*!******************************************************************************************!*\
  !*** ./src/app/gastos-receitas/components/adicionar/adicionar.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-header collapse=\"fade\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"cancelar()\">\n          <ion-icon class=\"icon-header\" name=\"arrow-back-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title id=\"titulo\">{{ adicionarOuEditar }} {{ movimentacao }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <ion-list id=\"lista-gasto\">\n      <form [formGroup]=\"form\">\n        <ion-item>\n          <ion-label class=\"legenda\">Nome</ion-label>\n          <ion-input formControlName=\"nome\"></ion-input>\n          <app-controle-erro\n            [mostrarErro]=\"verificaValidTouched('nome')\"\n            mensagemErro=\"Insira um nome\">\n          </app-controle-erro>\n        </ion-item>\n\n        <ion-item (click)=\"showPicker = !showPicker\">\n          <ion-label class=\"legenda\">Data</ion-label>\n          <ion-text slot=\"end\">{{ formattedString }}</ion-text>\n        </ion-item>\n        <ion-datetime formControlName=\"data\" *ngIf=\"showPicker\" #datetime \n          presentation=\"date\"\n          [value]=\"dateValue\" \n          size=\"cover\" \n          (ionChange)=\"dateChanged(datetime.value)\">\n        </ion-datetime>\n        <app-controle-erro\n          [mostrarErro]=\"verificaValidTouched('data')\"\n          mensagemErro=\"Insira uma data\">\n        </app-controle-erro>\n\n        <ion-item *ngIf=\"movimentacao == 'Gasto'\">\n          <ion-label class=\"legenda\">Tipo</ion-label>\n          <ion-select formControlName=\"tipoGasto\" cancelText=\"Cancelar\" placeholder=\"Selecionar\">\n            <ion-select-option value=\"Essencial\">Gasto Essencial</ion-select-option>\n            <ion-select-option value=\"Alimentação\">Alimentação</ion-select-option>\n            <ion-select-option value=\"Calçado\">Calçado</ion-select-option>\n            <ion-select-option value=\"Combustivel\">Combustível</ion-select-option>\n            <ion-select-option value=\"Construção\">Construção</ion-select-option>\n            <ion-select-option value=\"Cursos\">Cursos</ion-select-option>\n            <ion-select-option value=\"Decoração\">Decoração</ion-select-option>\n            <ion-select-option value=\"Eletrodomésticos\">Eletrodomésticos</ion-select-option>\n            <ion-select-option value=\"Eletrônicos\">Eletrônicos</ion-select-option>\n            <ion-select-option value=\"Estética\">Estética</ion-select-option>\n            <ion-select-option value=\"Lazer\">Lazer</ion-select-option>\n            <ion-select-option value=\"Maquiagem\">Maquiagem</ion-select-option>\n            <ion-select-option value=\"Restaurante\">Restaurante</ion-select-option>\n            <ion-select-option value=\"Roupas\">Roupas</ion-select-option>\n            <ion-select-option value=\"Transporte\">Transporte</ion-select-option>\n            <ion-select-option value=\"Viagem\">Viagem</ion-select-option>\n            <ion-select-option value=\"Outro\">Outro</ion-select-option>\n          </ion-select>\n          <app-controle-erro\n            [mostrarErro]=\"verificaValidTouched('tipoGasto')\"\n            mensagemErro=\"Insira um tipo\">\n          </app-controle-erro>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class=\"legenda\">Valor</ion-label>\n          <ion-input formControlName=\"valor\" placeholder=\"Ex: R$20,00\"></ion-input>\n          <app-controle-erro\n            [mostrarErro]=\"validaValor('valor')\"\n            mensagemErro=\"Insira um valor válido\">\n          </app-controle-erro>\n        </ion-item>\n      </form>\n    </ion-list>\n    <ion-button (click)=\"adicionar()\" class=\"botao-full\" \n      size=\"full\" shape=\"round\" [disabled]=\"!form.valid\">\n      Adicionar\n    </ion-button>\n    <ion-button (click)=\"cancelar()\" size=\"full\" shape=\"round\" fill=\"outline\">Cancelar</ion-button>\n  </div>\n</ion-content>";

/***/ }),

/***/ 6230:
/*!*****************************************************************************!*\
  !*** ./src/app/gastos-receitas/components/gasto/gasto.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-header collapse=\"fade\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"navegar('home')\">\n          <ion-icon class=\"icon-header\" name=\"arrow-back-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title id=\"titulo\">Gasto</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"adicionar()\">\n          <ion-icon class=\"icon-header\" name=\"add-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <ion-segment [(ngModel)]=\"abaSelecionada\">\n      <ion-segment-button value=\"eventual\">\n        <ion-label>Eventual</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"essencial\">\n        <ion-label>Essencial</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div *ngIf=\"abaSelecionada == 'eventual'\">\n      <ion-card *ngFor=\"let gasto of gastosEventuais$ | async\">\n        <ion-card-header>\n          <ion-card-title>\n            <ion-grid>\n              <ion-row class=\"nome-gasto\">\n                <ion-col>\n                  {{ gasto.nome }}\n                </ion-col>\n                <div>\n                  <ion-button (click)=\"editar(gasto)\" fill=\"clear\" class=\"botao-editar-excluir\">\n                    <ion-icon class=\"icones\" name=\"pencil-outline\"></ion-icon>\n                  </ion-button>\n                  <ion-button (click)=\"excluir(gasto)\" fill=\"clear\" class=\"botao-editar-excluir\">\n                    <ion-icon class=\"icones\" name=\"trash-outline\"></ion-icon>\n                  </ion-button>\n                </div>\n              </ion-row>\n            </ion-grid>\n          </ion-card-title>\n          <ion-card-subtitle> {{ gasto.data }} - {{ gasto.tipoGasto }}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>R$ {{ gasto.valor }} </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div *ngIf=\"abaSelecionada == 'essencial'\">\n      <ion-card *ngFor=\"let gasto of gastosEssenciais$ | async\">\n        <ion-card-header>\n          <ion-card-title> \n            <ion-grid>\n              <ion-row class=\"nome-gasto\">\n                <ion-col>\n                  {{ gasto.nome }}\n                </ion-col>\n                <div>\n                  <ion-button (click)=\"editar(gasto)\" fill=\"clear\" class=\"botao-editar-excluir\">\n                    <ion-icon class=\"icones\" name=\"pencil-outline\"></ion-icon>\n                  </ion-button>\n                  <ion-button (click)=\"excluir(gasto)\" fill=\"clear\" class=\"botao-editar-excluir\">\n                    <ion-icon class=\"icones\" name=\"trash-outline\"></ion-icon>\n                  </ion-button>\n                </div>\n              </ion-row>\n            </ion-grid>\n          </ion-card-title>\n          <ion-card-subtitle> {{ gasto.data }} </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>R$ {{ gasto.valor }} </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>";

/***/ }),

/***/ 2794:
/*!*******************************************************************************************!*\
  !*** ./src/app/gastos-receitas/components/lista-desejo/lista-desejo.page.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-header collapse=\"fade\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"navegar('home')\">\n          <ion-icon class=\"icon-header\" name=\"arrow-back-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title id=\"titulo\">Lista de Desejos</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"adicionar()\">\n          <ion-icon class=\"icon-header\" name=\"add-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <div *ngFor=\"let desejo of desejos$ | async\">\n      <ion-card *ngIf=\"desejo.tipo == 'bem-material'; else viagem\">\n        <ion-card-header>\n          <ion-card-title>\n            <ion-grid>\n              <ion-row class=\"nome-gasto\">\n                <ion-col>\n                  <div [ngStyle]=\"{'text-decoration': desejo.concluido==1 ? 'line-through' : 'none'}\">\n                    {{desejo.nome}}\n                  </div>\n                </ion-col>\n                <div>\n                  <ion-button (click)=\"editar(desejo)\" fill=\"clear\" class=\"botao-editar-excluir\">\n                    <ion-icon class=\"icones\" name=\"pencil-outline\"></ion-icon>\n                  </ion-button>\n                  <ion-button (click)=\"excluir(desejo)\" fill=\"clear\" class=\"botao-editar-excluir\">\n                    <ion-icon class=\"icones\" name=\"trash-outline\"></ion-icon>\n                  </ion-button>\n                </div>\n              </ion-row>\n            </ion-grid>\n          </ion-card-title>\n          <ion-card-subtitle>R$ {{desejo.valor}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <p>Economizar/mês: R$ {{desejo.economizar}}</p>\n          <p>Total de quantia economizada: R$ {{desejo.quantiaEconomizada}}</p>\n          <p>Prazo: {{ desejo.prazo }}</p>\n          <div class=\"progresso\">\n            <p>Progresso:  {{ calcularPorcentagem(desejo.valor, desejo.quantiaEconomizada) }} % </p>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <ng-template #viagem>\n        <ion-card class=\"card-viagem\">\n          <ion-card-header>\n            <ion-card-title>\n              <ion-grid>\n                <ion-row class=\"nome-gasto\">\n                  <ion-col>\n                    <div [ngStyle]=\"{'text-decoration': desejo.concluido==1 ? 'line-through' : 'none'}\">\n                      {{desejo.nome}}\n                    </div>\n                  </ion-col>\n                  <div>\n                    <ion-button (click)=\"editar(desejo)\" fill=\"clear\" class=\"botao-editar-excluir\">\n                      <ion-icon class=\"icones\" name=\"pencil-outline\"></ion-icon>\n                    </ion-button>\n                    <ion-button (click)=\"excluir(desejo)\" fill=\"clear\" class=\"botao-editar-excluir\">\n                      <ion-icon class=\"icones\" name=\"trash-outline\"></ion-icon>\n                    </ion-button>\n                  </div>\n                </ion-row>\n              </ion-grid>\n            </ion-card-title>\n            <ion-card-subtitle>R$ {{desejo.valor}}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <p>Hospedagem: R$ {{desejo.hospedagem}}</p>\n            <p>Alimentação: R$ {{desejo.alimentacao}}</p>\n            <p>Passagem: R$ {{desejo.passagem}}</p>\n            <p>Transporte: R$ {{desejo.transporte}}</p>\n            <p>Compras: R$ {{desejo.compras}}</p>\n            <p>Lazer: R$ {{desejo.lazer}}</p>\n            <p>Gastos Extras: R$ {{desejo.gastosExtras}}</p>\n            <p>Burocracia: R$ {{desejo.burocracia}}</p>\n            <br>\n            <p>Economizar/mês: R$ {{desejo.economizar}}</p>\n            <p>Total de quantia economizada: R$ {{desejo.quantiaEconomizada}}</p>\n            <p>Prazo: {{ desejo.prazo }}</p>\n            <div class=\"progresso\">\n              <p>Progresso:  {{ calcularPorcentagem(desejo.valor, desejo.quantiaEconomizada) }} % </p>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ng-template>\n    </div>\n  </div>\n</ion-content>";

/***/ }),

/***/ 1969:
/*!*********************************************************************************!*\
  !*** ./src/app/gastos-receitas/components/receita/receita.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n  <ion-header collapse=\"fade\" class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"navegar('home')\">\n          <ion-icon class=\"icon-header\" name=\"arrow-back-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title id=\"titulo\">Receita</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"adicionar()\">\n          <ion-icon class=\"icon-header\" name=\"add-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n      <ion-card *ngFor=\"let receita of receitas$ | async\">\n        <ion-card-header>\n          <ion-card-title> \n            <ion-grid>\n              <ion-row class=\"nome-gasto\">\n                <ion-col>\n                  {{ receita.nome }}\n                </ion-col>\n                <div>\n                  <ion-button (click)=\"editar(receita)\" fill=\"clear\" class=\"botao-editar-excluir\">\n                    <ion-icon class=\"icones\" name=\"pencil-outline\"></ion-icon>\n                  </ion-button>\n                  <ion-button (click)=\"excluir(receita)\" fill=\"clear\" class=\"botao-editar-excluir\">\n                    <ion-icon class=\"icones\" name=\"trash-outline\"></ion-icon>\n                  </ion-button>\n                </div>\n              </ion-row>\n            </ion-grid>\n          </ion-card-title>\n          <ion-card-subtitle> {{ receita.data }} </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>R$ {{ receita.valor }} </ion-card-content>\n      </ion-card>\n  </div>\n</ion-content>";

/***/ }),

/***/ 6613:
/*!******************************************************************************!*\
  !*** ./src/app/shared/controle-erro/controle-erro.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"mostrarErro\">\n  <div class=\"errorDiv\">\n    {{ mensagemErro }}\n  </div>\n</div>\n";

/***/ }),

/***/ 5534:
/*!******************************************************************************!*\
  !*** ./src/app/shared/mensagem-erro/mensagem-erro.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <div *ngIf=\"errorMessage != null\" >\n  <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n  <span class=\"sr-only\">(error)</span>\n  <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n    {{ errorMessage }}\n  </div>\n</div> -->\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map