import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-gray-700">Welcome to Remix</h1>
      <div className="flex gap-x-4 mt-6">
        <Link className="px-4 inline-block bg-slate-600 text-white" to="/todo">
          Todo
        </Link>
        <Link className="px-4 inline-block bg-slate-600 text-white" to="/notes">
          Notes
        </Link>
      </div>
    </div>
  );
}
