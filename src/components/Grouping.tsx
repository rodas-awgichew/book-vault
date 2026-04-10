import type { Book } from "../../books/types";

type SectionProps = {
  title: string;
  books: Book[];
  variant: "unread" | "reading" | "completed";
};

const styles = {
  unread: "border-r-4 border-gray-500",
  reading: "border-r-4 border-blue-500",
  completed: "border-r-4 border-green-500",
};

export default function Grouping({ title, books, variant }: SectionProps) {
  return (
    <div className={`bg-slate-900 p-5 rounded-2xl shadow-md ${styles[variant]}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold capitalize">{title}</h2>
      </div>

      {books.length === 0 ? (
        <p className="text-sm text-gray-500">No books here yet.</p>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.slice(0, 4).map((book) => (
              <div
                key={book.id}
                className="bg-slate-800 p-3 border border-gray-600 rounded-lg hover:scale-[1.03] transition cursor-pointer"
              >
                <p className="font-medium line-clamp-1">{book.title}</p>
                <p className="text-sm text-gray-400">{book.author}</p>
              </div>
            ))}
          </div>

          {books.length > 4 && (
            <button className="mt-4 text-sm text-blue-400 hover:underline">
              View all →
            </button>
          )}
        </>
      )}
    </div>
  );
}