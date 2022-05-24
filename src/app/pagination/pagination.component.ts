import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-pagination",
    templateUrl: "./pagination.component.html",
    styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
    @Input() isPreviousButtonDisabled = true;
    @Output() setPreviousPage = new EventEmitter();
    @Output() setNextPage = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    previousPage() {
        this.setPreviousPage.emit();
    }

    nextPage() {
        this.setNextPage.emit();
    }
}
