import { Component } from '@angular/core';
import { QuoteService } from "../quote.service";
import { Quote } from "../model/quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [QuoteService]
})
export class QuoteComponent {

  private currentQuote: Quote;

  constructor(private quoteService: QuoteService) {
    this.getNewQuote("movies");
  }

  getNewQuote(category: string): void {
    this.quoteService.requestQuote(category).subscribe((response) => {
      this.currentQuote = <Quote>response.json();
    })
  }

}
