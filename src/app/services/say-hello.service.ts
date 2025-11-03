import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class SayHelloService {
  constructor(private loggerService: LoggerService) {}
  hello() {
    this.loggerService.logger("Hello GTI :)");
  }
}
