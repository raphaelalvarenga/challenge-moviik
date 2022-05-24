import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-topbar",
    templateUrl: "./topbar.component.html",
    styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
    @Input() searchValue = "";
    @Output() searchValueChange = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    handleSearchChange(event: KeyboardEvent) {
        this.searchValueChange.emit((event.target as HTMLInputElement).value);
    }
}
