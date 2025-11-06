import { Component, computed, signal, WritableSignal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-som",
  imports: [FormsModule],
  templateUrl: "./som.component.html",
  styleUrl: "./som.component.css",
})
export class SomComponent {
  x = signal(3);
  y = signal(5);
  names = signal<string[]>(["aymen"]);
  addName() {
    this.names.update((names) => [...names, "test"]);
  }
  namesNumber = computed(() => this.names().length);
  z = computed(() => this.x() + this.y());
  dz = computed(() => this.z() * 2);
}
