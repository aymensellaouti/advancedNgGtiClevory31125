import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ConnectedUser } from "../../auth/services/auth.service";

@Component({
  selector: "app-cdfils",
  templateUrl: "./cdfils.component.html",
  styleUrls: ["./cdfils.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdfilsComponent {
  @Input()
  name = "aymen";
  @Input()
  user: ConnectedUser = {
    id: 1,
    email: "aymen@gmail.com",
  };
}
