import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Quote } from "interfaces/quote.interface";
import { filter, map, Observable, of, toArray } from "rxjs";
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
    filteredQuotes: Quote[] = [];

    constructor(private apiService: ApiService, private store: Store<{ quoteReducer: Quote[] }>) {
        this.quotes$ = this.store.select("quoteReducer");
    }

    ngOnInit(): void {
        this.apiService.getQuotes().subscribe({
            next: quotes => {
                this.store.dispatch(quoteAction({ quotes }));
            },
            error: erro => console.log(erro),
        });
    }

    filterQuotes() {
        return this.quotes$.pipe(map(quotes => quotes.filter((quote, index) => index < 3)));
    }
}
