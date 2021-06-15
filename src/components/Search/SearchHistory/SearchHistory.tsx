import React from 'react'

import './searchHistory.scss'
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const SearchHistory = () => {

    const {history} = useTypedSelector(state => state.history)
    return (
        <div className="history">
            <span className="history__title">Search history:</span>
            <div className="history__list">
                {
                    history.map((item: string) => <span>{item}</span>)
                }
            </div>
        </div>
    )
}

export default SearchHistory