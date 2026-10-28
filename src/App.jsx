import Gallery from './components/Gallery';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200/80 bg-white shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div className="inline-flex items-center justify-center p-3 mb-3 bg-indigo-50 text-indigo-600 rounded-2xl shadow-xs">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Photo Gallery
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Explore curated photography from Picsum, search your favourite photographers in real time, and bookmark shots to your personal collection.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Gallery />
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
          Celebrare Frontend Internship Assignment &bull; Built with React, Vite &amp; Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
