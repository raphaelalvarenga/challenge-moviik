import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Quote } from "interfaces/quote.interface";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    private apiUrl = "https://programming-quotes-api.herokuapp.com/Quotes";

    constructor(private http: HttpClient) {}

    getQuotes() {
        return this.http.get<Quote[]>(this.apiUrl);
    }
}
