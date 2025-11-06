import { Injectable, inject } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class SayHelloService {
  private loggerService = inject(LoggerService);

  hello() {
    this.loggerService.logger("Hello GTI :)");
  }
}
