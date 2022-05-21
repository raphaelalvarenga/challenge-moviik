import { Component, Input, OnInit } from "@angular/core";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Quote } from "interfaces/quote.interface";

@Component({
    selector: "app-letter",
    templateUrl: "./letter.component.html",
    styleUrls: ["./letter.component.scss"],
})
export class LetterComponent implements OnInit {
    @Input() quote: Quote = { id: "", author: "", en: "" };

    faThumbsUp = faThumbsUp;

    constructor() {}

    ngOnInit(): void {}
}
