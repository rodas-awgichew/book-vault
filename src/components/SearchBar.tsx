type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search books..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none"
    />
  );
}