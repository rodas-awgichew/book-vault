type Props = {
  status: string;
  setStatus: (val: string) => void;
};

export default function FilterBar({
  status,
  setStatus,
}: Props) {
  return (
    <div className="flex gap-4 my-4">
      <select
        title="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="bg-slate-800 text-white p-2 rounded-lg"
      >
        <option value="all">All</option>
        <option value="unread">Unread</option>
        <option value="reading">Reading</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}