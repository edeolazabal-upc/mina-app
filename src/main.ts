import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Component, importProvidersFrom } from '@angular/core';
import { MinaCrearComponent } from './app/component/mina-crear/mina-crear.component';
import { MinaListarComponent } from './app/component/mina-listar/mina-listar.component';
import { provideRouter, RouteConfigLoadStart, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: 'nuevo', component: MinaCrearComponent},
  {path: 'listar', component: MinaListarComponent},
  {path: '', redirectTo: '/nuevo', pathMatch: 'full'}

]

bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes), 
      importProvidersFrom(HttpClientModule, RouterModule, MatToolbarModule, BrowserAnimationsModule), provideAnimationsAsync()]
  });

