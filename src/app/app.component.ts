import { Component, OnInit } from "@angular/core";
import { Quote } from "interfaces/quote.interface";
import { ApiService } from "./services/api.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    title = "challenge-moviik";

    constructor(private apiService: ApiService) {}

    quotes: Quote[] = [];

    ngOnInit(): void {
        // this.apiService.getQuotes().subscribe({
        //     next: result => {
        //         this.quotes = result;
        //     },
        //     error: erro => console.log(erro),
        // });
    }
}
