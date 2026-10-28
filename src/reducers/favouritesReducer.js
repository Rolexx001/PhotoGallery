
export const FAVOURITES_STORAGE_KEY = 'celebrare_favourite_photos';
export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';

export function getInitialFavourites() {
  try {
    const stored = window.localStorage.getItem(FAVOURITES_STORAGE_KEY);

    if (!stored) return [];

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) return [];

    return [...new Set(
      parsed
        .filter((id) => id !== null && id !== undefined && String(id).trim() !== '')
        .map(String)
    )];
  } catch {
    return [];
  }
}

export function favouritesReducer(state = [], action) {
  switch (action.type) {
    case TOGGLE_FAVOURITE: {
      const photoId = String(action.payload);

      if (action.payload == null || String(action.payload).trim() === '') {
        return state;
      }

      if (state.some((id) => String(id) === photoId)) {
        return state.filter((id) => String(id) !== photoId);
      }

      return [...state, photoId];
    }

    default:
      return state;
  }
}
