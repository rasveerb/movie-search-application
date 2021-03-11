import { useHistory } from 'react-router-dom';

import './Search.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            className="searchBar"
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search movie titles"
            ref={input => input && input.focus()}
        />
        <button type="submit">Search</button>
    </form>
);
export default SearchBar;
