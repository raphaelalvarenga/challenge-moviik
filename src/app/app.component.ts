import { Component } from "@angular/core";
import { Quote } from "interfaces/quote.interface";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "challenge-moviik";

    quotes: Quote[] = [
        {
            id: "5a6ce86e2af929789500e7e4",
            author: "Edsger W. Dijkstra",
            en: "Computer Science is no more about computers than astronomy is about telescopes.",
        },
        {
            id: "5a6ce86e2af929789500e7d7",
            author: "Edsger W. Dijkstra",
            en: "Simplicity is prerequisite for reliability.",
        },
        {
            id: "5a6ce86d2af929789500e7ca",
            author: "Edsger W. Dijkstra",
            en: "The computing scientist’s main challenge is not to get confused by the complexities of his own making.",
        },
        {
            id: "5a6ce86f2af929789500e7f3",
            author: "Edsger W. Dijkstra",
            en: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        },
        {
            id: "5a6ce86e2af929789500e7d9",
            author: "Edsger W. Dijkstra",
            en: "A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure „programmer productivity“ in terms of „number of lines of code produced“. In so doing they book that number on the wrong side of the ledger: We should always refer to „the number of lines of code spent“.",
        },
    ];
}
