import { Component, Inject } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { EMPTY, Observable, catchError, delay, of, retry } from "rxjs";
import { SayHelloService } from "../../services/say-hello.service";
import { LOGGERS_TOKEN } from "../../injection tokens/loggers.injection-token";
import { TodoService } from "../../todo/service/todo.service";
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs$: Observable<Cv[]> = this.cvService.getCvs().pipe(
    retry({
      delay: 1500,
      count: 3,
    }),
    catchError((e) => {
      this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      return of(this.cvService.getFakeCvs());
    })
  );
  selectedCv$: Observable<Cv> = this.cvService.selectedCv$;
  /*   selectedCv: Cv | null = null; */
  date = new Date();

  constructor(
    //private logger: LoggerService,
    @Inject(LOGGERS_TOKEN) private loggers: LoggerService[],
    private toastr: ToastrService,
    private cvService: CvService,
    private todoService: TodoService,
    private sayHelloService: SayHelloService
  ) {
    //this.logger.logger("je suis le cvComponent");
    this.toastr.info("Bienvenu dans notre CvTech");
    this.sayHelloService.hello();
    this.loggers.forEach((logger) =>
      logger.logger("CC je suis le cvComponent")
    );
  }
}
