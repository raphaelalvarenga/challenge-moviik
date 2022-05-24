import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LetterComponent } from "./letter/letter.component";
import { StoreModule } from "@ngrx/store";
import { quoteReducer } from "./states/quote/quote.reducer";
import { PaginationComponent } from "./pagination/pagination.component";

@NgModule({
    declarations: [AppComponent, CardComponent, LetterComponent, PaginationComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        StoreModule.forRoot({ quoteReducer }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
