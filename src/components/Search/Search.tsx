import React, {useState} from 'react'
import {useDispatch} from "react-redux"

import SearchHistory from "./SearchHistory/SearchHistory"
import {searchRepository} from "../../redux/action/list"
import {setList} from "../../redux/reducers/listReducer"

import './search.scss'
import {setHistory} from "../../redux/reducers/historyReducer";

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searchTimeout, setSearchTimeout] = useState(0)
    const dispatch = useDispatch()

    const searchHandler = (e: any) => {
        setSearchValue(e.target.value)
        searchTimeout && clearTimeout(searchTimeout)
        e.target.value !== '' ? setSearchTimeout(setTimeout((value: string) => {
            dispatch(searchRepository(value))
            dispatch(setHistory(value))
        }, 500, e.target.value)) : dispatch(setList([]))
    }
    return (
        <section className="search">
            <input className="search__input" type="text" value={searchValue} onChange={(e) => searchHandler(e)}/>
            <SearchHistory/>
        </section>
    )
}

export default Search