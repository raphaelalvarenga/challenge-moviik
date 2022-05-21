import { Component } from "@angular/core";
import { Quote } from "interfaces/quote.interface";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "challenge-moviik";

    quotes: Quote[] = [];
}
