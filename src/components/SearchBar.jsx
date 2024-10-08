import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // The search functionality is now handled in the index.astro file
    // This component just updates its own state and submits the form
  };

  return (
    <form onSubmit={handleSearch} className="max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          name="query"
          placeholder="Buscar orquídeas..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-primary dark:border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary bg-white dark:bg-dark-bg text-text dark:text-dark-text"
        />
        <button
          type="submit"
          className="absolute right-2 top-2 bg-primary dark:bg-secondary text-white px-4 py-1 rounded-md hover:opacity-80 transition-opacity"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default SearchBar;