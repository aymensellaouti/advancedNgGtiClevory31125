import { InjectionToken } from "@angular/core";
import { LoggerService } from "../services/logger.service";

export const LOGGERS_TOKEN = new InjectionToken<LoggerService[]>(
  "LOGGERS_TOKEN"
);
