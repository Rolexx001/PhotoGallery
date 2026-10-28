export default function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
        <img
          src={photo.download_url}
          alt={`Photograph captured by ${photo.author}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
        />

        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite
              ? `Remove photo by ${photo.author} from favourites`
              : `Add photo by ${photo.author} to favourites`
          }
          aria-pressed={isFavourite}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 ${
            isFavourite
              ? 'bg-white/95 text-rose-500 shadow-md scale-105'
              : 'bg-black/30 text-white hover:bg-white hover:text-rose-500'
          }`}
        >
          <svg
            className="w-5 h-5 transition-transform active:scale-125"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFavourite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth={isFavourite ? '0' : '2'}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </button>
      </div>

      <div className="p-4 flex items-center justify-between gap-3 bg-white">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Author
          </p>
          <h3
            className="text-base font-semibold text-slate-800 truncate"
            title={photo.author}
          >
            {photo.author}
          </h3>
        </div>

        {isFavourite && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-600 border border-rose-200">
            Favourited
          </span>
        )}
      </div>
    </article>
  );
}
