import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class CustomPreloadingStratey implements PreloadingStrategy {
  preload(route: Route, preload: () => Observable<any>): Observable<any> {
    // itha kan 9otli preloady nraja3 prelaod()
    if (route.data && route.data["preload"]) return preload();
    // sinon nraja3 of(null)
    return of(null);
  }
}
