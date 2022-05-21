import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LetterComponent } from "./letter/letter.component";

@NgModule({
    declarations: [AppComponent, CardComponent, LetterComponent],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
