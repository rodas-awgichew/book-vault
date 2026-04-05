import { BOOKS } from "../../books/data";
import { useBookStore } from "../../store/store";
import BookCard from "../components/bookCard";

export default function Browse() {
  const addToVault = useBookStore((s) => s.addToVault);
  const vault = useBookStore((s) => s.vault);

  const isAdded = (id: string) =>
    vault.some((b) => b.id === id);

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">Browse Books</h1>
        <p className="text-slate-400">
          Discover and add books to your vault
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {BOOKS.map((book) => {
          const added = isAdded(book.id);

          return (
            <BookCard
              key={book.id}
              book={book}
              onAdd={() => addToVault(book)}
            >
              <button
                disabled={added}
                className={`mt-3 w-full py-2 rounded-lg text-sm font-medium transition ${
                  added
                    ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                {added ? "Added" : "Add to Vault"}
              </button>
            </BookCard>
          );
        })}
      </div>
    </div>
  );
}