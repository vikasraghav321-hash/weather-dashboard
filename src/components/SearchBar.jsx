
import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      return;
    }

    onSearch(city.trim());
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mt-8"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city..."
        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 px-6 rounded-xl font-semibold"
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </form>
  );
}

export default SearchBar;
