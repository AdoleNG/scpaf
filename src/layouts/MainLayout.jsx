import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-slate-100 text-center py-4 text-sm text-slate-600">
        SCPAF © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
