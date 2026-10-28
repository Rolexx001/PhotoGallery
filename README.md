# Photo Gallery App

A responsive photo gallery built with React, Vite, and Tailwind CSS as part of the Celebrare Frontend Intern Pre-Screening Assignment.

## Features

- Fetches 30 photos from the Picsum Photos API.
- Displays photos in a responsive grid.
- Searches photos by author name in real time.
- Allows users to favourite and unfavourite photos.
- Persists favourites across page refreshes using localStorage.
- Uses a custom `useFetchPhotos` hook for API fetching.
- Uses `useReducer` to manage favourites.
- Uses `useCallback` for the search handler.
- Uses `useMemo` to calculate filtered photos.
- Handles loading, API errors, and empty search results.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Picsum Photos API
- React Hooks
- Browser localStorage

## API

The application fetches photos from:

https://picsum.photos/v2/list?limit=30

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd YOUR_PROJECT_FOLDER
```

Install dependencies:

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
│   ├── Gallery.jsx
│   ├── PhotoCard.jsx
│   ├── SearchBar.jsx
│   ├── LoadingSpinner.jsx
│   └── ErrorMessage.jsx
├── hooks/
│   └── useFetchPhotos.js
├── reducers/
│   └── favouritesReducer.js
├── App.jsx
├── main.jsx
└── index.css
```

*The structure above reflects the intended organization; update it if your actual project differs.*

## Implementation Notes

- `useFetchPhotos`: Fetches photos and exposes the `photos`, `loading`, and `error` states.
- `useReducer`: Adds or removes favourite photo IDs without mutating the existing state.
- `localStorage`: Saves favourite IDs so they can be restored after a page refresh.
- `useCallback`: Memoizes the search handler function.
- `useMemo`: Reuses the filtered photo list while its dependencies remain unchanged.

## Assignment Submission

- **GitHub Repository:** Add your public repository URL when submitting.
- **Screen Recording:** Add your 5-minute recording link to the submission form.

Built as part of the Celebrare Frontend Intern Pre-Screening Assignment.
