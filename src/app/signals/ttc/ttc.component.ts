import { Component, computed, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-ttc",
  templateUrl: "./ttc.component.html",
  styleUrls: ["./ttc.component.css"],
  imports: [FormsModule],
})
export class TtcComponent {
  priceHt = signal(0);
  taxe = signal(18);
  qty = signal(1);
  // à vérifier
  unitaireTtc = computed(() => (this.priceHt() * (100 + this.taxe())) / 100);
  discount = computed(() => {
    let discountPercent = 0;
    if (this.qty() > 10 && this.qty() <= 15) {
      discountPercent = 20;
    } else if (this.qty() > 15) {
      discountPercent = 30;
    }
    return (this.unitaireTtc() * discountPercent) / 100;
  });
  totalTtc = computed(
    () => (this.unitaireTtc() - this.discount()) * this.qty()
  );
}
