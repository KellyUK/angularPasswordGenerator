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
  length = 0;

  useLength(value: string) {
    const parsedNum = parseInt(value);
    if (!isNaN(parsedNum)) {
      this.length = parsedNum;
    }
  }

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
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@£$%^&*()";

    let validChars = "";

    if (this.letters) {
      validChars += letters;
    }
    if (this.numbers) {
      validChars += numbers;
    }
    if (this.symbols) {
      validChars += symbols;
    }

    let genPass = "";
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      genPass += validChars[index];
    }
    this.password = genPass;
  }
}
