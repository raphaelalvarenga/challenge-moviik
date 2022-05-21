import { Component, Input, OnInit } from "@angular/core";
import { Quote } from "interfaces/quote.interface";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
    @Input() quote: Quote = { id: "", author: "", en: "" };

    constructor() {}

    ngOnInit(): void {}
}
