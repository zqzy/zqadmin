import { HashLocationStrategy, LocationStrategy, CommonModule } from '@angular/common';//引入的原因是如果服务器不再node服务器上
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';


import { AppComponent } from './app.component';
import { HttpService } from './service/httpService';
import { tokenInterceptor } from './service/tokenInterceptor';
import { AppRoutingModule } from './app.router';
import { SharedModule } from './shared/shared.module';
import { DisableControlDirective } from './service/disable.device';
import { TongXService } from './service/tongxData';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AppRoutingModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化 **/
  providers: [{ provide: NZ_I18N, useValue: zh_CN },
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  { provide: HTTP_INTERCEPTORS, useClass: tokenInterceptor, multi: true },
    HttpService,TongXService]
})
export class AppModule { }