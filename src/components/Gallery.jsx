import { useState, useReducer, useEffect, useCallback, useMemo } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import {
  favouritesReducer,
  TOGGLE_FAVOURITE,
  FAVOURITES_STORAGE_KEY,
  getInitialFavourites,
} from '../reducers/favouritesReducer';
import PhotoCard from './PhotoCard';
import SearchBar from './SearchBar';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchQuery, setSearchQuery] = useState('');
  const [favourites, dispatchFavourites] = useReducer(
    favouritesReducer,
    [],
    getInitialFavourites
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(
        FAVOURITES_STORAGE_KEY,
        JSON.stringify(favourites)
      );
    } catch (err) {
      console.warn('Unable to persist favourites to localStorage:', err);
    }
  }, [favourites]);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleToggleFavourite = useCallback((photoId) => {
    dispatchFavourites({ type: TOGGLE_FAVOURITE, payload: photoId });
  }, []);

  const filteredPhotos = useMemo(() => {
    const trimmedQuery = searchQuery.trim().toLowerCase();

    if (!trimmedQuery) {
      return photos;
    }

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(trimmedQuery)
    );
  }, [photos, searchQuery]);

  const isFavourite = (photoId) => favourites.includes(String(photoId));

  return (
    <section className="w-full">
      {!error && (
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
        />
      )}

      {!loading && !error && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-200 mb-8 text-sm text-slate-600">
          <p>
            Showing <span className="font-semibold text-slate-900">{filteredPhotos.length}</span> of{' '}
            <span className="font-semibold text-slate-900">{photos.length}</span> photos
            {searchQuery.trim() && (
              <span> for query &ldquo;<span className="italic text-indigo-600">{searchQuery.trim()}</span>&rdquo;</span>
            )}
          </p>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
              <svg
                className="w-3.5 h-3.5 fill-rose-500 text-rose-500"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              <span>{favourites.length} Favourited</span>
            </span>
          </div>
        </div>
      )}

      {loading && <LoadingSpinner />}

      {!loading && error && <ErrorMessage message={error} />}

      {!loading && !error && filteredPhotos.length === 0 && (
        <div className="text-center py-16 px-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
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
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            No matching photos found
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            No photographer names match &ldquo;{searchQuery.trim()}&rdquo;. Try another name or clear your search filter.
          </p>
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-indigo-700 bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          >
            Clear Search Filter
          </button>
        </div>
      )}

      {!loading && !error && filteredPhotos.length > 0 && (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          role="region"
          aria-label="Photos grid"
        >
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={isFavourite(photo.id)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      )}
    </section>
  );
}
