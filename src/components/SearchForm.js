import React from 'react';

const SearchForm = ({ searchfield, filterChange }) => {
    return (
        <div className='topnav'>
            <a href='https://hn.algolia.com/'> <img src='https://d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png' alt="hacker rank logo" height='50px' width='50px'/></a>
            <h4 className='header'> Search <br/> Hacker News</h4>
            <input
                type='search'
                placeholder= "🔎 Search stories by title, tag,  or author..."
                onChange={filterChange}
            />
        </div>
    );
}

export default SearchForm;

