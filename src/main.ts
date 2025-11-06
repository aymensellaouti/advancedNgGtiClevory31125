import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AuthInterceptorProvider } from "./app/auth/interceptors/auth.interceptor";
import { CvService } from "./app/cv/services/cv.service";
import { CONSTANTES } from "./config/const.config";
import { FakeCvService } from "./app/cv/services/fake-cv.service";
import { LoggerService } from "./app/services/logger.service";
import { Logger2Service } from "./app/services/logger2.service";
import { LOGGERS_TOKEN } from "./app/injection tokens/loggers.injection-token";
import { Logger3Service } from "./app/services/logger3.service";
import { UUID_TOKEN } from "./app/injection tokens/uuid.injection-token";
import { v4 as uuidV4 } from "uuid";
import { SayHelloService } from "./app/services/say-hello.service";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideAnimations } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { routes } from "./app/app-routing.module";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { ServiceWorkerModule } from "@angular/service-worker";
import { isDevMode, importProvidersFrom } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { provideRouter, withPreloading } from "@angular/router";
import { CustomPreloadingStratey } from "./app/preloading strategis/custom.preloading-strategy";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      FormsModule, // required animations module
      ToastrModule.forRoot(), // ToastrModule added
      ReactiveFormsModule,
      NgxUiLoaderModule,
      ServiceWorkerModule.register("ngsw-worker.js", {
        enabled: !isDevMode(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: "registerWhenStable:30000",
      })
    ),
    AuthInterceptorProvider,
    {
      provide: CvService,
      useClass: CONSTANTES.env == "prod" ? FakeCvService : CvService,
    },
    {
      provide: LoggerService,
      useClass: Logger2Service,
    },
    {
      provide: LOGGERS_TOKEN,
      useClass: LoggerService,
      multi: true,
    },
    {
      provide: LOGGERS_TOKEN,
      useClass: Logger2Service,
      multi: true,
    },
    {
      provide: LOGGERS_TOKEN,
      useClass: Logger3Service,
      multi: true,
    },
    {
      provide: UUID_TOKEN,
      useValue: () => uuidV4,
    },
    SayHelloService,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter(routes, withPreloading(CustomPreloadingStratey)),
  ],
}).catch((err) => console.error(err));
