import React from 'react';

const SearchBar = ({ q, setQ }) => {
    return (
        <div className="search-wrap">
            <i className="bi bi-search"></i>
            <input
                className="search-input"
                placeholder="Search"
                value={q ?? ''}
                onChange={(e) => setQ(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
