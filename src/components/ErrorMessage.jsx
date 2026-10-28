export default function ErrorMessage({ message }) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="max-w-xl mx-auto my-12 p-6 bg-red-50 border border-red-200 rounded-xl text-center shadow-sm"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-4">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h3 className="text-lg font-semibold text-red-900 mb-1">
        Unable to load gallery photos
      </h3>
      <p className="text-sm text-red-700 leading-relaxed">
        {message || 'An unexpected error occurred while communicating with the photo service.'}
      </p>
      <p className="text-xs text-red-500 mt-3">
        Please check your internet connection and refresh the page to try again.
      </p>
    </div>
  );
}
