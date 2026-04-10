import { Link, Outlet } from "@tanstack/react-router";

export default function Root() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">

      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-800 backdrop-blur-md bg-slate-900/70 sticky top-0 z-50">
        
        <Link to="/">
          <h1 className="text-xl font-bold text-blue-400 tracking-wide">
            📚 Book Vault
          </h1>
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          
          <Link
            to="/"
            activeProps={{ className: "text-blue-400" }}
            inactiveProps={{ className: "hover:text-blue-400" }}
          >
            Home
          </Link>

          <Link
            to="/browse"
            activeProps={{ className: "text-blue-400" }}
            inactiveProps={{ className: "hover:text-blue-400" }}
          >
            Browse
          </Link>

          <Link
            to="/vault"
            activeProps={{ className: "text-blue-400" }}
            inactiveProps={{ className: "hover:text-blue-400" }}
          >
            Vault
          </Link>

        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}