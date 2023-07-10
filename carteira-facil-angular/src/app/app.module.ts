import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './login/auth.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { GastosReceitasModule } from './gastos-receitas/gastos-receitas.module';
import { registerLocaleData } from '@angular/common';
import { HTTP } from '@ionic-native/http/ngx';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        GastosReceitasModule
    ],
    providers: [
        // {
        //     provide: RouteReuseStrategy,
        //     useClass: IonicRouteStrategy
        // },
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR'
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        AuthService,
        AuthGuardService,
        HTTP
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
