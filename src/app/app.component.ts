import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  password = "";
  letters = false;
  numbers = false;
  symbols = false;

  useLetters() {
    this.letters = !this.letters;
  }

  useNumbers() {
    this.numbers = !this.numbers;
  }

  useSymbols() {
    this.symbols = !this.symbols;
  }

  onButtonClick() {
    console.log(`${this.letters}, ${this.numbers}, ${this.symbols}`);
    this.password = "my password";
  }
}
