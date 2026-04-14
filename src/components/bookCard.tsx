import type { Book, BookStatus } from "../../books/types";

type Props = {
  book: Book;
  onAdd?: () => void;
  onRemove?: () => void;
  onStatusChange?: (status: string) => void;
};

export default function BookCard({
  book,
  onAdd,
  onRemove,
  onStatusChange,
}: Props) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 shadow-md hover:shadow-lg transition">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />

      <h2 className="text-lg font-semibold text-slate-100">
        {book.title}
      </h2>
      <p className="text-sm text-slate-400">{book.author}</p>

      <div className="mt-3 flex flex-col gap-2">
        {onAdd && (
          <button
            onClick={onAdd}
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 rounded-lg"
          >
            Add
          </button>
        )}

      
{onStatusChange && (
  <div className="flex gap-2">
    {(["unread", "reading", "completed"] as BookStatus[]).map((status) => (
      <button
        key={status}
        onClick={() => onStatusChange(status)}
        className={`px-3 py-1 rounded-md text-sm
          ${book.status === status 
            ? "bg-green-600 text-white" 
            : "bg-slate-700 text-gray-300 hover:bg-slate-600"}`}
        aria-label={`Set status to ${status}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </button>
    ))}
  </div>
)}


        {onRemove && (
          <button
            onClick={onRemove}
            className="bg-red-500 hover:bg-red-600 text-white py-1 rounded-lg"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}