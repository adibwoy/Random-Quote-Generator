export class Quote {

  /** Quote **/
  private _quote: string;

  get quote(): string {
    return this._quote;
  }

  set quote(value: string) {
    this._quote = value;
  }

  /** Author **/
  private _author: string;

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  /** Category **/
  private _category: string;

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }
}
