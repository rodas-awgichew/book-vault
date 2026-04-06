import {useState} from "react";
import { useBookStore } from "../../store/store";
import BookCard from "../components/bookCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import EmptyState from "../components/EmptyState";

export default function Vault() {
  const vault = useBookStore((s) => s.vault);
  const remove = useBookStore((s) => s.removeFromVault);
  const updateStatus = useBookStore((s) => s.updateStatus);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  let filtered = vault.filter((b) => {
  const query = search.toLowerCase();

  return (
    b.title.toLowerCase().includes(query) ||
    b.author.toLowerCase().includes(query) ||
    (b.genre?.toLowerCase().includes(query) ?? false)
  );
});

  if (status !== "all") {
    filtered = filtered.filter((b) => b.status === status);
  }

  if (vault.length === 0) return <EmptyState />;

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">My Vault</h1>
        <p className="text-slate-400">
          Manage your personal collection
        </p>
      </div>

      <SearchBar value={search} onChange={setSearch} />

      <FilterBar
        status={status}
        setStatus={setStatus}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onRemove={() => remove(book.id)}
            onStatusChange={(s) =>
              updateStatus(book.id, s as any)
            }
          />
        ))}
      </div>
    </div>
  );
}