import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Quote } from "interfaces/quote.interface";
import { Observable, of } from "rxjs";
import { ApiService } from "./services/api.service";
import { quoteAction } from "./states/quote/quote.action";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    title = "challenge-moviik";

    quotes$: Observable<Quote[]> = of([]);

    constructor(private apiService: ApiService, private store: Store<{ quoteReducer: Quote[] }>) {
        // this.quotes$ = this.store.select("quoteReducer")
    }

    ngOnInit(): void {
        this.apiService.getQuotes().subscribe({
            next: result => {
                this.store.dispatch(quoteAction());
            },
            error: erro => console.log(erro),
        });
    }
}
