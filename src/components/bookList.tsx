import BookCard from "./bookCard";
import type { Book } from "../../books/types";

type Props = {
  books: Book[];
  renderActions: (book: Book) => React.ReactNode;
};

export default function BookList({ books, renderActions }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <div key={book.id}>
          <BookCard book={book} />
          <div className="mt-2">{renderActions(book)}</div>
        </div>
      ))}
    </div>
  );
}