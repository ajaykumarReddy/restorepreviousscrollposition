import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  homeData = [];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 40; i++) {
      this.homeData.push(i);
    }
  }
}
