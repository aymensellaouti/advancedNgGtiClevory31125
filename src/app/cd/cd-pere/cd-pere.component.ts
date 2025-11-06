import { Component } from "@angular/core";
import { ConnectedUser } from "../../auth/services/auth.service";

@Component({
  selector: "app-cd-pere",
  templateUrl: "./cd-pere.component.html",
  styleUrls: ["./cd-pere.component.css"],
})
export class CdPereComponent {
  name = "aymen";
  user: ConnectedUser = {
    id: 1,
    email: "aymen@gmail.com",
  };
  changeUser(email: string) {
    this.user = {
      ...this.user,
      email,
    };
  }
}
