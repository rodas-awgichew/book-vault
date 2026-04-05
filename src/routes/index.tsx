import { useBookStore } from "../../store/store";
import { getStats } from "../../books/selectors";
import StatsCard from "../components/statusCard";

export default function Home() {
  const vault = useBookStore((s) => s.vault);
  const { total, completed, reading } = getStats(vault);

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-slate-400 mt-1">
          Overview of your reading activity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard label="Total Books" value={total} />
        <StatsCard label="Reading" value={reading} />
        <StatsCard label="Completed" value={completed} />
      </div>
    </div>
  );
}