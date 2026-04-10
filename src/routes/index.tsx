import { useBookStore } from "../../store/store";
import { getStats } from "../../books/selectors";
import StatsCard from "../components/statusCard";
import Grouping from "../components/grouping";

export default function Home() {
  const vault = useBookStore((s) => s.vault);

  const { total, completed, reading } = getStats(vault);

  // Group data
  const unreadBooks = vault.filter((b) => b.status === "unread");
  const readingBooks = vault.filter((b) => b.status === "reading");
  const completedBooks = vault.filter((b) => b.status === "completed");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-slate-400 mt-1">
          Overview of your reading activity
        </p>
      </div>

      Stats
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard label="Total Books" value={total} />
        <StatsCard label="Reading" value={reading} />
        <StatsCard label="Completed" value={completed} />
      </div>

      {/* Grouped Sections */}
      <div className="space-y-6">
        <Grouping title="Unread" books={unreadBooks} variant="unread" />
        <Grouping title="Reading" books={readingBooks} variant="reading" />
        <Grouping title="Completed" books={completedBooks} variant="completed" />
      </div>
    </div>
  );
}