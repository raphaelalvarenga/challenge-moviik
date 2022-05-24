import { Component, Input, OnInit } from "@angular/core";
import { Quote } from "interfaces/quote.interface";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
    @Input() quote: Quote = { id: "", author: "", en: "" };
    liked = false;

    faThumbsUp = faThumbsUp;

    constructor() {}

    ngOnInit(): void {}

    toggleLike() {
        this.liked = !this.liked;
    }
}
