type Props = {
  label: string;
  value: number;
};

export default function StatsCard({ label, value }: Props) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl text-center">
      <p className="text-slate-400">{label}</p>
      <h2 className="text-2xl font-bold text-blue-400">
        {value}
      </h2>
    </div>
  );
}