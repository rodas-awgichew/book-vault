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
      <button title="status" value={status} onClick={() => setStatus("all")} className="bg-slate-800 text-white p-2 rounded-lg">All</button>
        <button title="status" value={status} onClick={() => setStatus("reading")} className="bg-slate-800 text-white p-2 rounded-lg">Reading</button>
        <button title="status" value={status} onClick={() => setStatus("completed")} className="bg-slate-800 text-white p-2 rounded-lg">Completed</button>
     
    </div>
  );
}