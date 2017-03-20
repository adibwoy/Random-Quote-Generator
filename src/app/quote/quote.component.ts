import { Component } from '@angular/core';
import { QuoteService } from "../quote.service";
import { Quote } from "../model/quote";

const categories: string[] = ["movies", "famous"];

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [QuoteService]
})
export class QuoteComponent {

  private currentQuote: Quote;

  constructor(private quoteService: QuoteService) {
    this.getNewQuote();
  }

  getNewQuote(): void {
    let category: string = categories[Math.floor(Math.random()*categories.length)];
    this.quoteService.requestQuote(category).subscribe((response) => {
      this.currentQuote = response.json() as Quote;
    })
  }

}
