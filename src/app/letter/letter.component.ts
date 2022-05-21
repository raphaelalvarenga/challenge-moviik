import { Component, OnInit } from "@angular/core";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

@Component({
    selector: "app-letter",
    templateUrl: "./letter.component.html",
    styleUrls: ["./letter.component.scss"],
})
export class LetterComponent implements OnInit {
    faThumbsUp = faThumbsUp;

    constructor() {}

    ngOnInit(): void {}
}
