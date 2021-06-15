import React from 'react'

import SearchHistory from "./SearchHistory/SearchHistory"

import './search.scss'

const Search = () => {
    return (
        <section className="search">
            <input className="search__input" type="text"/>
            <SearchHistory/>
        </section>
    )
}

export default Search