import { useState, useEffect } from 'react';

const API_URL = 'https://picsum.photos/v2/list?limit=30';

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchPhotos() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(API_URL, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load photos. Server responded with status ${response.status}.`);
        }

        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        if (err.name === 'AbortError') {
          return;
        }

        setError(err.message || 'A network error occurred while loading photos.');
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPhotos();

    return () => {
      abortController.abort();
    };
  }, []);

  return { photos, loading, error };
}

export default useFetchPhotos;
