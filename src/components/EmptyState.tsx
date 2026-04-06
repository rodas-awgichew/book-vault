import { Link } from "@tanstack/react-router";

export default function EmptyState() {
  return (
    <div className="text-center mt-10">
      <p>No books in your vault yet.</p>
      <Link to="/browse" className="text-blue-500">
        Browse books
      </Link>
    </div>
  );
}