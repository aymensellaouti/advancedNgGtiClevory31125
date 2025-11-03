import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { CvService } from "../services/cv.service";
import { Cv } from "../model/cv";

// Khedmtou ijib la liste des cvs
export const cvsResolver: ResolveFn<Cv[]> = (route, state) => {
  const cvService = inject(CvService);
  return cvService.getCvs();
};
