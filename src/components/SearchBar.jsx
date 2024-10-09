import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchQuery = formData.get('query');
    const searchEvent = new CustomEvent('orchidSearch', {
      detail: searchQuery,
    });
    window.dispatchEvent(searchEvent);
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
