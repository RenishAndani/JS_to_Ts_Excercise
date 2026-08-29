class Book {
  name: string;
  author: string;
  price: number;
  status: string;
  constructor(name: string, author: string, price: number, status: string) {
    this.name = name;
    this.author = author;
    this.price = price;
    this.status = status;
  }

  getReadingStatus(): string {
    return this.status;
  }

  getInfo(): void {
    console.log(`Book: ${this.name}`);
    console.log(`author: ${this.author}`);
    console.log(`price: ${this.price}`);
    console.log(`status: ${this.status}`);
  }
}

let b1 = new Book("HarryPotter", "J. K. Rowling", 500, "Read");
b1.getInfo();
console.log(b1.getReadingStatus());

let b2 = new Book("Game Of Thrones", "G. R. R. Martin", 600, "Unread");
b2.getInfo();
console.log(b2.getReadingStatus());
