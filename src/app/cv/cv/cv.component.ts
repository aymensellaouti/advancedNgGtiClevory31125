import { Component, Inject } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { EMPTY, Observable, catchError, of } from "rxjs";
import { SayHelloService } from "../../services/say-hello.service";
import { LOGGERS_TOKEN } from "../../injection tokens/loggers.injection-token";
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;
  /*   selectedCv: Cv | null = null; */
  date = new Date();

  constructor(
    //private logger: LoggerService,
    @Inject(LOGGERS_TOKEN) private loggers: LoggerService[],
    private toastr: ToastrService,
    private cvService: CvService,
    private sayHelloService: SayHelloService
  ) {
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: () => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      },
    });
    //this.logger.logger("je suis le cvComponent");
    this.toastr.info("Bienvenu dans notre CvTech");
    this.sayHelloService.hello();
    this.loggers.forEach((logger) =>
      logger.logger("CC je suis le cvComponent")
    );
  }
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
