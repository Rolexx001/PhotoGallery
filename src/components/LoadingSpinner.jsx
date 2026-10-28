export default function LoadingSpinner() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center py-20 px-4 text-center"
    >
      <svg
        className="h-12 w-12 animate-spin text-indigo-600 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <p className="text-base font-medium text-slate-700">Loading photos...</p>
      <p className="text-sm text-slate-500 mt-1">Fetching high-resolution images from Picsum API</p>
      <span className="sr-only">Loading photos, please wait...</span>
    </div>
  );
}
