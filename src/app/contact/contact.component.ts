import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  concateData = [];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.concateData.push(i);
    }
  }
}
