export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <label htmlFor="author-search" className="block text-sm font-medium text-slate-700 mb-2">
        Search by Author
      </label>
      <div className="relative rounded-xl shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          id="author-search"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Filter photos by author name (e.g. Alejandro, Paul)..."
          className="block w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-10 text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-colors"
        />

        {value && (
          <button
            type="button"
            onClick={() => onChange({ target: { value: '' } })}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 focus:outline-none"
            aria-label="Clear search query"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
