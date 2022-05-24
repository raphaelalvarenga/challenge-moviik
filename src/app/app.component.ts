import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Quote } from "interfaces/quote.interface";
import { map, Observable, of } from "rxjs";
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
    filterRange = [0, 10];
    isPreviousButtonDisabled = true;
    searchValue = "";

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
        return this.quotes$.pipe(
            map(quotes =>
                this.convertToLowerCaseAndTrim(this.searchValue)
                    ? quotes.filter(
                          quote =>
                              this.convertToLowerCaseAndTrim(quote.author).includes(
                                  this.convertToLowerCaseAndTrim(this.searchValue)
                              ) ||
                              this.convertToLowerCaseAndTrim(quote.en).includes(
                                  this.convertToLowerCaseAndTrim(this.searchValue)
                              )
                      )
                    : quotes
            ),
            map(quotes => quotes.filter((quote, index) => index >= this.filterRange[0] && index < this.filterRange[1]))
        );
    }

    previousPage() {
        const [first, last] = this.filterRange;

        this.filterRange = [first - 10, last - 10];
        this.filterQuotes();

        if (first - 10 === 0) {
            this.isPreviousButtonDisabled = true;
        }
    }

    nextPage() {
        const [first, last] = this.filterRange;

        this.filterRange = [first + 10, last + 10];
        this.filterQuotes();
        this.isPreviousButtonDisabled = false;
    }

    convertToLowerCaseAndTrim(value: string) {
        return value.trim().toLowerCase();
    }

    handleSearchChange(value: string) {
        this.searchValue = value;
        this.filterQuotes();
    }
}
