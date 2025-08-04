import { ApplicationConfig, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// Register Spanish locale data
registerLocaleData(localeEs);
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, provideRouter } from '@angular/router';
import { appRoutes } from './app-routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthGuard } from './guards/auth-guard.service';

// PrimeNG modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      // PrimeNG modules
      TableModule,
      ButtonModule,
      ConfirmDialogModule,
      DialogModule,
      InputTextModule,
      TooltipModule,
      ProgressSpinnerModule,
      MessageModule,
      DropdownModule,
      InputNumberModule
    ),
    { provide: LOCALE_ID, useValue: navigator.language },
    ConfirmationService,
    MessageService,
    AuthGuard
  ]
};
