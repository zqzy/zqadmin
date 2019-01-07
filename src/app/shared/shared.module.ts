import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { NzTreeModule } from 'ng-tree-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {ENgxPrintModule} from "e-ngx-print";



import { NgZorroAntdModule, NzMessageService } from 'ng-zorro-antd';

// region: zorro modules
import 'zone.js';
import 'reflect-metadata';
import { ViserModule } from 'viser-ng';
import { BrowserModule } from '@angular/platform-browser';
import { DisableControlDirective } from '../service/disable.device';
import { AdDirective } from '../service/AdDirective';
import { DragDirective } from '../service/drop';

@NgModule({
    imports: [
    // BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        ViserModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgZorroAntdModule,
        ViserModule,
        DisableControlDirective,
        AdDirective,
        DragDirective
        // BrowserModule
    ],
    declarations:[
        DisableControlDirective,
        AdDirective,
        DragDirective
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                NzMessageService
            ]
        };
    }
}
